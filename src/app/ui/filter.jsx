"use client";

import { useState, useEffect, useRef } from "react";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

const liFilter =
  "  hover:bg-yellow-400 hover:w-full rounded-xl place-items-center p-2 active:bg-yellow-500 text-center cursor-pointer";

export default function Filter(types) {
  const [isOpen, setIsOpen] = useState(false);
  const [typeChosen, setTypeChosen] = useState("");
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

    setTypeChosen(value);

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
    <div ref={dropdownRef} className="relative rounded-xl w-40 cursor-pointer">
      <div className="flex flex-col gap-2 items-end">
        <div
          onClick={handleClick}
          className="bg-blue-300 p-2 rounded-xl flex flex-col items-center w-full "
        >
          Filter
        </div>

        {isOpen && (
          <ul className="absolute flex flex-col  flex-wrap items-center top-11 bg-white p-4 rounded-xl w-96 max-h-80 ">
            {type[0].map((t, i) => (
              <li
                key={i}
                name={t}
                value={t}
                onClick={() => handleType(t)}
                className=" w-24  capitalize hover:bg-yellow-400 hover:w-24 rounded-xl place-items-center p-2 pl-4 pr-4 active:bg-yellow-500 text-center"
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
