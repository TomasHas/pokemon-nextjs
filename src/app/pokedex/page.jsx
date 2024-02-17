import Image from "next/image";
import CardContainer from "@/app/ui/cardContainer";

import Pagination from "./../ui/pagination";
import { Suspense } from "react";
import Search from "../ui/search";
import { CardsSkeleton } from "../ui/skeletons";
import { getData, getDataPages } from "../lib/data";
import Filters from "../ui/filters";

async function Page({ searchParams }) {
  console.log("searchParams", searchParams);

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await getDataPages(query);

  console.log("pokedex query:", query);
  console.log("pokedexcurrentPage:", currentPage);

  return (
    <div
      className="flex min-h-screen flex-col items-center djustify-between 
      p-4"
    >
      <div
        className="container flex flex-row items-center justify-between
      "
      >
        <Search /> <Filters />
      </div>

      <div>
        <Suspense fallback={<CardsSkeleton />}>
          <CardContainer query={query} currentPage={currentPage} />
        </Suspense>
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

export default Page;
