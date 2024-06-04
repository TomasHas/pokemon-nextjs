/* eslint-disable @next/next/no-img-element */
import { CardsSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { getPokemonById } from "@/app/lib/db";
import { colorType } from "@/app/lib/utils";
import Image from "next/image";
import { z } from "zod";
import { calculateZeros } from "@/app/lib/calculateZeros";
const detailsStyle =
  " pt-1 pb-1 pr-4 pl-4 rounded-3xl flex flex-row  mt-4  bg-gray-300 justify-between items-end font-bold hover:bg-yellow-400";
export default async function Page({ params }) {
  const pokemon = await getPokemonById(params.id);
  const types = pokemon?.type.map((e) => e.type.name);
  // console.log(types);

  const calcBar150 = (value) => {
    // let roundedNumber = Math.floor((value / 150) * 100);

    // // const result = `rounded-lg bg-red-500 h-4 w-[${roundedNumber}%]`;
    // const result = `rounded-lg bg-red-500 h-4 w-[${roundedNumber}%]`;

    // console.log("result", result);
    // return result;

    let roundedNumber = Math.floor((value / 150) * 100);
    return { width: `${roundedNumber}%` };
  };

  const calcBarHeight = (value) => {
    let roundedNumber = Math.floor((value / 200) * 100);

    return { width: `${roundedNumber}%` };
  };

  const calcBarWeight = (value) => {
    let roundedNumber = Math.floor((value / 5000) * 100);

    return { width: `${roundedNumber}%` };
  };
  return (
    <div>
      <Suspense fallback={<CardsSkeleton />}>
        <div className=" flex flex-col lg:flex-row  items-center  ">
          <div className=" flex-col items-center flex bg-slate-400 p-4 lg:w-1/2 w-full  gap-5">
            <div className="w-full flex flex-col lg:flex-row bg-yellow-300 justify-between items-center gap-4">
              <p className=" text-5xl font-bold capitalize">{pokemon.name}</p>{" "}
              <div className=" flex flex-row gap-2 justify-between items-center font-bold text-2xl hover:bg-yellow-400">
                <h2> # ID: </h2> <h3>{calculateZeros(pokemon.number)}</h3>
              </div>
              <ul className=" flex flex-row gap-4 ">
                {types.map((e) => (
                  <li key={e}> {colorType(e)} </li>
                ))}
              </ul>
            </div>{" "}
            <div className=" h-60 w-60 rounded-xl bg-yellow-100 flex justify-center items-center ">
              <img
                src={pokemon.image}
                alt={pokemon.name}
                width={200}
                height={200}
              />
            </div>
          </div>
          <div
            className="
            p-4 lg:w-1/2 w-full bg-red-200"
          >
            <div className=" capitalize w-full flex flex-col gap-4 bg-yellow-200">
              <div className=" items-center pr-4 pl-4 rounded-3xl flex flex-row h-6 w-full bg-gray-300  font-bold hover:bg-yellow-400 ">
                <div className=" lg:w-[15%] w-[40%]  ">
                  <p>Life:</p>{" "}
                </div>{" "}
                <div className=" lg:w-[75%] w-[60%] flex items-center ">
                  <div
                    className="rounded-lg bg-red-500 h-4"
                    style={calcBar150(pokemon.life)}
                  ></div>{" "}
                </div>
                <div className=" lg:w-[10%] w-[20%] text-right  ">
                  <p>{pokemon.life}</p>
                </div>
              </div>
              <div className=" items-center pr-4 pl-4 rounded-3xl flex flex-row h-6 w-full bg-gray-300  font-bold hover:bg-yellow-400 ">
                <div className=" lg:w-[15%] w-[40%]  ">
                  <p>Life:</p>{" "}
                </div>{" "}
                <div className=" lg:w-[75%] w-[60%] flex items-center ">
                  <div
                    className="rounded-lg bg-red-500 h-4"
                    style={calcBar150(pokemon.life)}
                  ></div>{" "}
                </div>
                <div className=" lg:w-[10%] w-[20%] text-right  ">
                  <p>{pokemon.life}</p>
                </div>
              </div>
              <div className="  pr-4 pl-4 rounded-3xl flex flex-row h-6  bg-gray-300  font-bold hover:bg-yellow-400 w-full">
                <div className=" lg:w-[15%] w-[40%] ">
                  <p>speed:</p>{" "}
                </div>{" "}
                <div className=" lg:w-[75%] w-[60%] flex items-center">
                  <div
                    className="rounded-lg bg-red-500 h-4 "
                    style={calcBar150(pokemon.life)}
                  ></div>{" "}
                  {/* <div className=" rounded-xl bg-red-500 h-4 w-60"></div>{" "} */}
                </div>
                <div className=" lg:w-[10%] w-[20%] text-right ">
                  <p>{pokemon.speed}</p>
                </div>
              </div>{" "}
              <div className="  pr-4 pl-4 rounded-3xl flex flex-row h-6  bg-gray-300  font-bold hover:bg-yellow-400 w-full">
                <div className=" lg:w-[15%] w-[40%] ">
                  <p>attack:</p>{" "}
                </div>{" "}
                <div className=" lg:w-[75%] w-[60%] flex items-center">
                  <div
                    className="rounded-lg bg-red-500 h-4 "
                    style={calcBar150(pokemon.life)}
                  ></div>
                </div>
                <div className=" lg:w-[10%] w-[20%] text-right ">
                  <p>{pokemon.attack}</p>
                </div>
              </div>{" "}
              <div className="  pr-4 pl-4 rounded-3xl flex flex-row h-6  bg-gray-300  font-bold hover:bg-yellow-400 w-full">
                <div className=" lg:w-[15%] w-[40%] ">
                  <p>defense:</p>{" "}
                </div>{" "}
                <div className=" lg:w-[75%] w-[60%] flex items-center">
                  <div
                    className=" hover:expandable-div rounded-lg bg-red-500 h-4 "
                    style={calcBar150(pokemon.life)}
                  ></div>{" "}
                </div>
                <div className=" lg:w-[10%] w-[20%] text-right ">
                  <p>{pokemon.defense}</p>
                </div>
              </div>{" "}
              <div className="  pr-4 pl-4 rounded-3xl flex flex-row h-6  bg-gray-300  font-bold hover:bg-yellow-400 w-full">
                <div className=" lg:w-[15%] w-[40%] ">
                  <p>height:</p>{" "}
                </div>{" "}
                <div className=" lg:w-[75%] w-[60%] flex items-center">
                  <div
                    className="rounded-lg bg-red-500 h-4 "
                    style={calcBarHeight(pokemon.height)}
                  ></div>{" "}
                </div>
                <div className=" lg:w-[10%] w-[20%] text-right ">
                  <p>{pokemon.height}</p>
                </div>
              </div>{" "}
              <div className="  pr-4 pl-4 rounded-3xl flex flex-row h-6  bg-gray-300  font-bold hover:bg-yellow-400 w-full">
                <div className=" lg:w-[15%] w-[40%] ">
                  <p>weight:</p>{" "}
                </div>{" "}
                <div className=" lg:w-[75%] w-[60%] flex items-center">
                  <div
                    className="rounded-lg bg-red-500 h-4 "
                    style={calcBarWeight(pokemon.weight)}
                  ></div>{" "}
                </div>
                <div className=" lg:w-[10%] w-[20%] text-right ">
                  <p>{pokemon.weight}</p>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
