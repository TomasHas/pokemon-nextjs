/* eslint-disable @next/next/no-img-element */
import { CardsSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { getPokemonById } from "@/app/lib/db";
import { colorType } from "@/app/lib/utils";
import Image from "next/image";
import { z } from "zod";
const detailsStyle =
  " pt-1 pb-1 pr-4 pl-4 rounded-3xl flex flex-row  mt-4  bg-gray-300 justify-between items-end font-bold hover:bg-yellow-400";
export default async function Page({ params }) {
  const pokemon = await getPokemonById(params.id);
  const types = pokemon?.type.map((e) => e.type.name);
  // console.log(types);

  const calcBar150 = (value) => {
    let roundedNumber = Math.floor((value * 12) / 150);
    console.log(value);
    const result = `w-${roundedNumber}/12`;
    console.log(result);
    return result;
  };
  const calcBarHeight = (value) => {
    let roundedNumber = Math.floor((value * 12) / 100);

    console.log(roundedNumber);
    if (roundedNumber === 12) {
      return "w-full";
    }
    const result = `w-${roundedNumber}/12`;
    console.log(result);
    return result;
  };

  const calcBarWeight = (value) => {
    let roundedNumber = Math.floor((value * 12) / 5000);
    // console.log(value);
    const result = `w-${roundedNumber}/12`;
    // console.log(result);
    return result;
  };
  return (
    <div>
      <Suspense fallback={<CardsSkeleton />}>
        <div className=" flex flex-col lg:flex-row  items-center  ">
          <div className=" flex-col items-center flex bg-slate-400 p-4 w-1/2 h-1/2 gap-5">
            <div className="w-full flex flex-col lg:flex-row bg-yellow-300 justify-between items-center gap-4">
              <p className=" text-5xl font-bold capitalize">{pokemon.name}</p>
              <ul className=" flex flex-row gap-4 ">
                {types.map((e) => (
                  <li key={e}>{colorType(e)} </li>
                ))}
              </ul>
            </div>{" "}
            <div className=" h-3/5 bg-yellow-200  ">
              <img
                src={pokemon.image}
                alt={pokemon.name}
                width={300}
                height={300}
              />
            </div>
          </div>
          <div
            className="
            p-4 w-1/2"
          >
            <div className=" capitalize w-full bg-white ">
              <div className=" pt-1 pb-1 pr-4 pl-4 rounded-3xl flex flex-row  mt-4 bg-gray-300 justify-between items-end font-bold hover:bg-yellow-400">
                <h2> # ID: </h2> <h3>{pokemon.number}</h3>
              </div>
              <div className="  pr-4 pl-4 rounded-3xl flex flex-row h-8 mt-4 bg-gray-300  font-bold hover:bg-yellow-400 w-full">
                <div className=" w-1/6">
                  <p>Life:</p>{" "}
                </div>{" "}
                <div className=" w-4/6 flex items-center">
                  <div
                    className={`  rounded-lg bg-red-500 h-4 ${calcBar150(
                      pokemon.life
                    )}`}
                  ></div>{" "}
                </div>
                <div className=" w-1/6 text-center">
                  <p>{pokemon.life}</p>
                </div>
              </div>
              <div className="  pr-4 pl-4 rounded-3xl flex flex-row h-6 mt-4 bg-gray-300  font-bold hover:bg-yellow-400 w-full">
                <div className=" w-1/6">
                  <p>speed:</p>{" "}
                </div>{" "}
                <div className=" w-4/6 flex items-center">
                  <div
                    className={`  rounded-lg bg-red-500 h-4 ${calcBar150(
                      pokemon.speed
                    )}`}
                  ></div>{" "}
                </div>
                <div className=" w-1/6 text-center">
                  <p>{pokemon.speed}</p>
                </div>
              </div>{" "}
              <div className="  pr-4 pl-4 rounded-3xl flex flex-row h-6 mt-4 bg-gray-300  font-bold hover:bg-yellow-400 w-full">
                <div className=" w-1/6">
                  <p>attack:</p>{" "}
                </div>{" "}
                <div className=" w-4/6 flex items-center">
                  <div
                    className={`  rounded-lg bg-red-500 h-4 ${calcBar150(
                      pokemon.attack
                    )}`}
                  ></div>{" "}
                </div>
                <div className=" w-1/6 text-center">
                  <p>{pokemon.attack}</p>
                </div>
              </div>{" "}
              <div className="  pr-4 pl-4 rounded-3xl flex flex-row h-6 mt-4 bg-gray-300  font-bold hover:bg-yellow-400 w-full">
                <div className=" w-1/6">
                  <p>defense:</p>{" "}
                </div>{" "}
                <div className=" w-4/6 flex items-center">
                  <div
                    className={`  rounded-lg bg-red-500 h-4 ${calcBar150(
                      pokemon.defense
                    )}`}
                  ></div>{" "}
                </div>
                <div className=" w-1/6 text-center">
                  <p>{pokemon.defense}</p>
                </div>
              </div>{" "}
              <div className="  pr-4 pl-4 rounded-3xl flex flex-row h-6 mt-4 bg-gray-300  font-bold hover:bg-yellow-400 w-full">
                <div className=" w-1/6">
                  <p>height:</p>{" "}
                </div>{" "}
                <div className=" w-4/6 flex items-center">
                  <div
                    className={`  rounded-lg bg-red-500 h-4 ${calcBarHeight(
                      pokemon.height
                    )} `}
                  ></div>{" "}
                </div>
                <div className=" w-1/6 text-center">
                  <p>{pokemon.height}</p>
                </div>
              </div>{" "}
              <div className="  pr-4 pl-4 rounded-3xl flex flex-row h-6 mt-4 bg-gray-300  font-bold hover:bg-yellow-400 w-full">
                <div className=" w-1/6">
                  <p>weight:</p>{" "}
                </div>{" "}
                <div className=" w-4/6 flex items-center">
                  <div
                    className={`  rounded-lg bg-red-500 h-4 ${calcBarWeight(
                      pokemon.weight
                    )}`}
                  ></div>{" "}
                </div>
                <div className=" w-1/6 text-center">
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
