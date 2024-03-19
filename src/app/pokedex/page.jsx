import CardContainer from "@/app/ui/cardContainer";

// import Pagination from "../ui/pagination";
import { Suspense } from "react";
import Search from "../ui/search";
import { CardsSkeleton } from "../ui/skeletons";
import { fetchPokemonPages } from "../lib/db";
import Sort from "../ui/sort";
import SortFilterSearch from "../ui/sortFilterSearch";
// import FilterType from "../ui/filter";
async function Page({ searchParams }) {
  // console.log(searchParams);

  const sort = searchParams?.sort || "asc";
  const filter = searchParams?.filter || "";
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchPokemonPages(query);
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-between 
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
            sort={sort}
            filter={filter}
          />
        </Suspense>
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}

export default Page;
