import Grid from "./grid";

import { getPokemonsForGames } from "../../lib/db";

export default async function Page() {
  const pokemons = await getPokemonsForGames();

  return (
    <div className="flex-col flex items-center w-full ">
      <div className="w-full">
        <Grid pokemons={pokemons} />
      </div>
    </div>
  );
}
