export default function WinnerModal({ toggleModal, player, pokemon, image }) {
  console.log("winnermodal image", image, player, pokemon);
  return (
    <div className=" relative h-96 w-96 bg-white border-solid border-2 border-green-500 rounded-xl flex justify-center items-center">
      <div className="absolute right-5 top-5 ">
        <button className=" capitalize" onClick={toggleModal}>
          close
        </button>
      </div>
      <img src={image} alt="" />
      <div className=" ">
        <p>
          {" "}
          {`${player}`} winner!! {pokemon}
        </p>{" "}
      </div>
      <div className="absolute right-5 bottom-5 capitalize">
        <button className=" capitalize">play again!</button>{" "}
      </div>
    </div>
  );
}
