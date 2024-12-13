import React, { useEffect, useState } from "react";
import SymbolO from "./SymbolO";
import SymbolX from "./SymbolX";
import Square from "./Square";
import checkWinner from "./GameLogic.js";
import Back from "./BackButton.jsx";
import { Link } from "react-router-dom";
import Leave from "./LeaveRoom";

let symbol;

function Game({ gameData, socket, playingAs }) {
  const [squareSymbol, setSquareSymbol] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
  });

  const [gameState, setGameState] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [locked, setLock] = useState(playingAs === "X" ? false : true);

  const oppName =
    playingAs == "X" ? gameData.player2.p2name : gameData.player1.p1name;

  useEffect(() => {
    //Firstly, find out what symbol you are playing as

    return () => {
      socket.off("gameUpdate");
    };
  }, []);

  socket.on("gameUpdate", (data) => {
    setGameState((previousArray) => {
      const updatedArray = [...previousArray];
      updatedArray[data.square - 1] = data.letter;

      //Check winner
      //Must be in setGameState becasue useState is asynchronous

      const result = checkWinner(updatedArray);

      if (result.winner) {
        if (result.winner === "Draw") {
          alert("It's a draw!");
        } else {
          const winnerDisplay =
            result.winner === playingAs ? "You win!!!" : "You lose!";
          alert(winnerDisplay);
        }
        setLock(true); // Lock the game if there's a result
      }

      return updatedArray;
    });

    updateSquare(data.square, data.letter);

    //Code for checking winner

    //If game goes on, then update the states
    setLock(!locked); // This also automatically changes the heading
  });

  function updateSquare(id, newSymbol) {
    //If symbol to update is X make a X component
    symbol = newSymbol == "X" ? <SymbolX /> : <SymbolO />;
    //Symbol would be O if this function was called because it received a move from opponent

    setSquareSymbol((previous) => ({
      ...previous,
      [id]: symbol,
    }));
  }

  function makeMove(buttonID) {
    if (!locked) {
      //If it is locked then you are blocked from trying to make a move. Wait for opponents turn

      //Code to send move to the server

      socket.emit("makeMove", { square: buttonID, letter: playingAs });

      setGameState((previousArray) => {
        const updatedArray = [...previousArray];
        updatedArray[buttonID - 1] = playingAs;

        const result = checkWinner(updatedArray);

        if (result.winner) {
          if (result.winner === "Draw") {
            alert("It's a draw!");
          } else {
            const winnerDisplay =
              result.winner === playingAs ? "You win!!!" : "You lose!";
            alert(winnerDisplay);
          }
          setLock(true); // Lock the game if there's a result
        }

        return updatedArray;
      });

      //
      //Since you made the move, when calling updateSquare you just have to parse what you are playing as
      updateSquare(buttonID, playingAs);
      //Update game state

      //Code to check winner

      //If game goes on, then update the states
      setLock(!locked); // This also automatically changes the heading
    }
  }

  return (
    <>
      <div className="text-wrap mb-7 flex flex-col items-center justify-center">
        <p className="text-xl font-bold mb-2 font-magic">
          You are playing as {playingAs}
        </p>
        <div className="flex items-center justify-center">
          <p id="match" className="text-xl font-magic font-bold">
            {locked ? `${oppName}'s turn (Opponent)` : "Your turn"}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-3  w-[300px] h-[300px] border-2 border-black">
        <Square key={1} id={1} content={squareSymbol[1]} func={makeMove} />
        <Square key={2} id={2} content={squareSymbol[2]} func={makeMove} />
        <Square key={3} id={3} content={squareSymbol[3]} func={makeMove} />
        <Square key={4} id={4} content={squareSymbol[4]} func={makeMove} />
        <Square key={5} id={5} content={squareSymbol[5]} func={makeMove} />
        <Square key={6} id={6} content={squareSymbol[6]} func={makeMove} />
        <Square key={7} id={7} content={squareSymbol[7]} func={makeMove} />
        <Square key={8} id={8} content={squareSymbol[8]} func={makeMove} />
        <Square key={9} id={9} content={squareSymbol[9]} func={makeMove} />
      </div>
      <Link to={"/"}>
        <Leave />
      </Link>
    </>
  );
}

export default Game;
