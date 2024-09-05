"use client";
import { createPokemon } from "../lib/actions.js";
import { getTypes, getTypesCount, getPokemonCount } from "../lib/db.js";
import SelectTypes from "./SelectTypes.jsx";
import Input from "./Input.jsx";
import { useEffect, useState } from "react";
export default function Form({
  formData,
  setFormData,
  setShowPopup,
  handleReset,
  setErrors,
  errors,
}) {
  const [isDisabled, setIsDisabled] = useState(true);

  const allPropertiesChanged = () => {
    return (
      formData.name !== "" &&
      formData.life !== 0 &&
      formData.attack !== 0 &&
      formData.defense !== 0 &&
      formData.weight !== 0 &&
      formData.height !== 0 &&
      formData.speed !== 0 &&
      formData.image !== "" &&
      formData.type !== ""
    );
  };
  useEffect(() => {
    if (allPropertiesChanged()) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formData]);

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
      if (data.speed < 0 || data.speed > 100) {
        errors.life = "Life between 0 and 100";
      }
      errors.life = "Life value is required";
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
        errors.image = "must have jpg/jpeg/png/gif/bmp/webp format";
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
      const result = await createPokemon(formData);
      if (result) {
        setShowPopup(true);
        console.log("result", result);
      }
    } else {
      console.log(`Form submission failed
       due to validation errors.`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("handlechange", value);
    setErrors(validateForm({ ...formData, [name]: value }));

    if (`!errors.${name}`) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  // console.log("formData.length", formData.type.length);

  const handleSelectChange = (value) => {
    // console.log("handletypes", value);
    // setelectedTypes(e.target.value);

    setFormData({ ...formData, ["type"]: value });
  };

  // console.log(errors);
  // console.log(formData);
  const inputStyle =
    "flex flex-row rounded-md h-8 p-2 hover:border-yellow-500 border-2 text-center w-14";
  const errorMessageStyle = " text-red-500 text-xs bg-white";

  // const inputContainerStyle = "flex  flex-col justify-between";
  // console.log(formData.type);
  return (
    <form
      className="flex flex-col justify-between h-full w-96 p-6 bg-white rounded-xl shadow-xl"
      onSubmit={handleSubmit}
    >
      <div>
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
      </div>
      <div>
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
        )}{" "}
      </div>
      <div>
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
        )}{" "}
      </div>
      <div>
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
        )}{" "}
      </div>
      <div>
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
        )}{" "}
      </div>
      <div>
        <Input
          name={"height"}
          value={formData.height}
          handleChange={handleChange}
          type={"number"}
          id={"height"}
          max={2000}
          min={0}
        />{" "}
        {errors.height && (
          <span className={errorMessageStyle}>{errors.height}</span>
        )}{" "}
      </div>
      <div>
        <Input
          name={"weight"}
          value={formData.weight}
          handleChange={handleChange}
          type={"number"}
          id={"weight"}
          max={5000}
          min={0}
        />{" "}
        {errors.weight && (
          <span className={errorMessageStyle}>{errors.weight}</span>
        )}{" "}
      </div>
      <div className="flex ">
        <SelectTypes handleChange={handleSelectChange} />
      </div>
      <div>
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
        )}{" "}
      </div>
      <div className=" gap-2 flex flex-row justify-center items-center">
        <button
          disabled={isDisabled}
          className={`w-full rounded-xl place-items-center p-2 text-center text-white cursor-pointer ${
            isDisabled
              ? "bg-gray-300 cursor-not-allowed" // Disabled state classes
              : "bg-green-400 hover:bg-green-500 active:bg-green-600" // Enabled state classes
          }`}
          type="submit"
        >
          Submit
        </button>
        <button
          onClick={handleReset}
          className="capitalize bg-red-500 text-white rounded-xl p-2"
        >
          reset
        </button>
      </div>{" "}
    </form>
  );
}
