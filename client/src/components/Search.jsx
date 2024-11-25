import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";

const socket = io.connect("http://localhost:3000");

function Search() {
  const [username, setUsername] = useState("");
  const [userID, setID] = useState("");

  function playerName(gamerTag) {
    setUsername(gamerTag);
  }

  useEffect(() => {
    //These event listeners will get attached on mount and will be active the whole time.
    //They can be called event if they are wrapped in a useEffect with a dependecy of userID
    setID(socket.id);

    const handleNewGame = (data) => {
      console.log("You are connected");
      alert("You have joined a new game");
    };

    socket.on("newGame", handleNewGame);
  }, []);

  function find() {
    if (userID) {
      socket.emit("find", { name: username, id: userID });
    } else {
      console.log("User ID is not set yet!");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <SearchBar set={playerName} />
      <SearchButton searchFunction={find} />
    </div>
  );
}

export default Search;
