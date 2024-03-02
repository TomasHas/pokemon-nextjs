import prisma from "./prisma";

export async function getAllPokemons() {
  return prisma.pokemon.findMany();
}
