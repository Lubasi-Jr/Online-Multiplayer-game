import React, { useEffect } from "react";

function Game({ socket, playingAs }) {
  /* useEffect(() => {
    socket.on("gameUpdate", (update) => {
      console.log("Game updated:", update);
      // Handle game state updates here
    });

    // Clean up socket listener on unmount
    return () => {
      socket.off("gameUpdate");
    };
  }, [socket]); */

  return (
    <div>
      <h1>Welcome to the Game!</h1>
      <p>You are playing as: {playingAs}</p>
    </div>
  );
}

export default Game;
