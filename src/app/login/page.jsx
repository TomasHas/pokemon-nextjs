"use client";
import { useEffect, useState } from "react";

import LoginForm from "./LoginForm";
export default function Page() {
  const [open, setOpen] = useState(false);
  // console.log(open);
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div className=" h-screen flex flex-col items-center justify-center bg-gray-500 ">
      <div className="  ">
        <LoginForm />
      </div>
    </div>
  );
}

// export default function Page() {
//   const [open, setOpen] = useState(false);
//   // console.log(open);
//   const handleClick = (e) => {
//     e.preventDefault();
//     setOpen(!open);
//   };

//   return (
//     <div className="relative  ">
//       <div>
//         <button className="   cursor-pointer " onClick={handleClick}>
//           Log in
//         </button>
//       </div>
//       {open && (
//         <div
//           className=" absolute right-0 z-10
//          object-center h-80 w-80 mt-4"
//         >
//           <div className="">
//             {" "}
//             <LoginForm />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
//
