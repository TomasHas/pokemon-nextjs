"use client";
import { useEffect, useState } from "react";
import { getTypes } from "../lib/db.js";

function SelectTypes({ handleChange }) {
  // console.log(handleChange, value);

  const [types, setTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  useEffect(() => {
    const fetchTypes = async () => {
      const allTypes = await getTypes();
      setTypes(allTypes);
    };
    fetchTypes();
  }, []);

  useEffect(() => {
    handleChange(selectedTypes);
  }, [selectedTypes]);

  const handleSelectTypes = (e) => {
    // console.log("handletype value", e.target.value);

    setSelectedTypes([e.target.value]);
  };

  return (
    <div className="flex w-full flex-row justify-between items-center">
      <label className="capitalize" htmlFor="types">
        Type
      </label>
      <select
        onChange={handleSelectTypes}
        name="type"
        id="type"
        className="rounded-md h-8 capitalize hover:border-yellow-500 border-2 w-2/3 text-center"
      >
        {types?.map((type, index) => (
          <option value={type} key={index}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectTypes;
