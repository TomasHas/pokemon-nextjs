"use client";
import { useEffect, useState } from "react";
import { getTypes, getTypesCount, getPokemonCount } from "../lib/db.js";
import { createPokemon } from "../lib/actions.js";

function FullClientPokemonForm() {
  const [types, setTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [formData, setSetFormData] = useState({
    name: "",
    life: 0,
    attack: 0,
    defense: 0,
    weight: 0,
    height: 0,
    speed: 0,
    image: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log(errors);
  }, [errors]);
  const validateForm = (data) => {
    const errors = {};

    if (!data.name.trim()) {
      errors.name = "Name is required";
      if (data.name.length > 10) {
        errors.name = " < 10 characters";
      }
    }

    if (!data.speed) {
      errors.speed = "Speed value is required";
    }
    if (!data.life) {
      errors.life = "Life value is required";
      if (data.speed <= 0 || data.speed > 100) {
        errors.life = "Life between 0 and 100";
      }
    }
    if (!data.attack) {
      errors.attack = "Attack value is required";
    }
    if (!data.defense) {
      errors.defense = "Defense value is required";
      //num between 0 100
    }
    if (!data.image.trim()) {
      errors.image = "Image URL is required";
      //end in format
    }

    return errors;
  };

  useEffect(() => {
    const getAllTypes = async () => {
      const typeCount = await getTypesCount();
      const pokemonCount = await getPokemonCount();
      // console.log("pokemonCount", pokemonCount);

      // console.log("dbtypeCount", typeCount);
      const allTypes = await getTypes();
      // console.log("allTypes", allTypes);
      setTypes(allTypes);
    };
    getAllTypes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      // Form submission logic here
      // const result = await createPokemon(formData);
      console.log("result", result);
      console.log("Form submitted successfully!");
    } else {
      console.log(`Form submission failed
       due to validation errors.`);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setSetFormData({ ...formData, [name]: value });
  };

  const handleSelectTypes = (e) => {
    e.preventDefault();
    setSelectedTypes([...selectedTypes, e.target.value]);
    setSetFormData({
      ...formData,
      [e.target.name]: [...selectedTypes, e.target.value],
    });
  };

  const inputStyle =
    "rounded-md h-8 p-2 hover:border-yellow-500 border-2 text-center w-14";
  const errorMessageStyle = "";
  const inputContainerStyle = "flex justify-between";
  console.log(errors);
  return (
    <div className="flex flex-row w-3/4">
      <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
        <div className="flex flex-row ">
          <div className=" p-4 w-1/2">
            <label className=" capitalize " htmlFor="name">
              name
            </label>
            <input
              className=" rounded-md h-8 p-2 hover:border-yellow-500 border-2"
              name="name"
              value={formData.name}
              type="text"
              id="name"
              onChange={handleChange}
            />
            {errors.name && (
              <span className=" text-red-500 text-sm">{errors.name}</span>
            )}
            <div className="flex flex-row  gap-2 justify-between ">
              <div className="flex flex-col bg-red-500 w-full gap-2">
                <div className="flex justify-between">
                  <label className=" capitalize  " htmlFor="life">
                    life
                  </label>
                  <input
                    min={0}
                    type="number"
                    name="life"
                    id="life"
                    onChange={handleChange}
                    className={inputStyle}
                    value={formData.life}
                  />
                  {errors.life && (
                    <span className=" text-red-500 text-sm">{errors.life}</span>
                  )}
                </div>
                <div className={inputContainerStyle}>
                  <label className=" capitalize" htmlFor="speed">
                    speed
                  </label>
                  <input
                    type="number"
                    name="speed"
                    id="speed"
                    onChange={handleChange}
                    className={inputStyle}
                    value={formData.speed}
                  />
                  {errors.speed && (
                    <span className=" text-red-500 text-sm">
                      {errors.speed}
                    </span>
                  )}
                </div>
                <div className={inputContainerStyle}>
                  <label className=" capitalize" htmlFor="weight">
                    weight
                  </label>
                  <input
                    type="number"
                    name="weight"
                    id="weight"
                    onChange={handleChange}
                    className={inputStyle}
                    value={formData.weight}
                  />
                  {errors.weight && (
                    <span className=" text-red-500 text-sm">
                      {errors.weight}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col bg-green-500 w-full gap-2">
                <div className={inputContainerStyle}>
                  <label className=" capitalize" htmlFor="height">
                    height
                  </label>
                  <input
                    type="number"
                    name="height"
                    id="height"
                    onChange={handleChange}
                    className={inputStyle}
                    value={formData.height}
                  />
                  {errors.height && (
                    <span className=" text-red-500 text-sm ">
                      {errors.height}
                    </span>
                  )}
                </div>
                <div className={inputContainerStyle}>
                  <label className=" capitalize" htmlFor="defense">
                    defense
                  </label>
                  <input
                    type="number"
                    name="defense"
                    id="defense"
                    onChange={handleChange}
                    className={inputStyle}
                    value={formData.defense}
                  />
                  {errors.defense && (
                    <span className=" text-red-500 text-sm">
                      {errors.defense}
                    </span>
                  )}
                </div>
                <div className={inputContainerStyle}>
                  <label className=" capitalize" htmlFor="attack">
                    attack
                  </label>
                  <input
                    type="number"
                    name="attack"
                    id="attack"
                    onChange={handleChange}
                    className={inputStyle}
                    value={formData.attack}
                  />
                  {errors.attack && (
                    <span className=" text-red-500 text-sm">
                      {errors.attack}
                    </span>
                  )}
                </div>
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
              value={formData.image}
              className=" rounded-md h-8 p-2 hover:border-yellow-500 border-2"
            />
            {errors.image && (
              <span className=" text-red-500 text-sm">{errors.image}</span>
            )}
          </div>
          <div className=" w-1/2 bg-yellow-400"></div>
        </div>
        <button
          className=" bg-blue-600 hover:bg-yellow-400 hover:w-full rounded-xl place-items-center p-2 active:bg-yellow-500 text-center cursor-pointer text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FullClientPokemonForm;
