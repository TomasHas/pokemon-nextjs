"use client";
import { useEffect, useState } from "react";

import Form from "./Form.jsx";
import PreviewCreate from "./PreviewCreate.jsx";
import Popup from "./Popup.jsx";
function FullClientPokemonForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [id, setId] = useState(0);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    speed: "",
    life: "",
    attack: "",
    defense: "",
    height: "",
    weight: "",
    type: "",
    image: "",
  });
  const handleReset = () => {
    setFormData({
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
    setErrors({});
  };
  return (
    <div className="flex flex-row justify-around items-center w-3/4 h-[90%]">
      <div className=" h-[90%]">
        {" "}
        <Form
          formData={formData}
          setFormData={setFormData}
          setShowPopup={setShowPopup}
          handleReset={handleReset}
          setErrors={setErrors}
          errors={errors}
        />
      </div>

      <div className=" h-[90%] ">
        <PreviewCreate formData={formData} />
      </div>
      {showPopup && (
        <Popup
          formData={formData}
          setShowPopup={setShowPopup}
          id={id}
          handleReset={handleReset}
        />
      )}
    </div>
  );
}

export default FullClientPokemonForm;
