import Card from "@/app/ui/card";
import { Suspense } from "react";
import { CardsSkeleton } from "./skeletons";
import { getData } from "../lib/data";

async function CardContainer({ query, currentPage }) {
  // console.log(pokeData.results.map((e) => e.name));

  console.log("CardContainer", "query", query, "currentPage", currentPage);
  const data = await getData(query, currentPage);
  // console.log(data.data.map((e) => e.name));
  // console.log(data);
  return (
    <div className=" grid  grid-cols-4  container  w-screen rounded-xl mt-4 mb-4 gap-4 ">
      {data.map((e, i) => (
        <Suspense key={i} fallback={<CardsSkeleton />}>
          <Card
            key={i}
            name={e.name}
            image={e.image}
            type={e.types}
            id={e.id}
          />
        </Suspense>
      ))}
    </div>
  );
}

export default CardContainer;
