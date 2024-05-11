// "use client";
import { getTypes } from "../lib/db";

async function CreatePokemonForm() {
  const types = await getTypes();
  console.log(types);
  const createPokemon = async (formData) => {
    "use server";
    console.log(formData);
    const name = formData.get("name");
    const life = formData.get("life");
    const weight = formData.get("weight");
    const height = formData.get("height");
    const defense = formData.get("defense");
    const attack = formData.get("attack");
    const image = formData.get("image");
    const speed = formData.get("speed");
    const types = formData.getAll("type");

    const newPoke = await prisma.pokemon.create({
      data: {
        name: name,
        life: parseInt(life),
        attack: parseInt(attack),
        defense: parseInt(defense),
        weight: parseInt(weight),
        height: parseInt(height),
        speed: parseInt(speed),
        image: image,
        type: {
          create: types.map((t) => ({ name: t })),
        },
      },
    });
  };

  return (
    <div>
      <form className="flex flex-col gap-2" action={createPokemon}>
        <label className=" capitalize" htmlFor="name">
          name
        </label>
        <input name="name" type="text" id="name" />

        <label className=" capitalize" htmlFor="life">
          life
        </label>
        <input type="number" name="life" id="life" />
        <label className=" capitalize" htmlFor="speed">
          speed
        </label>
        <input type="number" name="speed" id="speed" />
        <label className=" capitalize" htmlFor="weight">
          weight
        </label>
        <input type="number" name="weight" id="weight" />
        <label className=" capitalize" htmlFor="heigth">
          height
        </label>
        <input type="number" name="height" id="height" />
        <label className=" capitalize" htmlFor="defense">
          defense
        </label>
        <input type="number" name="defense" id="defense" />
        <label className=" capitalize" htmlFor="attack">
          attack
        </label>
        <input type="number" name="attack" id="attack" />

        <label className=" capitalize" htmlFor="type">
          type
        </label>
        <select name="type" id="type">
          {types.map((t) => (
            <option value={t} key={t}>
              {t}
            </option>
          ))}
        </select>

        <label className=" capitalize" htmlFor="image">
          image
        </label>
        <input type="text" name="image" id="image" />
        <button
          className=" hover:bg-yellow-400 hover:w-full rounded-xl place-items-center p-2 active:bg-yellow-500 text-center cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePokemonForm;
