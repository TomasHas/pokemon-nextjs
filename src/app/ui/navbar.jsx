import React from "react";
import Link from "next/link";
import Search from "./search";

function Navbar() {
  return (
    <div className="  flex flex-col items-center justify-center  bg-yellow-200 h-16 w-screen">
      <nav className=" container flex flex-row items-center justify-between ">
        <Link rel="stylesheet" href="/">
          <h3>Home</h3>
        </Link>
        <Link rel="stylesheet" href="/create">
          <h3>Create Pokemon</h3>
        </Link>
        <Link rel="stylesheet" href="/pokedex">
          {" "}
          <h3>Pokedex</h3>
        </Link>
        <div>
          <h3>Sign In</h3>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
