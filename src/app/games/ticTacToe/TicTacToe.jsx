"use client";
import { TicTacToeCalculator } from "../../lib/utils";
import TicTacToeSquare from "./TicTacToeSquare";
import { Suspense, useEffect, useState } from "react";
import PlayerComp from "./PlayerComp";
import WinnerModal from "./WinnerModal";

export default function TicTacToe({ pokemons }) {
  const [gameManager, setGameManager] = useState({
    stage: "start" || "middle" || "end",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState("player_one");
  const [open, setOpen] = useState(false);
  const [winnerData, setWinnerData] = useState({
    message: "",
    player: "none",
    pokemon: "",
    image: "",
    winningLine: [],
  });
  const [playerOne, setPlayerOne] = useState({
    pokemon: "",
    image: "",
    player: "",
  });
  const [playerTwo, setPlayerTwo] = useState({
    pokemon: "",
    image: "",
    player: "",
  });
  console.log(gameManager.stage);
  const [squares, setSquares] = useState({
    one: { pokemon: "none", image: "", square: 1, player: "" },
    two: { pokemon: "none", image: "", square: 2, player: "" },
    three: { pokemon: "none", image: "", square: 3, player: "" },
    four: { pokemon: "none", image: "", square: 4, player: "" },
    five: { pokemon: "none", image: "", square: 5, player: "" },
    six: { pokemon: "none", image: "", square: 6, player: "" },
    seven: { pokemon: "none", image: "", square: 7, player: "" },
    eight: { pokemon: "none", image: "", square: 8, player: "" },
    nine: { pokemon: "none", image: "", square: 9, player: "" },
  });

  const toggleModal = () => {
    setOpen(!open);
  };

  useEffect(() => {
    console.log("winnerData", winnerData);
    if (winnerData.player !== "none") toggleModal();
    // console.log("winnerData", winnerData.player.player);
  }, [winnerData]);

  const handleWinner = (player, winningLine) => {
    console.log("handleWinner", playerOne);
    if (player === "player_one") {
      setWinnerData((prev) => ({
        ...prev,
        message: `${player} wins!!!!`,
        player: player,
        winningLine: winningLine,
        pokemon: playerOne.pokemon,
        image: playerOne.image,
      }));
    } else {
      setWinnerData((prev) => ({
        ...prev,
        message: `${player} wins!!!!`,
        player: player,
        winningLine: winningLine,
        pokemon: playerTwo.pokemon,
        image: playerTwo.image,
      }));
    }
  };
  console.log("currentPlayer", currentPlayer);
  const highlightWinningSquares = () => {};

  const toggleCurrentPlayer = (player) => {
    // console.log("player", player);
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

  const handleFillSquare = (square, curr) => {
    console.log("HANDLE", playerOne.pokemon);
    if (currentPlayer === "player_one") {
      setSquares((prevSquares) => ({
        ...prevSquares,
        [square]: {
          ...prevSquares[square],
          pokemon: playerOne.pokemon,
          image: playerOne.image,
          player: currentPlayer,
        },
      }));
      console.log(squares.one);
    } else {
      setSquares((prevSquares) => ({
        ...prevSquares,
        [square]: {
          ...prevSquares[square],
          pokemon: playerTwo.pokemon,
          image: playerTwo.image,
          player: currentPlayer,
        },
      }));
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    const square = e.target.name;

    switch (square) {
      case "1":
        handleFillSquare("one");
        break;
      case "2":
        handleFillSquare("two");

        break;
      case "3":
        handleFillSquare("three");

        break;
      case "4":
        handleFillSquare("four");
        break;
      case "5":
        handleFillSquare("five");
        break;
      case "6":
        handleFillSquare("six");
        break;
      case "7":
        handleFillSquare("seven");
        break;
      case "8":
        handleFillSquare("eight");
        break;
      case "9":
        handleFillSquare("nine");
        break;

      default:
        break;
    }
    // toggleCurrentPlayer(currentPlayer);
    // handleSquareChange();
  };

  const assignPokemonToPlayer = (pokemon, image, player) => {
    console.log("tictack assign", pokemon, image, player);
    if (player === "player_one") {
      setPlayerOne({
        ...playerOne,
        pokemon: pokemon,
        image: image,
        player: player,
      });
    } else {
      setPlayerTwo({
        ...playerTwo,
        pokemon: pokemon,
        image: image,
        player: player,
      });
    }
  };

  console.log("LOG", playerOne, playerTwo);
  // console.log("playerOne", playerOne, "playerTwo", playerTwo);
  return (
    <div className=" relative flex flex-col  ">
      <button>start game</button>
      <button>reset</button>
      {/* <button onClick={toggleModal}>Toggle Modal</button> */}
      <div>
        {open && (
          <div className="absolute inset-0 flex items-center justify-center ">
            <WinnerModal
              pokemon={winnerData.pokemon}
              image={winnerData.image}
              toggleModal={toggleModal}
              player={winnerData.player}
            />
          </div>
        )}
      </div>
      <div className="  flex flex-row justify-between ">
        <PlayerComp
          player="player_one"
          currentPlayer={currentPlayer}
          pokemons={pokemons}
          assignPokemonToPlayer={assignPokemonToPlayer}
        />
        <div className="grid grid-cols-3 gap-3 h-fit enabled:hover:border-gray-400 disabled:opacity-75">
          <TicTacToeSquare
            square="1"
            image={squares.one.image}
            handleClick={handleClick}
            winningSquares={winnerData.winningLine}
          />{" "}
          <TicTacToeSquare
            square="2"
            image={squares.two.image}
            handleClick={handleClick}
            winningSquares={winnerData.winningLine}
          />{" "}
          <TicTacToeSquare
            square="3"
            image={squares.three.image}
            handleClick={handleClick}
            winningSquares={winnerData.winningLine}
          />
          <TicTacToeSquare
            square="4"
            image={squares.four.image}
            handleClick={handleClick}
            winningSquares={winnerData.winningLine}
          />{" "}
          <TicTacToeSquare
            square="5"
            image={squares.five.image}
            handleClick={handleClick}
            winningSquares={winnerData.winningLine}
          />{" "}
          <TicTacToeSquare
            square="6"
            image={squares.six.image}
            handleClick={handleClick}
            winningSquares={winnerData.winningLine}
          />{" "}
          <TicTacToeSquare
            square="7"
            image={squares.seven.image}
            handleClick={handleClick}
            winningSquares={winnerData.winningLine}
          />{" "}
          <TicTacToeSquare
            square="8"
            image={squares.eight.image}
            handleClick={handleClick}
            winningSquares={winnerData.winningLine}
          />{" "}
          <TicTacToeSquare
            square="9"
            image={squares.nine.image}
            handleClick={handleClick}
            winningSquares={winnerData.winningLine}
          />
        </div>{" "}
        <div>
          <PlayerComp
            player="player_two"
            currentPlayer={currentPlayer}
            // image={playerOne.image.image}
            // name={playerOne.name.name}
            pokemons={pokemons}
            assignPokemonToPlayer={assignPokemonToPlayer}
          />
        </div>
      </div>
    </div>
  );
}
