import React from "react";

export default function TicTacToeSquare({
  square,
  image,
  handleClick,
  winningSquares,
}) {
  let squareColor = "green";
  winningSquares.forEach((e) => {
    if (e.toString() === square) {
      squareColor = "red";
    }
  });
  // console.log(square);
  // console.log(image, square);
  return (
    <>
      <button
        id={square}
        className={` rounded-xl flex items-center justify-center bg-${squareColor}-300 sm:h-20 sm:w-20 md:h-32 md:w-32 lg:h-40 lg:w-40 hover:bg-red-300`}
        onClick={handleClick}
        name={square}
      >
        {" "}
        <div className=" flex justify-center items-center ">
          {<img src={image} alt="" className=" max-h-[60%] max-w-[60%] p-2" />}
        </div>
      </button>
    </>
  );
}
