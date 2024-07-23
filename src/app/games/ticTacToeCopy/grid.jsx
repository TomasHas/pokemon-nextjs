"use client";
import React, { useEffect, useRef, useState } from "react";
import Square from "./square";
import { Game } from "@/app/lib/games/ticTacToeLogic";
import PlayerSelected from "./playerSelected";
import WinnerModal from "./WinnerModal";
import StartModal from "./StartModal";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Grid({ pokemons }) {
  const [state, setState] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectingPlayerOpen, setSelectingPlayerOpen] = useState(true);
  // const searchParams = useSearchParams();
  // const pathname = usePathname();
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

  const currentPlayer = newGame.current.currentPlayer;

  // console.log("currentPlayer", currentPlayer);
  console.log(newGame.current.gameStatus);
  return (
    <div className="relative  ">
      <div className=" gap-5 lg:absolute flex flex-row justify-center lg:justify-between pl-10 pr-10 w-full  ">
        <div className="text-center">
          <PlayerSelected
            player="playerOne"
            pokemons={pokemons}
            currentPlayer={currentPlayer.player}
            selectCharacter={newGame.current.selectCharacter}
            selectedCharacterName={newGame.current.p1Name}
            selectedCharacterImage={newGame.current.p1Image}
            changeGameStatus={newGame.current.changeGameStatus}
          />
        </div>
        <div className="">
          <p
            className="text-center
    "
          ></p>
          <PlayerSelected
            player="playerTwo"
            pokemons={pokemons}
            currentPlayer={currentPlayer.player}
            selectCharacter={newGame.current.selectCharacter}
            selectedCharacterName={newGame.current.playerTwo.pokemonName}
            selectedCharacterImage={newGame.current.playerTwo.pokemonImage}
          />
        </div>
      </div>{" "}
      <div className=" mt-10">
        {!newGame.current.gameStatus && (
          <div className=" flex justify-center w-full  z-10">
            <StartModal />
          </div>
        )}
      </div>{" "}
      <div className=" ">
        {open && (
          <div className=" flex justify-center w-full  shadow-2xl rounded-md   ">
            <WinnerModal
              toggleModal={toggleModal}
              playAgain={newGame.current.playAgain}
              winnerData={newGame.current.winnerDataGET}
              handleReset={handleReset}
            />
          </div>
        )}
      </div>
      <div
        className={`  lg:absolute top-0 left-[34%]  flex-col items-center ${
          newGame.current.gameStatus ? "flex" : "hidden"
        }`}
      >
        {/* <button onClick={handleState}>toggle state</button> */}
        {/* <button onClick={handleSwitchPlayer}>toggle player</button> */}
        <div className="   h-fit p-3">
          <div className="grid grid-cols-3 gap-2 ">
            {" "}
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
                  // color={}
                  checkStatus={checkStatus}
                />
              );
            })}
          </div>
          <div className="flex justify-center items-center  ">
            <button
              className=" bg-red-500 p-4 rounded-xl mt-5 shadow-xl text-white font-bold"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
