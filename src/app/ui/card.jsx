import Image from "next/image";
import Link from "next/link";

function Card({ name, image, type, number, id }) {
  for (const iterator of type) {
    console.log(iterator);
  }
  console.log(name, Object.entries(type));
  // const types = type.map((e) => e);

  return (
    <div className=" flex flex-col items-center rounded-lg border-solid border-2 border-orange-600  ">
      <div className="  h-54 ">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className=" h-48 w-46 p-4"
        />
      </div>
      <div className="flex flex-row justify-between w-full p-4  h-full ">
        <div className="flex flex-row">
          <div className=" flex flex-col justify-between ">
            <h3>N.°{number}</h3>
            <h2>
              <p className="capitalize">{name}</p>
            </h2>{" "}
            <div className="h-10 w-30 bg-pink-600  ">
              <ul className="flex flex-col gap-3 ">
                {type?.map((e, i) => (
                  <li key={i}>
                    <h3>{e}</h3>
                  </li>
                ))}
              </ul>
            </div>
          </div>{" "}
        </div>

        <div className=" flex flex-col justify-end ">
          <Link href={`/pokedex/${id}`}>
            <h3 className=" font-bold ">More +</h3>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}

export default Card;
