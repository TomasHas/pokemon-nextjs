/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
function PlayerSelected({
  selectedCharacterName,
  selectedCharacterImage,
  changeGameStatus,
  currentPlayer,
  pokemons,
  player,
  selectCharacter,
}) {
  const [open, setOpen] = useState(false);

  const handleChoosePokemon = (name, image) => {
    setOpen(false);

    // console.log("currentPlayer:", currentPlayer, "player:", player);
    selectCharacter(name, image, player);
  };
  // console.log("currentPlayer", newGame.current.currentPlayer, player);

  // console.log("isPlayerOne", isPlayerOne);

  // const activeStyle = ` gap-2 h-20 w-32 flex flex-col justify-around items-center rounded-xl bg-white `;
  // const notActiveStyle = ` gap-2 h-20 w-32 flex flex-col justify-around items-center rounded-xl bg-gray-400 text-white `;

  // console.log(pokemons);
  const handleSelect = () => {
    setOpen(!open);
  };
  // console.log("currentPlayer", currentPlayer);
  return (
    <div
      className={`flex flex-col items-center gap-4  ${
        currentPlayer === player ? "bg-white" : "bg-blue-300"
      } rounded-xl shadow-xl p-1  lg:mt-10 w-36 lg:w-48`}
    >
      {" "}
      <p
        className={` ${
          currentPlayer === player ? "bg-blue-300" : "bg-white"
        } p-1 rounded-xl  w-full text-center`}
      >
        {player}
      </p>
      <div
        className={` gap-2 flex flex-col items-center w-full lg:w-48 h-fit rounded-xl lg:p-2 justify-around  `}
      >
        <div className="  flex lg:flex-col items-center justify-between lg:justify-center w-full h-12 lg:w-32 lg:h-32   lg:p-2 ">
          {/* <p className=" capitalize ">{name}</p> */}
          <p className=" capitalize">{selectedCharacterName}</p>
          <div className=" h-10 w-10">
            <img
              src={selectedCharacterImage}
              className=" max-w-full max-h-full object-cover"
              alt={selectedCharacterName}
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center text-center shadow-xl w-full  rounded-xl hover:bg-gray-200  bg-gray-100 gap-3 active:bg-gray-300 ">
        {" "}
        <button onClick={handleSelect}>Select Character</button>
        {open && (
          <div className="overflow-y-scroll h-72">
            {" "}
            <ul
              className="grid grid-cols-2 grid-rows-4 gap-2
   "
            >
              {" "}
              {pokemons?.map((p, i) => (
                <li
                  key={i}
                  className="w-16 h-16 bg-white shadow-md rounded p-1 justify-center flex flex-col items-center hover:bg-yellow-400 cursor-pointer"
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
          </div>
        )}
      </div>
    </div>
  );
}

export default PlayerSelected;
