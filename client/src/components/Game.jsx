import React, { useEffect, useState } from "react";
import SymbolO from "./SymbolO";
import SymbolX from "./SymbolX";
import Square from "./Square";

let symbol;

function Game({ gameData, socket, playingAs }) {
  const [squareSymbol, setSquareSymbol] = useState({
    1: "",
    2: <SymbolX />,
    3: "",
    4: "",
    5: <SymbolX />,
    6: "",
    7: "",
    8: <SymbolX />,
    9: "",
  });

  useEffect(() => {
    //Firstly, find out what symbol you are playing as

    return () => {
      socket.off("gameUpdate");
    };
  }, []);

  function updateSquare(id, newSymbol) {
    //If symbol to update is X make a X component
    symbol = newSymbol == "X" ? <SymbolX /> : <SymbolO />;
    //Symbol would be O if this function was called because it received a move from opponent

    setSquareSymbol((previous) => ({
      ...previous,
      [id]: symbol,
    }));
  }

  return (
    <>
      <div className="text-wrap mb-7 flex flex-col items-center justify-center">
        <p className="text-xl font-bold mb-2">You are playing as {playingAs}</p>
        <div className="flex items-center justify-center">
          <p className="text-xl font-bold">Trent's turn</p>
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-3  w-[300px] h-[300px] border-2 border-black">
        <Square key={1} id={1} content={squareSymbol[1]} />
        <Square key={2} id={2} content={squareSymbol[2]} />
        <Square key={3} id={3} content={squareSymbol[3]} />
        <Square key={4} id={4} content={squareSymbol[4]} />
        <Square key={5} id={5} content={squareSymbol[5]} />
        <Square key={6} id={6} content={squareSymbol[6]} />
        <Square key={7} id={7} content={squareSymbol[7]} />
        <Square key={8} id={8} content={squareSymbol[8]} />
        <Square key={9} id={9} content={squareSymbol[9]} />
      </div>
    </>
  );
}

export default Game;
