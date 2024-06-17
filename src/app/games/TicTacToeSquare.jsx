import React from "react";

export default function TicTacToeSquare({
  name,
  value,
  handleClick,
  winningSquares,
}) {
  let squareColor = "green";
  winningSquares.forEach((e) => {
    if (e.toString() === name) {
      squareColor = "red";
    }
  });

  return (
    <>
      <button
        id={name}
        className={` rounded-xl flex items-center justify-center bg-${squareColor}-300 sm:h-20 sm:w-20 md:h-32 md:w-32 lg:h-40 lg:w-40 hover:bg-red-300`}
        onClick={handleClick}
        name={name}
      >
        {" "}
        <div className=" flex justify-center items-center">
          {" "}
          <p className=" text-white font-bold text-5xl capitalize">{value}</p>
        </div>
      </button>
    </>
  );
}
