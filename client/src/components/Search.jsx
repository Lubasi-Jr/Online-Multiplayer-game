import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import Game from "./Game";

const socket = io.connect("http://localhost:3000");

function Search() {
  const [username, setUsername] = useState("");
  const [userID, setID] = useState("");
  const [xoGame, setGame] = useState(null);
  const [playingAs, setSymbol] = useState("");

  function playerName(gamerTag) {
    setUsername(gamerTag);
  }

  useEffect(() => {
    //These event listeners will get attached on mount and will be active the whole time.
    //They can be called event if they are wrapped in a useEffect with a dependecy of userID

    setID(socket.id);

    return () => {
      return () => {
        socket.disconnect(); // Disconnect on cleanup
      };
    };
  }, []);

  function find() {
    if (userID) {
      socket.emit("find", { name: username, id: userID });
      socket.on("newGame", (data) => {
        const foundGame = data.allPlayers.find(
          (game) => game.player1.p1ID === userID || game.player2.p2ID === userID
        );

        if (foundGame) {
          setGame(foundGame);
          setSymbol(foundGame.player1.p1ID === userID ? "X" : "O");
        }
      });
    } else {
      console.log("User ID is not set yet!");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {xoGame ? (
        // Render the Game component when a game is found
        <Game gameData={xoGame} playingAs={playingAs} socket={socket} />
      ) : (
        // Render the search interface if no game is found
        <>
          <SearchBar set={playerName} />
          <SearchButton searchFunction={find} />
        </>
      )}
    </div>
  );
}

export default Search;
