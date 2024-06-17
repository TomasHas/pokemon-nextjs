"use client";
import { TicTacToeCalculator } from "../lib/utils";
import TicTacToeSquare from "./TicTacToeSquare";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Loading from "./loading";
import WinnerModal from "./WinnerModal";
import { z } from "zod";

export default function TicTacToe() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [currentPlayer, setCurrentPlayer] = useState("none");
  const [open, setOpen] = useState(false);
  const [winnerData, setWinnerData] = useState({
    message: "",
    player: "none",
    winningLine: [],
  });
  const [squares, setSquares] = useState({
    one: { user: "none", character: "", square: 1 },
    two: { user: "none", character: "", square: 2 },
    three: { user: "none", character: "", square: 3 },
    four: { user: "none", character: "", square: 4 },
    five: { user: "none", character: "", square: 5 },
    six: { user: "none", character: "", square: 6 },
    seven: { user: "none", character: "", square: 7 },
    eight: { user: "none", character: "", square: 8 },
    nine: { user: "none", character: "", square: 9 },
  });
  const params = new URLSearchParams(searchParams);

  const toggleModal = () => {
    setOpen(!open);
  };

  useEffect(() => {
    console.log(winnerData);
    if (winnerData.player !== "none") toggleModal();
    console.log("winnerData", winnerData.player.player);
  }, [winnerData]);

  const handleWinner = (player, winningLine) => {
    setWinnerData((prev) => ({
      ...prev,
      message: `${player} wins!!!!`,
      player: { player },
      winningLine: winningLine,
    }));
  };

  const highlightWinningSquares = () => {};

  const toggleCurrentPlayer = (player) => {
    if (currentPlayer === "none") {
      setCurrentPlayer("player_one");
    }
    if (player === "player_one") {
      setCurrentPlayer("player_two");
    } else {
      setCurrentPlayer("player_one");
    }
  };

  useEffect(() => {
    TicTacToeCalculator(
      squares,
      currentPlayer,
      handleWinner,
      highlightWinningSquares
    );
    toggleCurrentPlayer(currentPlayer);
  }, [squares]);

  const handleClick = (e) => {
    e.preventDefault();
    const square = e.target.name;

    switch (square) {
      case "1":
        // console.log(currentPlayer);
        if (currentPlayer === "player_one") {
          setSquares((prevSquares) => ({
            ...prevSquares,
            one: { ...prevSquares.one, user: "player one", character: "x" },
          }));
        } else {
          setSquares((prevSquares) => ({
            ...prevSquares,
            one: { ...prevSquares.one, user: "player two", character: "o" },
          }));
        }

        break;
      case "2":
        // console.log(currentPlayer);
        if (currentPlayer === "player_one") {
          setSquares((prevSquares) => ({
            ...prevSquares,
            two: { ...prevSquares.two, user: "player one", character: "x" },
          }));
        } else {
          setSquares((prevSquares) => ({
            ...prevSquares,
            two: { ...prevSquares.two, user: "player two", character: "o" },
          }));
        }
        break;
      case "3":
        // console.log(currentPlayer);
        if (currentPlayer === "player_one") {
          setSquares((prevSquares) => ({
            ...prevSquares,
            three: { ...prevSquares.three, user: "player one", character: "x" },
          }));
        } else {
          setSquares((prevSquares) => ({
            ...prevSquares,
            three: { ...prevSquares.three, user: "player two", character: "o" },
          }));
        }
        break;
      case "4":
        // console.log(currentPlayer);
        if (currentPlayer === "player_one") {
          setSquares((prevSquares) => ({
            ...prevSquares,
            four: { ...prevSquares.four, user: "player one", character: "x" },
          }));
        } else {
          setSquares((prevSquares) => ({
            ...prevSquares,
            four: { ...prevSquares.four, user: "player two", character: "o" },
          }));
        }
        break;
      case "5":
        // console.log(currentPlayer);
        if (currentPlayer === "player_one") {
          setSquares((prevSquares) => ({
            ...prevSquares,
            five: { ...prevSquares.five, user: "player one", character: "x" },
          }));
        } else {
          setSquares((prevSquares) => ({
            ...prevSquares,
            five: { ...prevSquares.five, user: "player two", character: "o" },
          }));
        }
        break;
      case "6":
        // console.log(currentPlayer);
        if (currentPlayer === "player_one") {
          setSquares((prevSquares) => ({
            ...prevSquares,
            six: { ...prevSquares.six, user: "player one", character: "x" },
          }));
        } else {
          setSquares((prevSquares) => ({
            ...prevSquares,
            six: { ...prevSquares.six, user: "player two", character: "o" },
          }));
        }
        break;
      case "7":
        // console.log(currentPlayer);
        if (currentPlayer === "player_one") {
          setSquares((prevSquares) => ({
            ...prevSquares,
            seven: { ...prevSquares.seven, user: "player one", character: "x" },
          }));
        } else {
          setSquares((prevSquares) => ({
            ...prevSquares,
            seven: { ...prevSquares.seven, user: "player two", character: "o" },
          }));
        }
        break;
      case "8":
        // console.log(currentPlayer);
        if (currentPlayer === "player_one") {
          setSquares((prevSquares) => ({
            ...prevSquares,
            eight: { ...prevSquares.eight, user: "player one", character: "x" },
          }));
        } else {
          setSquares((prevSquares) => ({
            ...prevSquares,
            eight: { ...prevSquares.eight, user: "player two", character: "o" },
          }));
        }
        break;
      case "9":
        // console.log(currentPlayer);
        if (currentPlayer === "player_one") {
          setSquares((prevSquares) => ({
            ...prevSquares,
            nine: { ...prevSquares.nine, user: "player one", character: "x" },
          }));
        } else {
          setSquares((prevSquares) => ({
            ...prevSquares,
            nine: { ...prevSquares.nine, user: "player two", character: "o" },
          }));
        }
        break;

      default:
        break;
    }

    // handleSquareChange();
  };
  // console.log(squares);

  return (
    <div className=" relative flex flex-col ">
      {" "}
      {/* <button onClick={toggleModal}>Toggle Modal</button> */}
      <div>
        {open && (
          <div className="absolute inset-0 flex items-center justify-center ">
            <WinnerModal
              toggleModal={toggleModal}
              player={winnerData.player.player}
            />
          </div>
        )}
      </div>
      <div className="  flex flex-row justify-around ">
        <div
          className={
            currentPlayer === "player_one"
              ? " h-10 w-28 text-center  bg-yellow-500"
              : "h-10 w-28 text-center  bg-gray-500"
          }
        >
          {" "}
          <p>player one</p>
        </div>
        <div className="grid grid-cols-3 gap-3 ">
          <TicTacToeSquare
            name="1"
            value={squares.one.character}
            handleClick={handleClick}
            currentPlayer={currentPlayer}
            winningSquares={winnerData.winningLine}
          />{" "}
          <TicTacToeSquare
            name="2"
            value={squares.two.character}
            handleClick={handleClick}
            winningSquares={winnerData.winningLine}
          />{" "}
          <TicTacToeSquare
            name="3"
            value={squares.three.character}
            handleClick={handleClick}
            winningSquares={winnerData.winningLine}
          />
          <TicTacToeSquare
            name="4"
            value={squares.four.character}
            handleClick={handleClick}
            winningSquares={winnerData.winningLine}
          />{" "}
          <TicTacToeSquare
            name="5"
            value={squares.five.character}
            handleClick={handleClick}
            winningSquares={winnerData.winningLine}
          />{" "}
          <TicTacToeSquare
            name="6"
            value={squares.six.character}
            handleClick={handleClick}
            winningSquares={winnerData.winningLine}
          />{" "}
          <TicTacToeSquare
            name="7"
            value={squares.seven.character}
            handleClick={handleClick}
            winningSquares={winnerData.winningLine}
          />{" "}
          <TicTacToeSquare
            name="8"
            value={squares.eight.character}
            handleClick={handleClick}
            winningSquares={winnerData.winningLine}
          />{" "}
          <TicTacToeSquare
            name="9"
            value={squares.nine.character}
            handleClick={handleClick}
            winningSquares={winnerData.winningLine}
          />
        </div>{" "}
        <div
          className={
            currentPlayer === "player_two"
              ? " h-10 w-28 text-center  bg-yellow-500"
              : "h-10 w-28 text-center  bg-gray-500"
          }
        >
          <p>player two</p>
        </div>
      </div>
    </div>
  );
}

// const currentPlayer = params.get("player");
// console.log(params.toString());
// const togglecurrentPlayer = (currentPlayer) => {
//   if (currentPlayer === "") {
//     params.set("player", "player_one");
//   } else if (currentPlayer === "player_one") {
//     params.set("player", "two");
//   } else {
//     params.set("player", "player_one");
//   }
//   replace(`${pathname}?${params.toString()}`);
// };

// const togglecurrentPlayer = (currentPlayer) => {
//   if (currentPlayer === "player_one") {
//     params.set("player", "player_two");
//   } else {
//     params.set("player", "player_one");
//   }
//   replace(`${pathname}?${params.toString()}`);
// };
// const toggleModal = () => {
//   setOpen(!open);
// };
// const handleSquareChange = () => {
//   togglecurrentPlayer(currentPlayer);
// };
