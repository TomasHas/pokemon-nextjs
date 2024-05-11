"use server";

import prisma from "./prisma";
import { getPokemonCount } from "./db";
import zIndex from "@mui/material/styles/zIndex";

//////////////  THIS WORKS  for TestCreatePokemonForm.jsx///////////////////////////////////
export async function createPokemon(newPokemon) {
  try {
    console.log("newPokemon", ...newPokemon.type.map((element, i) => element));
    const pokemonCount = await getPokemonCount();
    const result = await prisma.pokemon.create({
      data: {
        ...newPokemon,
        number: pokemonCount + 1,
        life: parseInt(newPokemon.life),
        attack: parseInt(newPokemon.attack),
        defense: parseInt(newPokemon.defense),
        weight: parseInt(newPokemon.weight),
        height: parseInt(newPokemon.height),
        speed: parseInt(newPokemon.speed),
        // type: {
        //   create: {
        //     type: {
        //       connect: {
        //         name: "fire",
        //       },
        //     },
        //   },
        // },
        type: {
          create: newPokemon.type.map((t) => {
            return {
              type: {
                connect: {
                  name: t,
                },
              },
            };
          }),
        },
      },
    });

    return result;
  } catch (error) {
    console.log(error);
  }
}

////////////////////////////////////////////////////////////

// export async function createPokemon(formData) {
//   const pokemonCount = await getPokemonCount();
//   try {
//     const number = pokemonCount + 1;
//     const name = formData.get("name");
//     const life = formData.get("life");
//     const weight = formData.get("weight");
//     const height = formData.get("height");
//     const defense = formData.get("defense");
//     const attack = formData.get("attack");
//     const image = formData.get("image");
//     const speed = formData.get("speed");
//     const type = formData.get("types");
//     console.log(type);

//     const result = await prisma.pokemon.create({
//       data: {
//         name: name,
//         number: number,
//         life: parseInt(life),
//         attack: parseInt(attack),
//         defense: parseInt(defense),
//         weight: parseInt(weight),
//         height: parseInt(height),
//         speed: parseInt(speed),
//         image: image,

//         type: { create: { type: { connect: { name: { type } } } } },
//       },
//     });

//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// }
