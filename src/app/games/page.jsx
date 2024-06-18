import TicTacToe from "./TicTacToe";
import React, { Suspense } from "react";
import Loading from "./loading";
import { getPokemonsForGames } from "../lib/db";
export default async function Page() {
  const pokemons = await getPokemonsForGames();

  return (
    <div>
      <h1>Games</h1>
      <Suspense fallback={<Loading />}>
        <TicTacToe pokemons={pokemons} />{" "}
      </Suspense>
    </div>
  );
}
