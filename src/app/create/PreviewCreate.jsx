export default function PreviewCreate({
  name,
  speed,
  type,
  life,
  attack,
  defense,
  height,
  weight,
  image,
}) {
  const itemContainerStyle = "flex flex-row gap-2 justify-between items-center";
  const itemStyle =
    "  text-white  bg-slate-400 h-5 w-1/2 rounded-md flex justify-center items-center";
  return (
    <div className="  bg-gray-200 shadow-xl rounded-xlg p-4 h-full w-60 rounded-xl">
      <div className=" rounded-lg p-4 bg-gray-300  shadow-sm h-36 w-full ">
        <img src={image} alt={name} height={40} weight={40} />
      </div>
      <div className=" gap-2 flex flex-col mt-4">
        <div className="flex flex-row  justify-between items-center">
          <div>Name</div>
          <div className="  text-white  bg-slate-400 h-5 w-1/2 rounded-md flex  justify-center items-center">
            {name}
          </div>
        </div>{" "}
        <div className={itemContainerStyle}>
          <div>Type</div>
          <div className={itemStyle}>{type}</div>
        </div>{" "}
        <div className={itemContainerStyle}>
          <div>Life</div>
          <div className={itemStyle}>{life}</div>
        </div>
        <div className={itemContainerStyle}>
          <div>Speed</div>

          <div className={itemStyle}>{speed}</div>
        </div>{" "}
        <div className={itemContainerStyle}>
          <div>Defense</div>
          <div className={itemStyle}>{defense}</div>
        </div>
        <div className={itemContainerStyle}>
          <div>Attack</div>
          <div className={itemStyle}>{attack}</div>
        </div>
        <div className={itemContainerStyle}>
          <div>Weight</div>
          <div className={itemStyle}>{weight}</div>
        </div>
        <div className={itemContainerStyle}>
          <div>Height</div>
          <div className={itemStyle}>{height}</div>
        </div>
      </div>
    </div>
  );
}
