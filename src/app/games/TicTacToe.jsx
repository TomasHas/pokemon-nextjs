"use client";

import { useState } from "react";
export default function TicTacToe() {
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");
  const [six, setSix] = useState("");
  const [seven, setSeven] = useState("");
  const [eight, setEight] = useState("");
  const [nine, setNine] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
  };

  const square = " bg-red-500 h-40 w-40 hover:bg-red-300";
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-3 gap-3 ">
        <div id="1" className=" bg-red-500 h-40 w-40 hover:bg-red-300">
          {" "}
        </div>
        <div id="2" className={square} onClick={handleClick}>
          {" "}
        </div>
        <div id="3" className={square}>
          {" "}
        </div>
        <div id="4" className={square}>
          {" "}
        </div>
        <div id="5" className={square}>
          {" "}
        </div>
        <div id="6" className={square}>
          {" "}
        </div>
        <div id="7" className={square}>
          {" "}
        </div>
        <div id="8" className={square}>
          {" "}
        </div>
        <div id="9" className={square}>
          {" "}
        </div>{" "}
      </div>
    </div>
  );
}
