import Image from "next/image";
import Link from "next/link";
import { calculateZeros } from "../lib/calculateZeros";
function Card({ name, image, type, number, id }) {
  for (const iterator of type) {
    // console.log(iterator);
  }
  // console.log(name, Object.entries(type));
  // const types = type.map((e) => e);

  return (
    <div className=" flex flex-col items-center rounded-lg border-solid border-2 border-orange-600   bg-yellow-300 p-2 gap-2">
      <div className="  h-54 ">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className=" h-48  p-4 bg-gray-300 rounded-lg "
        />
      </div>
      <div className="flex flex-row justify-between w-full  ">
        <div className=" flex flex-col  w-full  h-20 gap-2">
          <div className=" bg-yellow-200 pl-2">
            <h3>N.°{calculateZeros(number)}</h3>
          </div>
          <div className=" flex flex-row justify-between w-full h-20  pl-2 pr-2 ">
            <div className=" ">
              <p className="capitalize font-bold ">{name}</p>
            </div>
            <div className="">
              <ul className="flex flex-col capitalize items-center">
                {type?.map((e, i) => (
                  <li key={i}>
                    <h3>{e}</h3>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-end ">
        <Link href={`/pokedex/${id}`}>
          <h3 className=" font-bold ">More +</h3>
        </Link>
      </div>
    </div>
  );
}

export default Card;
