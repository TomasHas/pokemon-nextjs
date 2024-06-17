export default function WinnerModal({ toggleModal, player }) {
  console.log(player);
  return (
    <div className=" relative h-96 w-96 bg-white border-solid border-2 border-green-500 rounded-xl flex justify-center items-center">
      <div className="absolute right-5 top-5 ">
        <button className=" capitalize" onClick={toggleModal}>
          close
        </button>
      </div>
      <div className=" ">
        <p> {`${player}`} winner!!</p>{" "}
      </div>
      <div className="absolute right-5 bottom-5 capitalize">
        <button className=" capitalize">play again!</button>{" "}
      </div>
    </div>
  );
}
