/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
function PlayerSelected({
  selectedCharacterName,
  selectedCharacterImage,

  currentPlayer,
  pokemons,
  player,
  selectCharacter,
}) {
  const [open, setOpen] = useState(true);

  const handleChoosePokemon = (name, image) => {
    setOpen(false);

    // console.log("currentPlayer:", currentPlayer, "player:", player);
    selectCharacter(name, image, player);
  };
  // console.log("currentPlayer", newGame.current.currentPlayer, player);

  // console.log("isPlayerOne", isPlayerOne);

  const activeStyle = ` gap-2 h-20 w-32 flex flex-col justify-around items-center rounded-xl bg-white `;
  const notActiveStyle = ` gap-2 h-20 w-32 flex flex-col justify-around items-center rounded-xl bg-red-300 text-red-200 `;

  const handleSelect = () => {
    setOpen(!open);
  };
  // console.log("currentPlayer", currentPlayer);
  return (
    <div className=" flex flex-col items-center gap-4 ">
      {/* player component start */}
      <div className="gap-2 flex flex-col items-center bg-red-500 w-48 h-fit rounded-xl p-3 justify-around">
        <div
          className={currentPlayer === player ? activeStyle : notActiveStyle}
        >
          <p className=" bg-yellow-300 px-2 py-1  rounded-xl">{player}</p>
          <p className=" bg-yellow-300">{selectedCharacterName}</p>
        </div>

        <div
          className=" flex flex-col items-center justify-center w-32 h-32 border-2  rounded-xl p-2 
      "
        >
          {/* <p className=" capitalize ">{name}</p> */}

          <img
            src={selectedCharacterImage}
            className=" max-w-full max-h-full object-cover"
            alt={selectedCharacterName}
          />
        </div>
      </div>
      <button onClick={handleSelect}>Select Character</button>
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
