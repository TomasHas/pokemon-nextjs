const CreatePokemonForm = ({ createPokemon, types }) => {
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
        <select name="type" id="type" multiple>
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
};

export default CreatePokemonForm;

// const createPokemon = async (formData) => {
//   // "use server";
//   try {
//     // const name = formData.get("name");
//     // const life = parseInt(formData.get("life"));
//     // const weight = parseInt(formData.get("weight"));
//     // const height = parseInt(formData.get("height"));
//     // const defense = parseInt(formData.get("defense"));
//     // const attack = parseInt(formData.get("attack"));
//     // const image = formData.get("image");
//     // const speed = parseInt(formData.get("speed"));
//     // const typeName = formData.get("type"); // Assuming the type name is provided

//     // Find the type ID based on the type name
//     // const selectedType = types.find((type) => type.name === typeName);

//     // if (!selectedType) {
//     //   console.error(`Type "${typeName}" not found.`);
//     //   return;
//     // }

//     const newPoke = await prisma.pokemon.create({
//       data: {
//         name,
//         life,
//         attack,
//         defense,
//         weight,
//         height,
//         speed,
//         image,
//         typeId: selectedType.id, // Connect the Pokémon to the existing type
//       },
//     });

//     console.log("New Pokémon created:", newPoke);
//   } catch (error) {
//     console.error("Error creating Pokémon:", error);
//   }
// };
