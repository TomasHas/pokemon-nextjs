export default function WinnerModal({ playAgain, winnerData, toggleModal }) {
  console.log("winnermodal image", winnerData.status);

  const handleClick = (e) => {
    e.preventDefault();
    playAgain();
    toggleModal();
  };
  return (
    <div className=" relative w-full h-full  rounded-xl flex justify-center items-center opacity-90 bg-white shadow-2xl  ">
      <div className="absolute right-5 top-5 ">
        {/* <button className=" capitalize" onClick={toggleModal}>
            close
          </button> */}
      </div>
      <div>
        {" "}
        <img
          src={winnerData.player.pokemonImage}
          alt={winnerData.player.pokemonName}
        />
      </div>

      <div className=" ">
        <p> {winnerData.player.pokemonName}</p>
        <p>{winnerData.player.pokemonName} WINS!!</p>{" "}
      </div>
      <div className="absolute right-5 bottom-5 capitalize">
        <button className=" capitalize" onClick={handleClick}>
          play again!
        </button>{" "}
      </div>
    </div>
  );
}
