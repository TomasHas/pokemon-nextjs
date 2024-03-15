// "use client";
// import { getTypes } from "../lib/db";
// export default async function filterType() {
//   const types = await getTypes();
//   console.log(types);
//   const handleClick = (e) => {
//     e.preventDefault();
//     return;
//   };
//   return (
//     <div className=" flex flex-col w-fit p-4 bg bg-yellow-300 ">
//       <div>
//         {" "}
//         <button onClick={handleClick}>Filter by Type</button>
//       </div>

//       <div className="relative w-full">
//         {" "}
//         <ul className=" absolute w-full p-4 bg-yellow-300 rounded-lg">
//           {types.map((t, index) => (
//             <li
//               className=" text-blue.400
//             "
//               key={index}
//             >
//               {t}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
