import { getPokemonById } from "@/app/lib/db";
import StatItem from "./StatItem";
export default async function IdStats({ params }) {
  const pokemon = await getPokemonById(params.id);
  // console.log("pokemon", pokemon);

  const calcBarHeight = (value) => {
    let roundedNumber = Math.floor((value / 200) * 100);

    return { width: `${roundedNumber}%` };
  };

  const calcBarWeight = (value) => {
    let roundedNumber = Math.floor((value / 5000) * 100);

    return { width: `${roundedNumber}%` };
  };

  return (
    <div className=" capitalize w-72 h-72 flex flex-col gap-4 border-solid border-red-500 border-2 p-6 rounded-2xl">
      <StatItem name="life" number={pokemon.life} />
      <StatItem name="speed" number={pokemon.speed} />
      <StatItem name="attack" number={pokemon.attack} />
      <StatItem name="defense" number={pokemon.defense} />

      <div className="  pr-4 pl-4 rounded-3xl flex flex-row h-6  bg-gray-300  font-bold hover:bg-yellow-400 w-full">
        <div className=" lg:w-[35%] w-[40%] ">
          <p>height</p>
        </div>
        <div className=" lg:w-[45%] w-[60%] flex items-center">
          <div
            className="rounded-lg bg-red-500 h-2 "
            style={calcBarHeight(pokemon.height)}
          ></div>
        </div>
        <div className=" lg:w-[20%] w-[20%] text-right ">
          <p>{pokemon.height}</p>
        </div>
      </div>
      <div className="  pr-4 pl-4 rounded-3xl flex flex-row h-6  bg-gray-300  font-bold hover:bg-yellow-400 w-full">
        <div className=" lg:w-[35%] w-[40%] ">
          <p>weight</p>
        </div>
        <div className=" lg:w-[45%] w-[60%] flex items-center">
          <div
            className="rounded-lg bg-red-500 h-2 "
            style={calcBarWeight(pokemon.weight)}
          ></div>
        </div>
        <div className=" lg:w-[20%] w-[20%] text-right ">
          <p>{pokemon.weight}</p>
        </div>
      </div>
    </div>
  );
}
