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
    <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
      <Search />
      <Filter types={types} />

      <Sort />
      <div className="bg-red-200 relative text-center rounded-xl  w-40 cursor-pointer hover:bg-red-300 hover:border-white  hover:font-bold active:bg-red-600 active:text-white">
        <button
          className=" w- full hover:w-full rounded-xl place-items-center p-2 text-center"
          onClick={(e) => handleReset(e)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
