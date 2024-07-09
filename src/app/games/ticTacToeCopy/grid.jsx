"use client";
import React, { useRef, useState } from "react";
import Square from "./square";
import { Game } from "@/app/lib/games/ticTacToeLogic";
import PlayerSelected from "./playerSelected";

export default function Grid({ pokemons }) {
  const [state, setState] = useState(true);
  const newGame = useRef(
    new Game(() => {
      setState((g) => {
        !g;
      });
    })
  );
  console.log(newGame.current.curPlayerGET);

  console.log(newGame);

  const handleReset = (e) => {
    e.preventDefault();
    newGame.current.reset();
    //reset game
    console.log(newGame);
  };

  return (
    <div className=" flex flex-row w-screen">
      {" "}
      <div className="">
        <PlayerSelected
          player="playerOne"
          pokemons={pokemons}
          newGame={newGame}
        />
      </div>
      <div className="flex flex-col items-center">
        <div className=" grid grid-cols-3 gap-2 h-fit p-3">
          <div>
            <Square number={1} newGame={newGame} />
          </div>
          <div>
            <Square number={2} newGame={newGame} />
          </div>
          <div>
            <Square number={3} newGame={newGame} />
          </div>
          <div>
            <Square number={4} newGame={newGame} />
          </div>
          <div>
            <Square number={5} newGame={newGame} />
          </div>
          <div>
            <Square number={6} newGame={newGame} />
          </div>
          <div>
            <Square number={7} newGame={newGame} />
          </div>
          <div>
            <Square number={8} newGame={newGame} />
          </div>
          <div>
            <Square number={9} newGame={newGame} />
          </div>
        </div>{" "}
        <button className=" bg-red-500 p-4 rounded-xl" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className="">
        <PlayerSelected
          player="playerTwo"
          pokemons={pokemons}
          newGame={newGame}
        />
      </div>
    </div>
  );
}
