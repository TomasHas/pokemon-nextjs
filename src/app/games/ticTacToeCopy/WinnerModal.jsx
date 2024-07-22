export default function WinnerModal({
  playAgain,
  winnerData,
  toggleModal,
  handleReset,
}) {
  console.log("winnermodal image", winnerData.status);

  const handleClick = (e) => {
    e.preventDefault();
    playAgain();
    toggleModal();
  };
  return (
    <div className=" relative z-50  w-[50%] h-80  rounded-xl flex justify-center items-center  bg-white shadow-2xl  ">
      <div className="absolute right-5 top-5 capitalize  ">
        <button
          className=" bg-red-500 p-4 rounded-xl mt-5 shadow-xl text-white font-bold"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div className="">
        {/* <button className=" capitalize" onClick={toggleModal}>
            close
          </button> */}
      </div>
      <div className="animate-pulse">
        {" "}
        <img
          src={winnerData.player.pokemonImage}
          alt={winnerData.player.pokemonName}
        />
      </div>

      <div className=" absolute capitalize bg-black ">
        <p className="text-5xl font-bold  text-white p-2 ">
          {winnerData.player.pokemonName} WINS!!
        </p>{" "}
      </div>
      <div className="absolute right-5 bottom-5 capitalize">
        <button
          className=" capitalize bg-green-500 p-2 rounded-xl text-white"
          onClick={handleClick}
        >
          play again
        </button>{" "}
      </div>
    </div>
  );
}
