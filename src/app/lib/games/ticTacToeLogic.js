export class Game {
  constructor(_update) {
    this.currentPlayer = "playerOne"; //active player
    this.gameStatus = "selectPlayer"; //playing,end
    this.setPosition;
    this.squareData = { image: "" };
    this.playerOne = { pokemonName: "", pokemonImage: "", squares: [] };
    this.playerTwo = { pokemonName: "", pokemonImage: "", squares: [] };
    this.squares = [];

    this.winner = "none";
    this.winningLine = [];
    this.update = _update;
  }

  get curPlayerGET() {
    return this.currentPlayer;
  }
  set curPlayerSET(player) {
    // console.log(player);
    this.currentPlayer = player;
  }
  get p1SquaresGET() {
    return this.playerOne.squares;
  }

  set p1SquaresSET(square) {
    this.playerOne.squares = [...this.playerOne.squares, square];
  }
  get p2SquaresGET() {
    return this.playerTwo.squares;
  }
  set p2SquaresSET(square) {
    this.playerTwo.squares = [...this.playerTwo.squares, square];
  }

  get p1PokemonNameGET() {
    return this.playerOne.pokemonName;
  }
  get p1PokemonImageGET() {
    return this.playerOne.pokemonImage;
  }
  set p1PokemonNameSET(name) {
    this.playerOne.pokemonName = name;
    this.update();
  }
  set p1PokemonImageSET(image) {
    this.playerOne.pokemonImage = image;
    this.update();
  }
  get p2PokemonNameGET() {
    return this.playerTwo.pokemonName;
  }
  get p2PokemonImageGET() {
    return this.playerTwo.pokemonImage;
  }
  set p2PokemonNameSET(name) {
    this.playerTwo.pokemonName = name;
    this.update();
  }
  set p2PokemonImageSET(image) {
    this.playerTwo.pokemonImage = image;
    this.update();
  }
  get winLineGET() {
    return this.winningLine;
  }
  set winLineSET(line) {
    this.winningLine = line;
  }
  get playerWinGET() {
    return this.winner;
  }
  set playerWinSET(win) {
    this.winner = win;
  }

  calculateWinner(currPlayer) {
    console.log(currPlayer);
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

    if (currPlayer === "playerOne") {
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
          this.playerWin = this.currentPlayer;

          console.log(this.currentPlayer, "wins!!!");
        }
      }
    }
  }

  reset() {
    this.currentPlayer = "playerOne";
    this.playerOne = { pokemonName: "", pokemonImage: "", squares: [] };
    this.playerTwo = { pokemonName: "", pokemonImage: "", squares: [] };
    this.winner = "none";
    this.winningLine = [];
  }
}

// const game = new Game();

// export { game };
