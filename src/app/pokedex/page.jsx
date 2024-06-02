import CardContainer from "@/app/ui/cardContainer";

import Pagination from "../ui/pagination";
import { Suspense } from "react";
import Search from "../ui/search";
import { CardsSkeleton } from "../ui/skeletons";
import { fetchPokemonPages, getTypes } from "../lib/db";
import Sort from "../ui/sort";
import SortFilterSearch from "../ui/sortFilterSearch";
// import FilterType from "../ui/filter";
export default async function Page({ searchParams }) {
  const sortName = searchParams?.name || "";
  const sortValue = searchParams?.value || "";
  const filterType = searchParams?.type || "";
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchPokemonPages(query, filterType);
  const types = await getTypes();
  // console.log(types);
  // console.log("page", sortName, ":", sortValue);
  return (
    <div className="flex  flex-col items-center mt-4 overflow-hidden ">
      <div>
        <SortFilterSearch types={types} />
      </div>
      <div className="">
        <Suspense fallback={<CardsSkeleton />}>
          <CardContainer
            query={query}
            currentPage={currentPage}
            sortValue={sortValue}
            sortName={sortName}
            filterType={filterType}
          />
        </Suspense>
      </div>{" "}
      <Pagination totalPages={totalPages} />
    </div>
  );
}
