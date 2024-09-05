"use client";

import { useState, useEffect, useRef } from "react";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

import { MdFilterAlt } from "react-icons/md";
import { colorType } from "../lib/utils";
export default function Filter(types) {
  const [isOpen, setIsOpen] = useState(false);
  const [typeColor, setTypeColor] = useState("blue");
  const dropdownRef = useRef(null);
  const type = Object.values(types.types);
  // console.log(type);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleClick = (e) => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Close dropdown if click is outside of it
      // console.log("dropdownRef.current", dropdownRef.current);

      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleType = (value) => {
    console.log("value", value);

    setTypeColor(colorType(value));

    const filterValue = value;
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (filterValue) {
      params.set("type", filterValue);
    } else {
      params.delete("type", filterValue);
    }

    console.log("filterValue ", filterValue);

    // params.set("type", filterValue);
    console.log(pathname);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div
      ref={dropdownRef}
      className="relative rounded-xl lg:w-40 cursor-pointer"
    >
      <div className="flex flex-col gap-2 items-center ">
        <div
          onClick={handleClick}
          className="bg-blue-300 p-2 rounded-xl flex flex-row justify-around items-center lg:w-full "
        >
          <p className="hidden md:flex">Filter</p>{" "}
          <MdFilterAlt className="w-7 h-7" />
        </div>

        {isOpen && (
          <ul className=" shadow-lg z-50 absolute flex flex-col mt-2 flex-wrap items-center top-11 bg-white p-4 rounded-xl w-96 max-h-80 ">
            {type[0].map((t, i) => (
              <li
                key={i}
                name={t}
                value={t}
                onClick={() => handleType(t)}
                className={` w-24  capitalize hover:bg-gray-300 hover:w-24 hover:text-white rounded-xl place-items-center p-2 pl-4 pr-4 active:bg-yellow-500 text-center`}
              >
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
