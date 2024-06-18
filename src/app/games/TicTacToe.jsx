"use client";
import { TicTacToeCalculator } from "../lib/utils";
import TicTacToeSquare from "./TicTacToeSquare";
import { Suspense, useEffect, useState } from "react";
import PlayerComp from "./PlayerComp";
import WinnerModal from "./WinnerModal";

export default function TicTacToe({ pokemons }) {
  const [currentPlayer, setCurrentPlayer] = useState("none");
  const [open, setOpen] = useState(false);
  const [winnerData, setWinnerData] = useState({
    message: "",
    player: "none",
    winningLine: [],
  });
  const [playerOne, setPlayerOne] = useState({ name: "", image: "" });
  const [playerTwo, setPlayerTwo] = useState({ name: "", image: "" });

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

  const handleChoosePokemon = (name, image) => {
    console.log(name);
    console.log("tomas");
    setPlayerOne({ ...playerOne, name: { name }, image: { image } });
  };
  console.log(playerOne.name);
  return (
    <div className=" relative flex flex-col  ">
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
      <div className="  flex flex-row justify-between ">
        <div className=" flex flex-col items-center gap-4 ">
          <div className=" flex flex-row items-center bg-red-500 w-full h-40 rounded-xl p-3 justify-around">
            <div
              className={
                currentPlayer === "player_one"
                  ? " h-10 w-28 flex justify-center items-center bg-yellow-500"
                  : "h-10 w-28 flex justify-center items-center bg-gray-500"
              }
            >
              <p>player one</p>
            </div>
            <div
              className=" flex flex-col items-center justify-center w-[50%] h-full border-2 border-yellow-50 rounded-xl p-2 
            "
            >
              <p className=" capitalize">{playerOne.name.name}</p>
              <img
                src={playerOne?.image.image}
                alt={playerOne.name.name}
                height={50}
                width={50}
                className=" border-none  "
              />
            </div>
          </div>
          <ul
            className="grid grid-cols-4 grid-rows-5 w-full gap-2
           border-2 border-blue-600 p-4 rounded-xl "
          >
            {pokemons.map((p) => (
              <li
                key={p.name}
                className="w-16 h-16 bg-white shadow-md rounded p-4 flex flex-col items-center hover:bg-yellow-400 cursor-pointer"
                onClick={() => {
                  handleChoosePokemon(p.name, p.image);
                }}
                name={p.name}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className=" w-full h-full object-cover"
                  name={p.name}
                />
              </li>
            ))}
          </ul>
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

// & refactor the change in color for later
// const isPlayerOne = currentPlayer === "player_one";
// const className = `h-10 w-28 flex justify-center items-center ${isPlayerOne ? "bg-yellow-500" : "bg-gray-500"}`;
