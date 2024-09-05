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
  const typeColor = (e) => {
    return colorType(e);
  };
  return (
    <div className="  h-fit w-56 flex flex-col items-center rounded-lg  shadow-xl  bg-white p-2 gap-2   hover:border-red-500  transform hover:-translate-y-2 duration-200 ">
      <div className=" ">
        <Link href={`/pokedex/${id}`}>
          {image ? (
            <img
              src={image}
              alt={name}
              width={500}
              height={500}
              className=" h-48 w-48 p-4 bg-gray-200 rounded-lg hover:bg-red-400"
            />
          ) : (
            ""
          )}
        </Link>
      </div>
      <div className="flex flex-row justify-between w-full  ">
        <div className=" flex flex-col  w-full  h-20 gap-2">
          <div className="text-center bg-gray-300 pl-2 lg:text-start  font-bold">
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
                      <p
                        className={`${typeColor(
                          e
                        )} rounded-lg pl-2 pr-2 capitalize text-white`}
                      >
                        {e}
                      </p>
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
