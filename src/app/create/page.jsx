import FullClientPokemonForm from "./FullClientPokemonForm";
import { CreateSkeleton } from "../ui/skeletons";
import { getTypes } from "../lib/db";

export default async function Page() {
  const types = await getTypes();

  return (
    <div className=" flex  flex-col items-center p-4 bg-gradient-to-b from-green-500 to-white ">
      Create a Pokemon!
      <FullClientPokemonForm />
      {/* <CreatePokemonForm createPokemon={createPokemon} types={types} /> */}
    </div>
  );
}
