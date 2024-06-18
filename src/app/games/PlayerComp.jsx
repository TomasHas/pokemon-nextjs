function PlayerComp() {
  return (
    <div>
      <div className=" flex flex-col items-center ">
        <div className=" flex flex-row">
          <div
            className={
              currentPlayer === "player_one"
                ? " h-10 w-28 text-center  bg-yellow-500"
                : "h-10 w-28 text-center  bg-gray-500"
            }
          >
            <p>player one</p>
          </div>
          <div>
            <p className=" capitalize">{playerOne.name.name}</p>
            <img
              src={playerOne?.image.image}
              alt={playerOne.name.name}
              height={50}
              width={50}
            />
          </div>
        </div>
        <ul
          className="grid grid-cols-4 grid-rows-5 w-full gap-2
            "
        >
          {pokemons.map((p) => (
            <li
              key={p.name}
              className="w-16 h-16 bg-white shadow-md rounded p-4 flex flex-col items-center hover:bg-yellow-400 cursor-pointer"
              onClick={() => {
                handleChoosePokemon(p.name, p.image);
              }}
              name={p.name}
            >
              <img
                src={p.image}
                alt={p.name}
                className=" w-full h-full object-cover"
                name={p.name}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PlayerComp;
