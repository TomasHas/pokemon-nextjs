import { CardsSkeleton } from "@/app/ui/skeletons";

export default function Loading() {
  const pokemonBall = (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <!-- Outer circle (Poké Ball outline) --> */}
      <circle
        cx="100"
        cy="100"
        r="95"
        stroke="black"
        stroke-width="10"
        fill="white"
      />

      {/* <!-- Top half (red) --> */}
      <path
        d="M 100, 5
   A 95, 95, 0, 0, 1, 195, 100
   L 5, 100
   A 95, 95, 0, 0, 1, 100, 5"
        fill="red"
        stroke="black"
        stroke-width="5"
      />

      {/* <!-- Bottom half (white) --> */}
      <path
        d="M 100, 195
   A 95, 95, 0, 0, 1, 5, 100
   L 195, 100
   A 95, 95, 0, 0, 1, 100, 195"
        fill="white"
        stroke="black"
        stroke-width="5"
      />

      {/* <!-- Middle circle (black outline) --> */}
      <circle
        cx="100"
        cy="100"
        r="30"
        stroke="black"
        stroke-width="10"
        fill="white"
      />

      {/* <!-- Inner circle (black) --> */}
      <circle cx="100" cy="100" r="20" fill="black" />
    </svg>
  );

  return (
    <div className=" flex flex-row justify-center items-center h-screen">
      <CardsSkeleton />
      {/* <img src={pokemonBall} alt={pokemonBall} width={500} height={500} /> */}
    </div>
  );
}
