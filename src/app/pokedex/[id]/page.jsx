/* eslint-disable @next/next/no-img-element */
import { CardsSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { getPokemonById } from "@/app/lib/db";
import { colorType } from "@/app/lib/utils";
import Image from "next/image";
import IdStats from "./idStats";

import { calculateZeros } from "@/app/lib/calculateZeros";
const detailsStyle =
  " pt-1 pb-1 pr-4 pl-4 rounded-3xl flex flex-row  mt-4  bg-gray-300 justify-between items-end font-bold hover:bg-yellow-400";
export default async function Page({ params }) {
  const pokemon = await getPokemonById(params.id);
  const types = pokemon?.type.map((e) => e.type.name);
  // console.log(types);

  return (
    <div className=" bg-white flex flex-col  items-center ">
      <div className=" w-3/4 ">
        <Suspense fallback={<CardsSkeleton />}>
          <div className=" flex flex-col lg:flex-row  items-center gap-5 mt-10 ">
            <div className=" flex-col items-center flex  lg:w-1/2 w-full  gap-5">
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
              </div>{" "}
            </div>{" "}
            <div className="  lg:w-1/2 w-full  ">
              {" "}
              <IdStats params={params} />
            </div>
          </div>
        </Suspense>
      </div>
    </div>
  );
}
