import FullClientPokemonForm from "./FullClientPokemonForm";
import CreatePokemonForm from "./CreatePokemonForm";
import { createPokemon } from "../lib/actions.js";
import { getTypes } from "../lib/db";

export default async function Page() {
  const types = await getTypes();

  return (
    <div className=" flex  flex-col items-center justify-center p-4 bg-red-400 ">
      Create a Pokemon!
      <FullClientPokemonForm />
      {/* <CreatePokemonForm createPokemon={createPokemon} types={types} /> */}
    </div>
  );
}
