import {
  FaCircleArrowRight,
  FaCircleArrowLeft,
  FaCircleArrowUp,
} from "react-icons/fa6";

export default function StartModal({}) {
  const handleClick = (e) => {
    e.preventDefault();
    playAgain();
    toggleModal();
  };
  return (
    <div className=" relative w-full h-48 lg:w-[50%] lg:h-80 rounded-xl flex flex-col justify-between items-center  bg-white shadow-2xl p-4 ">
      <div className=" flex flex-row w-full justify-around animate-bounce lg:hidden">
        {" "}
        <FaCircleArrowUp className=" size-5 text-gray-500" />
        <FaCircleArrowUp className=" size-5 text-gray-500" />
      </div>

      <div className=" absolute top-[25%] flex justify-center items-center ">
        <p className="text-2xl  lg:text-5xl p-2">
          Select characters to start playing!
        </p>
      </div>

      <div className=" lg:absolute bottom-5 lg:flex flex-row w-full justify-between p-2 animate-bounce hidden ">
        <div className=" size-5 ">
          {" "}
          <FaCircleArrowLeft className=" size-5  text-gray-500" />
        </div>
        <div>
          {" "}
          {/* <FaCircleArrowUp className=" size-5 text-gray-500" /> */}
          <FaCircleArrowRight className=" size-5 text-gray-500" />
        </div>
      </div>

      <div className="absolute right-5 bottom-5 capitalize"></div>
    </div>
  );
}
