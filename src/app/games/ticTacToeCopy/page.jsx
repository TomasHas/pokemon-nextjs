import Grid from "./grid";

import { getPokemonsForGames } from "../../lib/db";

export default async function Page() {
  const pokemons = await getPokemonsForGames();

  return (
    <div className="flex-col flex items-center justify-center w-screen">
      <div className="">
        <Grid pokemons={pokemons} />
      </div>
    </div>
  );
}
