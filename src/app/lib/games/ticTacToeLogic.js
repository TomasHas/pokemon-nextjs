export class Game {
  constructor(_update) {
    this.isPlayerOne = true;
    this.gameStatus = "selectPlayer"; // playing, end

    this.playerOne = {
      player: "playerOne",
      pokemonName: "",
      pokemonImage: "",
      squares: [],
      color: "red",
    };

    this.playerTwo = {
      player: "playerTwo",
      pokemonName: "",
      pokemonImage: "",
      squares: [],
      color: "blue",
    };

    this.activePlayer = this.playerOne;

    this.squareData = { image: "" };
    this.squares = Array(9).fill(null);
    this.winner = "none";
    this.winningLine = [];
    this.update = _update;
    // this.selectCharacter = this.selectCharacter.bind(this);
  }
  assignSquare = (number, playerData) => {
    console.log("playerData.player", playerData);
    this.squares[number] = playerData;
    if (playerData.player === "playerOne") {
      this.playerOne.squares = [...this.playerOne.squares, number + 1];
    } else {
      this.playerTwo.squares = [...this.playerTwo.squares, number + 1];
    }
    console.log("square", this.squares);
  };
  get currentPlayer() {
    return this.activePlayer;
  }
  get p1Name() {
    return this.playerOne.pokemonName;
  }
  get p1Image() {
    return this.playerOne.pokemonImage;
  }

  selectCharacter = (name, image, player) => {
    if (player === "playerOne") {
      this.playerOne.pokemonName = name;
      this.playerOne.pokemonImage = image;
    } else if (player === "playerTwo") {
      this.playerTwo.pokemonName = name;
      this.playerTwo.pokemonImage = image;
    }
    // console.log(`${name} was selected`);
    this.update();
  };

  switchPlayer = () => {
    this.isPlayerOne
      ? (this.activePlayer = this.playerTwo)
      : (this.activePlayer = this.playerOne);

    this.isPlayerOne = !this.isPlayerOne;
    this.update();
  };

  calculateWinner = (currPlayer) => {
    let playerSquares = [];
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];

    if (currPlayer.player === "playerOne") {
      playerSquares = this.playerOne.squares;
    } else {
      playerSquares = this.playerTwo.squares;
    }

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (
          playerSquares.includes(arr[i][j]) &&
          playerSquares.includes(arr[i][j + 1]) &&
          playerSquares.includes(arr[i][j + 2])
        ) {
          this.winLine = playerSquares;
          this.playerWin = this.isPlayerOne; // &fix this

          console.log(currPlayer.pokemonName, "wins!!!"); //& and this
        }
      }
    }
  };

  reset() {
    this.isPlayerOne = true;
    this.gameStatus = "selectPlayer"; // playing, end

    this.playerOne = {
      player: "playerOne",
      pokemonName: "",
      pokemonImage: "",
      squares: [],
    };

    this.playerTwo = {
      player: "playerTwo",
      pokemonName: "",
      pokemonImage: "",
      squares: [],
    };

    this.activePlayer = this.playerOne;

    this.squareData = { image: "" };
    this.squares = Array(9).fill(null);
    this.winner = "none";
    this.winningLine = [];
    this.update();
  }
}

// const game = new Game();

// export { game };
