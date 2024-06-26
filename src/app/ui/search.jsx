"use client";

import { IoSearchSharp } from "react-icons/io5";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);
    // console.log("params.toString()", params.toString());
    params.set("page", "1");

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    // console.log(params.toString());
    console.log(pathname);
    replace(`${pathname}?${params.toString()}`);

    // console.log(term);
  }, 300);

  return (
    <div className="relative flex  flex-shrink-0 w-40 rounded-xl">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className=" block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        placeholder="Search..."
        // defaultValue={searchParams.get("query")?.toString()}
      />
      <IoSearchSharp className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
