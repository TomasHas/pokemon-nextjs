"use client";
import React, { useState } from "react";

export default function Square({
  number,
  name,
  image,
  playerData,
  switchPlayer,
  assignSquare,
  calculateWinner,
  color,
}) {
  // const [name, setName] = useState("");
  // const [image, setImage] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    assignSquare(number, playerData);
    switchPlayer();
    calculateWinner(playerData);
  };
  console.log(name);
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
