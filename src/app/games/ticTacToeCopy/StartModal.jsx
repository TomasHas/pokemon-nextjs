import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

export default function StartModal({}) {
  const handleClick = (e) => {
    e.preventDefault();
    playAgain();
    toggleModal();
  };
  return (
    <div className=" relative w-full h-full  rounded-xl flex flex-col justify-between items-center  bg-white shadow-2xl p-4 ">
      <div className="">
        {" "}
        <h1 className=" text-5xl">Chose characters to start playing!</h1>
      </div>

      <div className="flex flex-row w-full justify-between p-2 animate-bounce">
        <div className=" size-5 ">
          {" "}
          <FaCircleArrowLeft className=" size-5  text-gray-500" />
        </div>
        <div>
          {" "}
          <FaCircleArrowRight className=" size-5 text-gray-500" />
        </div>
      </div>

      <div className="absolute right-5 bottom-5 capitalize"></div>
    </div>
  );
}
