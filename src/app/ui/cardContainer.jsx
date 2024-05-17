import Card from "@/app/ui/card";
import { Suspense } from "react";
import { CardsSkeleton } from "./skeletons";

import { getFilteredPokemons, getTypes } from "@/app/lib/db";

async function CardContainer({ query, currentPage, sortName, sortValue }) {
  // console.log("cc sortName", sortName);
  // console.log("cc sortValue", sortValue);

  const pokemons = await getFilteredPokemons(
    query,
    currentPage,
    sortName,
    sortValue
  );
  // const types = pokemons.map((e, i) => e.type.map((e) => e.type.name));
  // console.log('types',types);

  return (
    <div className=" grid  grid-cols-4  container  w-screen rounded-xl mb-10 mt-10 gap-4 ">
      {pokemons.map((e, i) => (
        <Suspense key={i} fallback={<CardsSkeleton />}>
          <Card
            key={i}
            name={e.name}
            image={e.image}
            // types={pokemons.map((e, i) => e.type.map((e) => e.type.name))}
            type={e.type.map((e) => e.type.name)}
            number={e.number}
            id={e.id}
          />
        </Suspense>
      ))}
    </div>
  );
}

export default CardContainer;
