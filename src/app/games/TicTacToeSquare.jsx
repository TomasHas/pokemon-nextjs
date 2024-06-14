import React from "react";

export default function TicTacToeSquare({ name, value, handleClick }) {
  // console.log(one.character);

  return (
    <>
      <button
        className={`text-center text-white font-bold text-8xl bg-blue-300 h-40 w-40 hover:bg-red-300`}
        onClick={handleClick}
        name={name}
      >
        <p>{value}</p>
      </button>
    </>
  );
}
