"use client";
import { TicTacToeCalculator } from "../lib/utils";
import TicTacToeSquare from "./TicTacToeSquare";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Loading from "./loading";

export default function TicTacToe() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  // const [one, setOne] = useState({ user: "none", character: "" });
  // const [two, setTwo] = useState({ user: "none", character: "" });
  // const [three, setThree] = useState({  , character:''});
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

  const activePlayer = params.get("player");

  const toggleActivePlayer = (currentPlayer) => {
    if (currentPlayer === "player_one") {
      params.set("player", "player_two");
    } else {
      params.set("player", "player_one");
    }
    replace(`${pathname}?${params.toString()}`);
  };
  const handleSquareChange = () => {
    toggleActivePlayer(activePlayer);
  };

  useEffect(() => {
    handleSquareChange();
    TicTacToeCalculator(squares, activePlayer);
  }, [squares]);

  const handleClick = (e) => {
    e.preventDefault();
    const square = e.target.name;

    switch (square) {
      case "one":
        console.log(activePlayer);
        if (activePlayer === "player_one") {
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
      case "two":
        console.log(activePlayer);
        if (activePlayer === "player_one") {
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
      case "three":
        console.log(activePlayer);
        if (activePlayer === "player_one") {
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
      case "four":
        console.log(activePlayer);
        if (activePlayer === "player_one") {
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
      case "five":
        console.log(activePlayer);
        if (activePlayer === "player_one") {
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
      case "six":
        console.log(activePlayer);
        if (activePlayer === "player_one") {
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
      case "seven":
        console.log(activePlayer);
        if (activePlayer === "player_one") {
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
      case "eight":
        console.log(activePlayer);
        if (activePlayer === "player_one") {
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
      case "nine":
        console.log(activePlayer);
        if (activePlayer === "player_one") {
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
  };
  console.log(squares);
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-row justify-around">
        {" "}
        <div
          className={
            activePlayer === "player_one"
              ? " h-10 w-28 text-center  bg-yellow-500"
              : "h-10 w-28 text-center  bg-gray-500"
          }
        >
          {" "}
          <p>player one</p>
        </div>
        <div className="grid grid-cols-3 gap-3 ">
          <TicTacToeSquare
            name="one"
            value={squares.one.character}
            handleClick={handleClick}
            currentPlayer={activePlayer}
          />{" "}
          <TicTacToeSquare
            name="two"
            value={squares.two.character}
            handleClick={handleClick}
          />{" "}
          <TicTacToeSquare
            name="three"
            value={squares.three.character}
            handleClick={handleClick}
          />
          <TicTacToeSquare
            name="four"
            value={squares.four.character}
            handleClick={handleClick}
          />{" "}
          <TicTacToeSquare
            name="five"
            value={squares.five.character}
            handleClick={handleClick}
          />{" "}
          <TicTacToeSquare
            name="six"
            value={squares.six.character}
            handleClick={handleClick}
          />{" "}
          <TicTacToeSquare
            name="seven"
            value={squares.seven.character}
            handleClick={handleClick}
          />{" "}
          <TicTacToeSquare
            name="eight"
            value={squares.eight.character}
            handleClick={handleClick}
          />{" "}
          <TicTacToeSquare
            name="nine"
            value={squares.nine.character}
            handleClick={handleClick}
          />
        </div>{" "}
        <div
          className={
            activePlayer === "player_two"
              ? " h-10 w-28 text-center  bg-yellow-500"
              : "h-10 w-28 text-center  bg-gray-500"
          }
        >
          <p>player two</p>
        </div>
      </div>
    </Suspense>
  );
}

// const [one, setSquares] = useState("");
// const [two, setTwo] = useState("");
// const [three, setThree] = useState("");
// const [four, setFour] = useState("");
// const [five, setFive] = useState("");
// const [six, setSix] = useState("");
// const [seven, setSeven] = useState("");
// const [eight, setEight] = useState("");
// const [nine, setNine] = useState("");

// const handleClick = (e) => {
//   e.preventDefault();

//   const square = e.target.name;

//   if (square === "one" && activePlayer) {
//     console.log("player one", square);
//     console.log("player one", activePlayer);
//     console.log("player one", one);
//     setOne((prev) => ({
//       ...prev,
//       character: "x",
//       user: "player one",
//     }));
//   } else if (square === "one" && !activePlayer) {
//     console.log("player two", square);
//     console.log("player two", activePlayer);
//     console.log("player two", one);
//     setOne((prev) => ({
//       ...prev,
//       character: "o",
//       user: "player two",
//     }));
//   }

//   setActivePlayer(!activePlayer);
// };

// const [four, setFour] = useState({ user: "none" });
// const [five, setFive] = useState({ user: "none" });
// const [six, setSix] = useState({ user: "none" });
// const [seven, setSeven] = useState({ user: "none" });
// const [eight, setEight] = useState({ user: "none" });
// const [nine, setNine] = useState({ user: "none" });

{
  /* <button
            className={`text-center text-white font-bold text-8xl bg-blue-300 h-40 w-40 hover:bg-red-300`}
            onClick={handleClick}
            name="one"
            value={one.character}
          >
            {" "}
            <p>{one.character}</p>{" "}
          </button>
          <button
            className={`text-center text-white font-bold text-8xl bg-blue-300 h-40 w-40 hover:bg-red-300`}
            onClick={handleClick}
            name="two"
            value={two.character}
          >
            {" "}
            <p>{two.character}</p>{" "}
          </button> */
}
{
  /* <button
            className={`text-center text-white font-bold text-8xl bg-blue-300 h-40 w-40 hover:bg-red-300`}
            onClick={handleClick}
            name="three"
            value={three.character}
          >
            {" "}
            <p>{three.character}</p>{" "}
          </button> */
}
