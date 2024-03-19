import Card from "@/app/ui/card";
import { Suspense } from "react";
import { CardsSkeleton } from "./skeletons";

import { getFilteredPokemons } from "@/app/lib/db";

async function CardContainer({ query, currentPage, sort, filter }) {
  console.log("cc", sort, filter);
  const pokemons = await getFilteredPokemons(query, currentPage, sort, filter);
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
            id={e.id}
          />
        </Suspense>
      ))}
    </div>
  );
}

export default CardContainer;
