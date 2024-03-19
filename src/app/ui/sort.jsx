"use client";

import { useState, useEffect, useRef } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const liSort =
  "  hover:bg-yellow-400 hover:w-full rounded-xl place-items-center p-2 active:bg-yellow-500 text-center cursor-pointer";

export default function Sort() {
  const [isOpen, setIsOpen] = useState(false);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const handleSort = (e) => {
    e.preventDefault();
    const sortName = e.target.name;
    const sortValue = e.target.value;

    const newParams = new URLSearchParams(params);
    newParams.set(sortName, sortValue);

    replace(`${pathname}?${newParams.toString()}`);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    setIsOpen(!isOpen);
  };

  const handleReset = (e) => {
    e.preventDefault();

    replace(`${pathname}?`);
  };

  return (
    <div className="relative rounded-xl  w-40 cursor-pointer">
      <div className=" flex flex-col items-center gap-2">
        <div
          onClick={handleClick}
          className=" bg-yellow-300 p-2  rounded-xl flex flex-col items-center w-full"
        >
          Sort
        </div>

        <ul
          className={`${
            isOpen ? "visible" : "invisible"
          } absolute flex flex-col items-center top-11 bg-white p-4 rounded-xl w-max`}
        >
          <li>
            <button
              id="numberAsc"
              name="number"
              value="asc"
              className=" hover:bg-yellow-400 hover:w-full rounded-xl place-items-center p-2 active:bg-yellow-500 text-center"
              onClick={(e) => handleSort(e)}
            >
              {" "}
              Number ( - )
            </button>
          </li>
          <li>
            {" "}
            <button
              id="numberDesc"
              name="number"
              value="desc"
              className=" hover:bg-yellow-400 hover:w-full rounded-xl place-items-center p-2 active:bg-yellow-500 text-center"
              onClick={(e) => handleSort(e)}
            >
              Number ( + )
            </button>
          </li>
          <li>
            {" "}
            <button
              id="weightAsc"
              name="weight"
              value="asc"
              className=" hover:bg-yellow-400 hover:w-full rounded-xl place-items-center p-2 active:bg-yellow-500 text-center"
              onClick={(e) => handleSort(e)}
            >
              {" "}
              weight ( + )
            </button>
          </li>
          <li>
            {" "}
            <button
              id="weightDesc"
              name="weight"
              value="desc"
              className=" hover:bg-yellow-400 hover:w-full rounded-xl place-items-center p-2 active:bg-yellow-500 text-center"
              onClick={(e) => handleSort(e)}
            >
              {" "}
              weight ( - )
            </button>
          </li>
          <li>
            {" "}
            <button
              id="reset"
              name="reset"
              className=" hover:bg-yellow-400 hover:w-full rounded-xl place-items-center p-2 active:bg-yellow-500 text-center"
              onClick={(e) => handleReset(e)}
            >
              {" "}
              Reset
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
