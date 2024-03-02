import Card from "@/app/ui/card";
import { Suspense } from "react";
import { CardsSkeleton } from "./skeletons";

import { getAllPokemons } from "@/app/lib/db";
const pokemons = await getAllPokemons();
console.log(pokemons);
async function CardContainer() {
  return (
    <div className=" grid  grid-cols-4  container  w-screen rounded-xl mt-4 mb-4 gap-4 ">
      {pokemons.map((e, i) => (
        <Suspense key={i} fallback={<CardsSkeleton />}>
          <Card
            key={i}
            name={e.name}
            image={e.image}
            type={e.types}
            number={e.number}
          />
        </Suspense>
      ))}
    </div>
  );
}

export default CardContainer;
