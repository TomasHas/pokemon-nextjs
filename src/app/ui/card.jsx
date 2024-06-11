import Image from "next/image";
import Link from "next/link";
import { calculateZeros } from "../lib/calculateZeros";
import { colorType } from "../lib/utils";
function Card({ name, image, type, number, id }) {
  for (const iterator of type) {
    // console.log(iterator);
  }
  // console.log(name, Object.entries(type));
  // const types = type.map((e) => e);

  return (
    <div className="  h-fit w-56 flex flex-col items-center rounded-lg border-solid border-2   bg-white p-2 gap-2   hover:border-red-500  transform hover:-translate-y-2 duration-200">
      <div className=" ">
        <Link href={`/pokedex/${id}`}>
          <img
            src={image}
            alt={name}
            width={500}
            height={500}
            className=" h-48  p-4 bg-yellow-200 rounded-lg "
          />{" "}
        </Link>
      </div>
      <div className="flex flex-row justify-between w-full  ">
        <div className=" flex flex-col  w-full  h-20 gap-2">
          <div className="text-center bg-yellow-200 pl-2 lg:text-start ">
            <h3>N.°{calculateZeros(number)}</h3>
          </div>
          <div className=" flex flex-col justify-between w-full h-20  pl-2 pr-2 lg:flex-row ">
            <div className=" ">
              <p className="capitalize font-bold text-center lg:text-start">
                {name}
              </p>
            </div>
            <div className="">
              <ul className="flex flex-row lg:flex-col justify-center mt-1 items-center gap-1 ">
                {type?.map((e, i) => (
                  <li key={i}>
                    <h3 className=" text-white w-20 text-center">
                      {colorType(e)}
                    </h3>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-end "></div>
    </div>
  );
}

export default Card;
