import Image from "next/image";

import logo from "../../public/pokemon landing.png";

export default async function Page() {
  return (
    <main>
      <Image src={logo} alt="pokeApi" height={800} width={900} />
    </main>
  );
}
