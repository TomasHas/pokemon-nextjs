import CardContainer from "@/app/ui/cardContainer";

import Pagination from "../ui/pagination";
import { Suspense } from "react";
import Search from "../ui/search";
import { CardsSkeleton } from "../ui/skeletons";
import { fetchPokemonPages } from "../lib/db";
import Sort from "../ui/sort";
import SortFilterSearch from "../ui/sortFilterSearch";
// import FilterType from "../ui/filter";
async function Page({ searchParams }) {
  const sortName = searchParams?.name || "";
  const sortValue = searchParams?.value || "";
  const filter = searchParams?.filter || "";
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchPokemonPages(query);

  console.log("page", sortName, ":", sortValue);
  return (
    <div
      className="flex min-h-screen flex-col items-center 

      p-4 overflow-hidden"
    >
      <div>
        <SortFilterSearch />
      </div>

      <div>
        <Suspense fallback={<CardsSkeleton />}>
          <CardContainer
            query={query}
            currentPage={currentPage}
            sortValue={sortValue}
            sortName={sortName}
            filter={filter}
          />
        </Suspense>
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

export default Page;
