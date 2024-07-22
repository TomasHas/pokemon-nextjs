import Image from "next/image";
import "../../src/app/globals.css";

import logo from "./../assets/pokemon landing.png";

export default async function Page() {
  return (
    <main>
      <div className=" h-screen w-full bg-gradient-to-b from-yellow-400 to-white">
        {" "}
        <Image
          src={logo}
          alt="pokeApi"
          height="auto"
          width={800}
          priority={false}
        />
      </div>
    </main>
  );
}
