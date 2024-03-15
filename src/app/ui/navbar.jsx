import Link from "next/link";

function Navbar() {
  return (
    <div className="flex flex-row items-center bg-yellow-500 justify-center  h-16 ">
      <nav className=" container flex flex-row items-center justify-between ">
        <Link rel="stylesheet" href="/">
          <h3 className="">Home</h3>
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
