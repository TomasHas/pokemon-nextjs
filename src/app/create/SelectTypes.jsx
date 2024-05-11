"use client";
import { useEffect, useState } from "react";
import { getTypes } from "../lib/db.js";

function SelectTypes() {
  const [types, setTypes] = useState([]);

  const [selectedTypes, setselectedTypes] = useState([]);

  useEffect(() => {
    const getAllTypes = async () => {
      const allTypes = await getTypes();
      console.log("allTypes", allTypes);
      setTypes(allTypes);
    };
    getAllTypes();
  }, []);

  const handleSelectTypes = (e) => {
    e.preventDefault();
    setselectedTypes(e.target.value);
  };
  console.log(selectedTypes);
  return (
    <div>
      <label className=" capitalize" htmlFor="type">
        type
      </label>
      <select name="types" id="types">
        {types.map((t) => (
          <option value={t} key={t} onClick={handleSelectTypes}>
            {t}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectTypes;
