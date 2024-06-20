/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
function PlayerComp({
  currentPlayer,
  image,
  pokemon,
  pokemons,
  player,
  assignPokemonToPlayer,
}) {
  const [assignedPlayer, setAssignedPlayer] = useState({
    pokemon: "",
    image: "",
    player: "",
  });

  const [open, setOpen] = useState(true);

  // console.log(player, currentPlayer);
  const handleChoosePokemon = (pokemon, image) => {
    // console.log(name);
    setAssignedPlayer({ ...assignedPlayer, pokemon: pokemon, image: image });
    setOpen(false);
    // console.log(name, image, player);
    assignPokemonToPlayer(pokemon, image, player);
  };

  // & refactor the change in color for later
  // console.log("player", player, "currentPlayer", currentPlayer);
  const isPlayerOne = currentPlayer === player;
  const className = `h-10 w-28 flex rounded-xl justify-center items-center ${
    isPlayerOne ? "bg-white " : "bg-red-300 text-red-200"
  }`;

  return (
    <div className=" flex flex-col items-center gap-4 ">
      {" "}
      {/* player component start */}
      <div className=" flex flex-col items-center bg-red-500 w-40 h-40 rounded-xl p-3 justify-around">
        <div className={className}>
          <p>{player}</p>
        </div>
        <div className={className}>
          <p>{assignedPlayer.pokemon}</p>
        </div>
        <div
          className=" flex flex-col items-center justify-center w-24 h-24  border-2 border-yellow-50 rounded-xl p-2 
      "
        >
          <p className=" capitalize ">{pokemon}</p>

          <img
            src={assignedPlayer.image}
            className=" max-w-full max-h-full object-cover"
            alt=""
          />
        </div>
      </div>
      {open && (
        <ul
          className="grid grid-cols-2 grid-rows-10 w-full gap-2
     border-2 border-blue-600 p-4 rounded-xl "
        >
          {pokemons.map((p, i) => (
            <li
              key={i}
              className="w-16 h-16 bg-white shadow-md rounded p-2 justify-center flex flex-col items-center hover:bg-yellow-400 cursor-pointer"
              onClick={() => {
                handleChoosePokemon(p.name, p.image);
              }}
              name={p.name}
            >
              <img
                src={p.image}
                alt={p.name}
                className=" max-w-full max-h-full object-cover"
                // name={pokemon}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PlayerComp;
