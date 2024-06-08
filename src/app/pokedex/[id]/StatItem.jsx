export default function StatItem({ name, number }) {
  const calcBar150 = (value) => {
    let roundedNumber = Math.floor((value / 150) * 100);
    return { width: `${roundedNumber}%` };
  };
  return (
    <div className=" items-center pr-4 pl-4 rounded-3xl flex flex-row h-6 w-full bg-gray-300  font-bold hover:bg-yellow-400 ">
      <div className=" lg:w-[15%] w-[40%]  ">
        <p>{name}</p>
      </div>
      <div className=" lg:w-[75%] w-[60%] flex items-center ">
        <div
          className="rounded-lg bg-red-500 h-4"
          style={calcBar150(number)}
        ></div>
      </div>
      <div className=" lg:w-[10%] w-[20%] text-right  ">
        <p>{number}</p>
      </div>
    </div>
  );
}
