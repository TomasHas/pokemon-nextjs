"use server";

import prisma from "./prisma";
import { getPokemonCount } from "./db";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function authenticate(prevState, formData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

//  THIS WORKS  for TestCreatePokemonForm.jsx///////////////////////////////////
export async function createPokemon(newPokemon) {
  try {
    // console.log(
    //   "newPokemon",
    //   newPokemon.type.map((element, i) => element)
    // );
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

export async function createUser(email, password) {
  try {
    const result = await prisma.user.create({
      data: { email: email, password: password },
    });
    console.log(email, password);
    console.log("user created");
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
