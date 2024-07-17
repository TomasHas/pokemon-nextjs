import React from "react";
import Link from "next/link";
function GamesSidebar() {
  return (
    <div className=" bg-yellow-500 w-40 h-screen flex flex-col gap-4 p-5  ">
      <Link rel="stylesheet" href="/games/ticTacToeCopy ">
        <h3 className="hover:scale-110">Tic Tac Toe</h3>
      </Link>{" "}
      <Link rel="stylesheet" href="/games/connectFour">
        <h3 className="hover:scale-110">Connect Four</h3>
      </Link>{" "}
      <Link rel="stylesheet" href="/games/guessWho">
        <h3 className="hover:scale-110">Guess Who!?</h3>
      </Link>{" "}
    </div>
  );
}

export default GamesSidebar;
