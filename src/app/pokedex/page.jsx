import Image from "next/image";
import CardContainer from "@/app/ui/cardContainer";
import { getData } from "./../lib/data";
import Pagination from "./../ui/pagination";
import { Suspense } from "react";
import Search from "../ui/search";

async function page(searchParams) {
  const data = await getData();
  // console.log(data);

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  // const totalPages = await fetchInvoicesPages(query);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between 
      p-24"
    >
      <Suspense>{/* <Search /> */}</Suspense>
      <div>
        <Suspense>
          <CardContainer data={data} query={query} currentPage={currentPage} />
        </Suspense>
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </main>
  );
}

export default page;
