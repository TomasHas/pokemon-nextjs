import CardContainer from "@/app/ui/cardContainer";

import Pagination from "../ui/pagination";
import { Suspense } from "react";
import Search from "../ui/search";
import { CardsSkeleton } from "../ui/skeletons";

async function Page({ searchParams }) {
  return (
    <div
      className="flex min-h-screen flex-col items-center djustify-between 
      p-4"
    >
      <div className="container flex flex-row items-center justify-between">
        <Search />
      </div>

      <div>
        <Suspense fallback={<CardsSkeleton />}>
          <CardContainer />
        </Suspense>
        <Pagination />
      </div>
    </div>
  );
}

export default Page;
