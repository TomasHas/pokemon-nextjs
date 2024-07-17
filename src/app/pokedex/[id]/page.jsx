/* eslint-disable @next/next/no-img-element */
import { IdSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { getPokemonById } from "@/app/lib/db";
import { colorType } from "@/app/lib/utils";
import Image from "next/image";
import IdStats from "./IdStats";

import { calculateZeros } from "@/app/lib/calculateZeros";
const detailsStyle =
  " pt-1 pb-1 pr-4 pl-4 rounded-3xl flex flex-row  mt-4  bg-gray-300 justify-between items-end font-bold hover:bg-yellow-400";
export default async function Page({ params }) {
  const pokemon = await getPokemonById(params.id);
  const types = pokemon?.type.map((e) => e.type.name);
  // console.log(types);

  return (
    <div className=" flex flex-col  items-center justify-center ">
      <Suspense fallback={<IdSkeleton />}>
        <div className=" flex flex-col items-center gap-5 mt-10  w-full lg:w-[60%] bg-white p-10 shadow-2xl rounded-xl">
          <section className="w-full">
            {" "}
            <div className="w-full flex flex-col  lg:flex-row justify-between lg:items-baseline items-center ">
              <p className=" text-4xl font-bold capitalize">{pokemon.name}</p>{" "}
              <div className=" flex flex-row gap-2 justify-between items-baseline font-bold text-2xl hover:bg-yellow-400">
                <p> #ID: </p> <p>{calculateZeros(pokemon.number)}</p>
              </div>
              <ul className=" flex flex-row gap-4 bg-gray-300 p-3 rounded-xl">
                <p className=" text-gray-500 font-bold">Type</p>
                {types.map((e) => (
                  <li key={e}> {colorType(e)} </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="flex flex-col lg:flex-row gap-4 justify-between items-center w-full ">
            <div className=" h-72 w-72 rounded-xl bg-yellow-100 shadow-xl flex justify-center items-center  ">
              <img
                src={pokemon.image}
                alt={pokemon.name}
                width={200}
                height={200}
              />
            </div>{" "}
            <div className="  w-72 ">
              {" "}
              <IdStats params={params} />
            </div>
          </section>
        </div>
      </Suspense>
    </div>
  );
}
