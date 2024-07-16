"use client";
import { useEffect, useState } from "react";
import { getTypes, getTypesCount, getPokemonCount } from "../lib/db.js";
import SelectTypes from "./SelectTypes.jsx";
import Input from "./Input.jsx";
import { createPokemon } from "../lib/actions.js";
import Image from "next/image.js";
import PreviewCreate from "./PreviewCreate.jsx";
function FullClientPokemonForm() {
  const [formData, setFormData] = useState({
    name: "",
    life: 0,
    attack: 0,
    defense: 0,
    weight: 0,
    height: 0,
    speed: 0,
    image: "",
    type: "",
  });

  const [errors, setErrors] = useState({});

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
      if (data.speed < 0 || data.speed > 100) {
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
    if (!data.height) {
      errors.height = "Height value is required";
      //num between 0 100
    }
    if (!data.weight) {
      errors.weight = "Weight value is required";
      //num between 0 100
    }
    if (!data.image.trim()) {
      const regex =
        /^https?:\/\/(?:www\.)?[\w\-\.]+(?:\.[a-z]{2,})+(?:\/[\w\-\.]*)*\.(?:jpg|jpeg|png|gif|bmp|webp)(?:\?[^\s]*)?$/i;
      if (!regex.test(data.image)) {
        errors.image = " must have jpg,jpeg,png,gif,bmp,webp format";
      }
      errors.image = "Image URL is required";
      //end in format
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (Object.keys(errors).length === 0) {
      // Form submission logic here
      const result = await createPokemon(formData);
      console.log("result", result);
      console.log("Form submitted successfully!");
    } else {
      console.log(`Form submission failed
       due to validation errors.`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("handlechange", value);
    setErrors(validateForm({ ...formData, [name]: value }));

    if (`!errors.${name}`) {
      setFormData({ ...formData, [name]: value });
    }
  };
  console.log("formData.length", formData.type.length);

  const handleSelectChange = (value) => {
    console.log("handletypes", value);
    // setelectedTypes(e.target.value);

    setFormData({ ...formData, ["type"]: value });
  };

  console.log(errors);
  console.log(formData);
  const inputStyle =
    "flex flex-row rounded-md h-8 p-2 hover:border-yellow-500 border-2 text-center w-14";
  const errorMessageStyle = " text-red-500 text-xs bg-white";

  const inputContainerStyle = "flex  flex-col justify-between";
  console.log(formData.type);
  return (
    <div className="flex flex-col md:w-3/4  h-auto ">
      <form className="flex flex-col gap-2 h-screen   " onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center gap-2 p-4  lg:flex-row lg:justify-between ">
          <div className=" flex flex-col  gap-2 rounded-xl shadow-2xl bg-white p-6  lg:w-1/2">
            <Input
              name={"name"}
              value={formData.name}
              handleChange={handleChange}
              type={"text"}
              id={"name"}
              placeholder={"Write name here"}
            />{" "}
            {errors.name && (
              <span className={errorMessageStyle}>{errors.name}</span>
            )}{" "}
            <div className="flex ">
              <SelectTypes handleChange={handleSelectChange} />
            </div>
            <Input
              name={"life"}
              value={formData.life}
              handleChange={handleChange}
              type={"number"}
              id={"life"}
              max={150}
              min={0}
            />{" "}
            {errors.life && (
              <span className={errorMessageStyle}>{errors.life}</span>
            )}
            <Input
              name={"speed"}
              value={formData.speed}
              handleChange={handleChange}
              type={"number"}
              id={"speed"}
              max={150}
              min={0}
            />{" "}
            {errors.speed && (
              <span className={errorMessageStyle}>{errors.speed}</span>
            )}
            <Input
              name={"defense"}
              value={formData.defense}
              handleChange={handleChange}
              type={"number"}
              id={"defense"}
              max={150}
              min={0}
            />{" "}
            {errors.defense && (
              <span className={errorMessageStyle}>{errors.defense}</span>
            )}
            <Input
              name={"attack"}
              value={formData.attack}
              handleChange={handleChange}
              type={"number"}
              id={"attack"}
              max={150}
              min={0}
            />{" "}
            {errors.attack && (
              <span className={errorMessageStyle}>{errors.attack}</span>
            )}
            <Input
              name={"height"}
              value={formData.height}
              handleChange={handleChange}
              type={"number"}
              id={"height"}
              max={150}
              min={0}
            />{" "}
            {errors.height && (
              <span className={errorMessageStyle}>{errors.height}</span>
            )}
            <Input
              name={"weight"}
              value={formData.weight}
              handleChange={handleChange}
              type={"number"}
              id={"weight"}
              max={150}
              min={0}
            />{" "}
            {errors.weight && (
              <span className={errorMessageStyle}>{errors.weight}</span>
            )}
            <Input
              name={"image"}
              value={formData.image}
              handleChange={handleChange}
              type={"text"}
              id={"image"}
              placeholder={"Paste image URL"}
            />{" "}
            {errors.image && (
              <span className={errorMessageStyle}>{errors.image}</span>
            )}
            <div className=" flex flex-row justify-center items-center">
              <button
                className=" bg-blue-600 hover:bg-blue-400 w-full rounded-xl place-items-center p-2 active:bg-yellow-500 text-center cursor-pointer text-white"
                type="submit"
              >
                Submit
              </button>
            </div>{" "}
          </div>
          <div>
            <PreviewCreate
              name={formData.name}
              speed={formData.speed}
              life={formData.life}
              attack={formData.attack}
              defense={formData.defense}
              height={formData.height}
              weight={formData.weight}
              type={formData.type}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default FullClientPokemonForm;
