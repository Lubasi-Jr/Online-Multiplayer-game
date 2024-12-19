import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import http from "http";
import { Server } from "socket.io";
import { connect } from "http2";
import { log } from "console";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running and WebSocket is ready!");
});

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

let arr = [];
let playingArray = [];

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);

    //Remove the player from the "arr" so that a prospective player is not matched up with someone that has been disconnected
    arr = arr.filter((player) => player.id !== socket.id);

    //Find the game which this user is playing in and alert their opponents that they have left the game
    const game = playingArray.find(
      (g) => g.player1.p1ID === socket.id || g.player2.p2ID === socket.id
    ); //Search for the game where this player is playing in
    if (game) {
      const opponentID =
        game.player1.p1ID === socket.id ? game.player2.p2ID : game.player1.p1ID;

      io.to(opponentID).emit("opponentLeft", {
        outcome: "Your opponent has left the game",
      });
    }
  });

  socket.on("find", (data) => {
    console.log(data);

    arr.push(data);
    if (arr.length >= 2) {
      let p1object = {
        p1name: arr[0].name,
        p1ID: arr[0].id,
        p1value: "X",
        p1move: "",
      };

      let p2object = {
        p2name: arr[1].name,
        p2ID: arr[1].id,
        p2value: "O",
        p2move: "",
      };

      let obj = {
        player1: p1object,
        player2: p2object,
      };

      //Add the 2 players in their respective object
      playingArray.push(obj);

      //Remove the players from the array as they have now being allocated a game
      arr.splice(0, 2);

      // io.emit notifies all clients. where as socket.emit only notifies the specific client.
      //Therefore, we want to notify all clients that there is a new game. Each client upon hearing this will run their useEffect hook and search to see if their new game is for them
      io.emit("newGame", { allPlayers: playingArray });
    }
  });

  socket.on("makeMove", (data) => {
    const game = playingArray.find(
      (g) => g.player1.p1ID === socket.id || g.player2.p2ID === socket.id
    ); //Search for the game where this player is playing in
    if (game) {
      const opponentID =
        game.player1.p1ID === socket.id ? game.player2.p2ID : game.player1.p1ID;

      io.to(opponentID).emit("gameUpdate", {
        square: data.square,
        letter: data.letter,
      }); //The square and letter that was passed by the sender
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server on, listening on port ${PORT}`);
});
