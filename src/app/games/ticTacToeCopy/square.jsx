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
}) {
  // const [name, setName] = useState("");
  // const [image, setImage] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    assignSquare(number, playerData);
    switchPlayer();
    calculateWinner(playerData);
  };

  return (
    <div>
      <div
        className="flex justify-center items-center h-24 w-24 bg-red-600 hover:bg-slate-500 rounded-md"
        onClick={handleClick}
      >
        <img src={image} alt={name} className=" h-20 w-20" />
      </div>
    </div>
  );
}
