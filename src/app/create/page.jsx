import FullClientPokemonForm from "./FullClientPokemonForm";
import { CreateSkeleton } from "../ui/skeletons";
import { getTypes } from "../lib/db";

export default async function Page() {
  const types = await getTypes();

  return (
    <div className=" flex  flex-col items-center p-4  ">
      Create a Pokemon!
      <FullClientPokemonForm />
      {/* <CreatePokemonForm createPokemon={createPokemon} types={types} /> */}
    </div>
  );
}
