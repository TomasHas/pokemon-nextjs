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
  const calcBar150 = (value) => {
    let roundedNumber = Math.floor((value / 150) * 100);
    return { width: `${roundedNumber}%` };
  };
  return (
    <div>
      {" "}
      <div className=" p-4 border-solid border-black rounded-xl">
        <div className=" capitalize w-full flex flex-col gap-4 bg-red-200">
          <StatItem name="tomas" number={pokemon.life} />
          <StatItem name="tomas" number={pokemon.life} />
          <StatItem name="tomas" number={pokemon.life} />
          <StatItem name="tomas" number={pokemon.life} />
          <StatItem name="tomas" number={pokemon.life} />
          <StatItem name="tomas" number={pokemon.life} />
          <StatItem name="tomas" number={pokemon.life} />
          <StatItem name="tomas" number={pokemon.life} />

          <div className="  pr-4 pl-4 rounded-3xl flex flex-row h-6  bg-gray-300  font-bold hover:bg-yellow-400 w-full">
            <div className=" lg:w-[15%] w-[40%] ">
              <p>height:</p>
            </div>
            <div className=" lg:w-[75%] w-[60%] flex items-center">
              <div
                className="rounded-lg bg-red-500 h-4 "
                style={calcBarHeight(pokemon.height)}
              ></div>
            </div>
            <div className=" lg:w-[10%] w-[20%] text-right ">
              <p>{pokemon.height}</p>
            </div>
          </div>
          <div className="  pr-4 pl-4 rounded-3xl flex flex-row h-6  bg-gray-300  font-bold hover:bg-yellow-400 w-full">
            <div className=" lg:w-[15%] w-[40%] ">
              <p>weight:</p>
            </div>
            <div className=" lg:w-[75%] w-[60%] flex items-center">
              <div
                className="rounded-lg bg-red-500 h-4 "
                style={calcBarWeight(pokemon.weight)}
              ></div>
            </div>
            <div className=" lg:w-[10%] w-[20%] text-right ">
              <p>{pokemon.weight}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
