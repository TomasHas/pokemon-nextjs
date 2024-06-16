export default function WinnerModal({ toggleModal }) {
  return (
    <div className=" relative h-96 w-96 bg-white border-solid border-2 border-green-500 rounded-xl flex justify-center items-center">
      <div className="absolute right-5 top-5">
        <button onClick={toggleModal}>close</button>
      </div>
      <div className=" ">
        <p> winner!!</p>{" "}
      </div>
    </div>
  );
}
