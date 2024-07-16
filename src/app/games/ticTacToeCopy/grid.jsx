"use client";
import React, { useEffect, useRef, useState } from "react";
import Square from "./square";
import { Game } from "@/app/lib/games/ticTacToeLogic";
import PlayerSelected from "./playerSelected";
import WinnerModal from "./WinnerModal";
import { z } from "zod";
export default function Grid({ pokemons }) {
  const [state, setState] = useState(true);
  const [open, setOpen] = useState(false);
  const newGame = useRef(
    new Game(() => {
      setState((prevState) => !prevState);
    })
  );

  const checkStatus = () => {
    newGame.current.winnerDataGET.status && setOpen(true);
  };

  const handleReset = (e) => {
    e.preventDefault();
    newGame.current.reset();
    setOpen(false);
    //reset game
  };
  const toggleModal = () => {
    setOpen(!open);
  };

  const currentPlayer = newGame.current.currentPlayer; //& check if needed for somethign

  const squareColor = currentPlayer.player === "playerOne" ? "red" : "blue";

  // console.log("currentPlayer", currentPlayer);
  // console.log(currentPlayer.name);
  return (
    <div className=" flex flex-row p-10">
      <div className="">
        <PlayerSelected
          player="playerOne"
          pokemons={pokemons}
          currentPlayer={currentPlayer.player}
          selectCharacter={newGame.current.selectCharacter}
          selectedCharacterName={newGame.current.p1Name}
          selectedCharacterImage={newGame.current.p1Image}
        />
      </div>
      <div className="flex flex-col items-center">
        {/* <button onClick={handleState}>toggle state</button> */}
        {/* <button onClick={handleSwitchPlayer}>toggle player</button> */}
        <div className=" relative grid grid-cols-3 gap-2 h-fit p-3">
          {" "}
          {open && (
            <div className=" absolute h-full shadow-2xl rounded-md  w-full ">
              <WinnerModal
                toggleModal={toggleModal}
                playAgain={newGame.current.playAgain}
                winnerData={newGame.current.winnerDataGET}
              />
            </div>
          )}
          {newGame.current.squares.map((_, i) => {
            return (
              <Square
                key={i}
                number={i}
                playerData={currentPlayer}
                assignSquare={newGame.current.assignSquare}
                name={newGame.current.squares[i]?.pokemonName}
                image={newGame.current.squares[i]?.pokemonImage}
                switchPlayer={newGame.current.switchPlayer}
                calculateWinner={newGame.current.calculateWinner}
                color={newGame.current.squares[i]?.color}
                checkStatus={checkStatus}
              />
            );
          })}
        </div>{" "}
        <button className=" bg-red-500 p-4 rounded-xl" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className="">
        <PlayerSelected
          player="playerTwo"
          pokemons={pokemons}
          currentPlayer={currentPlayer.player}
          selectCharacter={newGame.current.selectCharacter}
          selectedCharacterName={newGame.current.playerTwo.pokemonName}
          selectedCharacterImage={newGame.current.playerTwo.pokemonImage}
        />
      </div>
    </div>
  );
}

// const handleState = (e) => {
//   e.preventDefault();
//   setState(!state);
// };
// const handleSwitchPlayer = (e) => {
//   e.preventDefault();
//   newGame.current.switchPlayer();
// };
