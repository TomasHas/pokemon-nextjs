"use client";

import { useState } from "react";
import { createUser } from "../lib/actions";

import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/app/lib/actions";

export default function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setUserEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setUserPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("subimt");
    await createUser(userEmail, userPassword);
  };

  console.log(userEmail, userPassword);
  return (
    <div className="   bg-slate-200 rounded-lg p-10">
      <form
        action={dispatch}
        className=" flex flex-col items-center rounded-lg  "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col p-2 gap-2">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={userEmail}
            name="email"
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            value={userPassword}
            name="password"
            onChange={handleChange}
          />
        </div>

        <button type="submit">Log in</button>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
        <br />
        {/* <div className=" items-center">---- OR ----</div> */}

        <div></div>
      </form>
    </div>
  );
}
