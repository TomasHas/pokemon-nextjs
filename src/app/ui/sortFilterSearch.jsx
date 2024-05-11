"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import Search from "./search";
import Filter from "./filter";
import Sort from "./sort";

export default function SortFilterSearch(types) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  //   const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();
  const handleReset = (e) => {
    e.preventDefault();

    replace(`${pathname}?`);
  };
  return (
    <div className=" container flex flex-row items-center justify-between bg-slate-200 w-screen">
      <Search />
      <Filter types={types} />

      <Sort />
      <div className="bg-red-200 relative text-center rounded-xl border-none w-40 cursor-pointer">
        <button
          className=" hover:bg-red-300  w- full hover:w-full rounded-xl place-items-center p-2 active:bg-red-400 text-center"
          onClick={(e) => handleReset(e)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
