import Image from "next/image";
import Link from "next/link";

function Card({ name, image, type, number }) {
  // console.log(typeof id);

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
      <div className="flex flex-row justify-between w-full p-4  h-full">
        <div className=" flex flex-col justify-between ">
          <h3>N.°{number}</h3>
          <h2>
            <p>{name}</p>
          </h2>
        </div>
        <div className="  ">
          <ul className="flex flex-col gap-3">
            {type?.map((e, i) => (
              <li key={i}>
                <h3>{e}</h3>
              </li>
            ))}
          </ul>
        </div>
        {/* <Link to={`/pokemons/${id}`}>
          <h3>More +</h3>
        </Link> */}
      </div>
    </div>
  );
}

export default Card;
