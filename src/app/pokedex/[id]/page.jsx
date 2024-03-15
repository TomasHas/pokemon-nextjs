import { CardsSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { getPokemonById } from "@/app/lib/db";
import prisma from "@/app/lib/prisma";
import Image from "next/image";
const detailsStyle =
  " pt-1 pb-1 pr-4 pl-4 rounded-3xl flex flex-row  mt-4 bg-blue-500 justify-between items-end font-bold hover:bg-yellow-400";
export default async function Page({ params }) {
  const pokemon = await getPokemonById(params.id);
  console.log(pokemon);
  return (
    <div>
      <Suspense fallback={<CardsSkeleton />}>
        <div className=" flex flex-row   ">
          <div className=" flex-col items-center flex p-4 w-1/2 h-1/2">
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              width={400}
              height={700}
            />
          </div>
          <div
            className="
            p-4 w-1/2"
          >
            <article>
              <p className=" text-5xl font-bold capitalize">{pokemon.name}</p>
            </article>{" "}
            <div>
              <div className=" pt-1 pb-1 pr-4 pl-4 rounded-3xl flex flex-row  mt-4 bg-blue-500 justify-between items-end font-bold hover:bg-yellow-400">
                <h2> Number: </h2> <h3>{pokemon.number}</h3>
              </div>
              <div className={detailsStyle}>
                <h2>Life:</h2> <h3>{pokemon.life}</h3>
              </div>
              <div className={detailsStyle}>
                <h2>Attack:</h2> <h3>{pokemon.attack}</h3>{" "}
              </div>
              <div className={detailsStyle}>
                <h2>Defense:</h2> <h3>{pokemon.defense}</h3>
              </div>
              <div className={detailsStyle}>
                <h2>Weight:</h2> <h3>{pokemon.weight}</h3>{" "}
              </div>
              <div className={detailsStyle}>
                <h2>Height:</h2> <h3>{pokemon.height}</h3>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
