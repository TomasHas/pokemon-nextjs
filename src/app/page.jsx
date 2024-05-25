import Image from "next/image";

import logo from "./../assets/pokemon landing.png";

export default async function Page() {
  return (
    <main>
      <div
        className=" h-screen 
      "
      >
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
