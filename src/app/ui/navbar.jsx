import Link from "next/link";
import { CgMenuRound } from "react-icons/cg";
function Navbar() {
  const navbarItemStyles =
    " flex flex-row  hover:text-white items-center justify-center w-full text-center   hover:bg-yellow-600 lg:h-16  ";
  return (
    <div className="flex flex-row items-center bg-yellow-400  justify-center p-2  lg:h-16 ">
      <nav className=" container flex flex-col md:flex-row items-center justify-between ">
        {/* <CgMenuRound className=" h-10 w-10" />{" "} */}
        <div className="flex flex-row  hover:text-white items-center justify-center w-full text-center   hover:bg-yellow-600 lg:h-16 ">
          <Link rel="stylesheet" href="/">
            <h3 className="">Home</h3>
          </Link>
        </div>
        <div className={navbarItemStyles}>
          <Link rel="stylesheet" href="/create">
            <h3 className=" hover:text-white">Create Pokemon</h3>
          </Link>
        </div>{" "}
        <div className={navbarItemStyles}>
          <Link rel="stylesheet" href="/pokedex">
            {" "}
            <h3 className=" hover:text-white">Pokedex</h3>
          </Link>
        </div>
        <div className={navbarItemStyles}>
          {" "}
          <Link rel="stylesheet" href="/games">
            {" "}
            <h3 className=" hover:text-white">Games</h3>
          </Link>
        </div>
        <div className={navbarItemStyles}>
          <Link rel="stylesheet" href="/login">
            {" "}
            <h3 className=" hover:text-white">Login</h3>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
