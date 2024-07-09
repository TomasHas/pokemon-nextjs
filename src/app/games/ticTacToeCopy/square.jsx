import React, { useState } from "react";

export default function Square({ number, newGame }) {
  // const [name, setName] = useState("");
  // const [image, setImage] = useState("");

  const togglePlayer = () => {
    if (newGame.current.curPlayerGET === "playerOne") {
      newGame.current.curPlayerSET = "playerTwo";
    } else {
      newGame.current.curPlayerSET = "playerOne";
    }
  };
  let image = "";
  let name = "";
  const handleClick = (e) => {
    e.preventDefault();
    if (newGame.current.curPlayerGET === "playerOne") {
      newGame.current.p1SquaresSET = number;
    } else {
      newGame.current.p2SquaresSET = number;
    }

    console.log(newGame.current.p1SquaresGET, newGame.current.p2SquaresGET);
    newGame.current.calculateWinner(newGame.current.curPlayerGET);
    togglePlayer();
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
