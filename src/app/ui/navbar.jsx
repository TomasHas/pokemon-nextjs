"use client";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { usePathname } from "next/navigation";
import { useState } from "react";
function Navbar() {
  const pathname = usePathname();
  const currentPath = pathname;
  // console.log(currentPath);
  const navbarItemStyles =
    " flex flex-row hover:text-white hover:-transition duration-200 items-center h-full justify-center w-full text-center lg:rounded-t-lg  md:h-16  ";
  const [OpenBurger, setOpenBurger] = useState(false);
  const handleBurger = (e) => {
    e.preventDefault();
    setOpenBurger(!OpenBurger);
  };
  return (
    <nav className="  flex flex-col md:flex-row items-center lg:justify-between ">
      {/* <div className=" sm:hidden" onClick={handleBurger}>
        {" "}
        <TiThMenu className=" h-10 w-10" />{" "}
      </div> */}

      <div className="  flex flex-row items-center bg-white justify-between w-full h-16 lg:h-16 ">
        <div
          className={`flex flex-row md:h-16  items-center justify-center w-full h-full  text-center hover:bg-yellow-400  rounded-t-lg ${
            currentPath === "/" ? "bg-yellow-400 text-white" : "text-black"
          }`}
        >
          <Link rel="stylesheet" href="/">
            <h3 className="">Home</h3>
          </Link>
        </div>
        <div
          className={`${navbarItemStyles} hover:bg-green-500  ${
            currentPath === "/create" ? "bg-green-500 text-white" : "text-black"
          }`}
        >
          <Link rel="stylesheet" href="/create">
            <h3 className="">Create Pokemon</h3>
          </Link>
        </div>{" "}
        <div
          className={`${navbarItemStyles} hover:bg-red-500 ${
            currentPath.includes("/pokedex")
              ? "bg-red-500 text-white"
              : "text-black"
          } `}
        >
          <Link rel="stylesheet" href="/pokedex">
            {" "}
            <h3 className="">Pokedex</h3>
          </Link>
        </div>
        <div
          className={`${navbarItemStyles} hover:bg-blue-500 ${
            currentPath.includes("/games")
              ? "bg-blue-500 text-white"
              : "text-black"
          }  `}
        >
          {" "}
          <Link rel="stylesheet" href="/games">
            {" "}
            <h3 className="">Games</h3>
          </Link>
        </div>
        <div
          className={`${navbarItemStyles} hover:bg-gray-500 ${
            currentPath === "/login" ? "bg-gray-500 text-white" : "text-black"
          }  `}
        >
          <Link rel="stylesheet" href="/login">
            {" "}
            <h3 className="">Login</h3>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
