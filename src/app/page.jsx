import Image from "next/image";
import "../../src/app/globals.css";

import logo from "./../assets/pokemon landing.png";

export default async function Page() {
  return (
    <main className=" h-screen">
      <div
        className="  bg-gradient-to-b from-yellow-400 to-white"
        style={{
          backgroundImage: `url('/pokemon landing.png'), linear-gradient(to bottom, #facc15, white) `,
          // backgroundColor: "yellow",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "90vh", // Adjust as needed
        }}
      ></div>
    </main>
  );
}
{
  /* <Image
          src={logo}
          alt="pokeApi"
          height="auto"
          width={800}
          priority={false}
        /> */
}
