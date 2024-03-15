import CardContainer from "@/app/ui/cardContainer";

import Pagination from "../ui/pagination";
import { Suspense } from "react";
import Search from "../ui/search";
import { CardsSkeleton } from "../ui/skeletons";
import { fetchPokemonPages } from "../lib/db";

// import FilterType from "../ui/filter";
async function Page({ searchParams }) {
  console.log(searchParams);
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchPokemonPages(query);
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-between 
      p-4 overflow-hidden"
    >
      <div className="container flex flex-row items-center justify-between">
        <Search />
        {/* <FilterType /> */}
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
