import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import http from "http";
import { Server } from "socket.io";
import { connect } from "http2";
import { log } from "console";

const app = express();
const PORT = 3000;

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

let arr = [];
let playingArray = [];

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("find", (data) => {
    console.log(data);

    arr.push(data);
    if (arr.length >= 1) {
      let p1object = {
        p1name: arr[0].name,
        p1ID: arr[0].id,
        p1value: "X",
        p1move: "",
      };

      /* let p2object = {
        p2name: arr[1].name,
        p2ID: arr[1].id,
        p2value: "O",
        p2move: "",
      }; */

      let obj = {
        player1: p1object,
        //player2: p2object,
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
});

server.listen(PORT, () => {
  console.log(`Server on, listening on port ${PORT}`);
});
