"use client";
import { useEffect, useState } from "react";
import { getTypes, getTypesCount, getPokemonCount } from "../lib/db.js";
import { createPokemon } from "../lib/actions.js";

function FullClientPokemonForm() {
  const [types, setTypes] = useState([]);
  const [newPokemon, setNewPokemon] = useState({});
  const [selectedTypes, setSelectedTypes] = useState([]);

  useEffect(() => {
    const getAllTypes = async () => {
      const typeCount = await getTypesCount();
      const pokemonCount = await getPokemonCount();
      console.log("pokemonCount", pokemonCount);

      console.log("dbtypeCount", typeCount);
      const allTypes = await getTypes();
      console.log("allTypes", allTypes);
      setTypes(allTypes);
    };
    getAllTypes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(newPokemon);
    // console.log("types", types);
    const result = await createPokemon(newPokemon);
    console.log("result", result);
  };

  const handleChange = (e) => {
    e.preventDefault();
    validateInput(e.target.name, e.target.value);
    setNewPokemon({ ...newPokemon, [e.target.name]: e.target.value });
  };

  const handleSelectTypes = (e) => {
    e.preventDefault();
    setSelectedTypes([...selectedTypes, e.target.value]);
    setNewPokemon({
      ...newPokemon,
      [e.target.name]: [...selectedTypes, e.target.value],
    });
  };

  const validateInput = (name, value) => {
    console.log(name, value);
  };
  // console.log("newPokemon", newPokemon);
  // console.log("selectedTypes", selectedTypes);
  const inputStyle =
    "rounded-md h-8 p-2 hover:border-yellow-500 border-2 text-center";
  return (
    <div className="flex flex-row w-3/4">
      <div className="bg-red-500 p-4 w-1/2">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <label className=" capitalize " htmlFor="name">
            name
          </label>
          <input
            className=" rounded-md h-10 p-2 hover:border-yellow-500 border-2"
            name="name"
            type="text"
            id="name"
            onChange={handleChange}
          />
          <div className="flex flex-row justify-between gap-2">
            {" "}
            <div className="flex flex-col w-full">
              <label className=" capitalize" htmlFor="life">
                life
              </label>
              <input
                min={0}
                type="number"
                name="life"
                id="life"
                onChange={handleChange}
                className={inputStyle}
              />
              <label className=" capitalize" htmlFor="speed">
                speed
              </label>
              <input
                type="number"
                name="speed"
                id="speed"
                onChange={handleChange}
                className={inputStyle}
              />
              <label className=" capitalize" htmlFor="weight">
                weight
              </label>
              <input
                type="number"
                name="weight"
                id="weight"
                onChange={handleChange}
                className={inputStyle}
              />
            </div>{" "}
            <div className="flex flex-col w-full">
              <label className=" capitalize" htmlFor="height">
                height
              </label>
              <input
                type="number"
                name="height"
                id="height"
                onChange={handleChange}
                className={inputStyle}
              />
              <label className=" capitalize" htmlFor="defense">
                defense
              </label>
              <input
                type="number"
                name="defense"
                id="defense"
                onChange={handleChange}
                className={inputStyle}
              />
              <label className=" capitalize" htmlFor="attack">
                attack
              </label>
              <input
                type="number"
                name="attack"
                id="attack"
                onChange={handleChange}
                className={inputStyle}
              />
            </div>
          </div>
          <label className=" capitalize" htmlFor="types">
            type
          </label>
          <select
            name="type"
            id="type"
            className="rounded-md h-8  hover:border-yellow-500 border-2 text-center"
            onChange={handleSelectTypes}
          >
            {types.map((t) => (
              <option value={t} key={t}>
                {t}
              </option>
            ))}
          </select>

          <label className=" capitalize" htmlFor="image">
            image
          </label>
          <input
            type="text"
            name="image"
            id="image"
            onChange={handleChange}
            className={inputStyle}
          />
          <button
            className=" bg-red-600 hover:bg-yellow-400 hover:w-full rounded-xl place-items-center p-2 active:bg-yellow-500 text-center cursor-pointer"
            type="submit"
          >
            Submit
          </button>
        </form>{" "}
      </div>
      <div className=" w-1/2 bg-yellow-400"></div>
    </div>
  );
}

export default FullClientPokemonForm;
