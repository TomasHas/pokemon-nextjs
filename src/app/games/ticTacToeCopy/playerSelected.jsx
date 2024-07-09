/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
function PlayerSelected({
  newGame,

  pokemons,
  player,
}) {
  const [open, setOpen] = useState(true);
  // console.log(newGame);
  const isPlayerOne = newGame.current.currentPlayer === player;
  let name = "";
  let image = "";

  const handleChoosePokemon = (name, image) => {
    setOpen(false);

    if (isPlayerOne) {
      newGame.current.p1PokemonNameSET = name;
      newGame.current.p1PokemonImageSET = image;
    } else {
      newGame.current.p2PokemonNameSET = name;
      newGame.current.p2PokemonImageSET = image;
    }
  };
  // console.log("currentPlayer", newGame.current.currentPlayer, player);

  // console.log("isPlayerOne", isPlayerOne);
  if (isPlayerOne) {
    image = newGame.current.p1PokemonImageGET;
    name = newGame.current.p1PokemonNameGET;
  } else {
    image = newGame.current.p2PokemonImageGET;
    name = newGame.current.p2PokemonNameGET;
  }

  const className = `h-10 w-28 flex  justify-center items-center rounded-xl ${
    isPlayerOne ? "bg-white " : "bg-red-300 text-red-200"
  }`;

  return (
    <div className=" flex flex-col items-center gap-4 ">
      {/* player component start */}
      <div className=" flex flex-col items-center bg-red-500 w-40 h-40 rounded-xl p-3 justify-around">
        <div className={className}>
          <p>{player}</p> <p>{name}</p>
        </div>

        <div
          className=" flex flex-col items-center justify-center w-24 h-24  border-2 border-yellow-50 rounded-xl p-2 
      "
        >
          {/* <p className=" capitalize ">{name}</p> */}

          <img
            src={image}
            className=" max-w-full max-h-full object-cover"
            alt={name}
          />
        </div>
      </div>
      {open && (
        <ul
          className="grid grid-cols-2 grid-rows-10 w-full gap-2
     border-2 border-blue-600 p-4 rounded-xl "
        >
          {pokemons.map((p, i) => (
            <li
              key={i}
              className="w-16 h-16 bg-white shadow-md rounded p-2 justify-center flex flex-col items-center hover:bg-yellow-400 cursor-pointer"
              onClick={() => {
                handleChoosePokemon(p.name, p.image);
              }}
              name={p.name}
            >
              <img
                src={p.image}
                alt={p.name}
                className=" max-w-full max-h-full object-cover"
                // name={pokemon}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PlayerSelected;
