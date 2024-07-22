"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import Search from "./search";
import Filter from "./filter";
import Sort from "./sort";
import { RxReset } from "react-icons/rx";
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
    // <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
    <div className="  flex flex-row items-center gap-2">
      <Search />
      <Filter types={types} />

      <Sort />
      <div className="relative flex flex-row items-center justify-center lg:justify-around border-white border-2 bg-red-400  text-center rounded-xl   lg:w-40 cursor-pointer hover:bg-red-500 hover:border-white hover:border-2  active:bg-red-600 active:text-white ">
        <button
          className="flex flex-row   rounded-xl justify-center items-center p-2  text-center text-white"
          onClick={(e) => handleReset(e)}
        >
          <p className=" hidden md:flex">Reset</p>{" "}
          <div>
            <RxReset className="w-7 h-7 text-white" />
          </div>
        </button>
      </div>
    </div>
  );
}
