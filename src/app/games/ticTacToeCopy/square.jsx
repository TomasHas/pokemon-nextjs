"use client";
import React, { useState } from "react";

export default function Square({
  number,
  name,
  image,
  playerData, //playerdata = {player, pokemonName,pokemonImage,squares, color}
  switchPlayer,
  assignSquare,
  calculateWinner,
  color,
  checkStatus,
}) {
  // const [name, setName] = useState("");
  // const [image, setImage] = useState("");
  // console.log(playerData);
  const handleClick = (e) => {
    e.preventDefault();
    assignSquare(number, playerData);
    switchPlayer();
    calculateWinner(playerData, checkStatus);
  };
  // console.log(name);
  const isHidden = name === undefined ? "hidden" : "";
  return (
    <div className=" bg-yellow-500 rounded-md">
      <div
        className={`flex justify-center items-center h-24 w-24 bg-${color}-600 hover:bg-slate-500 rounded-md`}
        onClick={handleClick}
      >
        <img src={image} alt={name} className={` ${isHidden} h-20 w-20 `} />
      </div>
    </div>
  );
}
