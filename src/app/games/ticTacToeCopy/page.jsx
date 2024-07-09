import Grid from "./grid";

import { getPokemonsForGames } from "../../lib/db";

export default async function Page() {
  const pokemons = await getPokemonsForGames();

  return (
    <div className="flex flex-row bg-yellow-200 w-screen justify-around p-10 items-start">
      <div>
        <Grid pokemons={pokemons} />
      </div>
    </div>
  );
}
