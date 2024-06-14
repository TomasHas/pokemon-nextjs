import Link from "next/link";
import { CgMenuRound } from "react-icons/cg";
function Navbar() {
  const navbarItemStyles =
    " flex flex-row hover:text-white hover:-transition duration-200  items-center justify-center w-full text-center    lg:h-16  ";

  return (
    <div className="flex flex-row items-center bg-white justify-center p-2  lg:h-16 ">
      <nav className=" container flex flex-col md:flex-row items-center justify-between ">
        {/* <CgMenuRound className=" h-10 w-10" />{" "} */}
        <div className="flex flex-row items-center justify-center w-full text-center hover:bg-yellow-400 lg:h-16 hover:-transition duration-100 ">
          <Link rel="stylesheet" href="/">
            <h3 className="">Home</h3>
          </Link>
        </div>
        <div className={`${navbarItemStyles} hover:bg-green-500 `}>
          <Link rel="stylesheet" href="/create">
            <h3 className="">Create Pokemon</h3>
          </Link>
        </div>{" "}
        <div className={`${navbarItemStyles} hover:bg-red-500 `}>
          <Link rel="stylesheet" href="/pokedex">
            {" "}
            <h3 className="">Pokedex</h3>
          </Link>
        </div>
        <div className={`${navbarItemStyles} hover:bg-blue-500 `}>
          {" "}
          <Link rel="stylesheet" href="/games">
            {" "}
            <h3 className="">Games</h3>
          </Link>
        </div>
        <div className={`${navbarItemStyles} hover:bg-gray-500 `}>
          <Link rel="stylesheet" href="/login">
            {" "}
            <h3 className="">Login</h3>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
