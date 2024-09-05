export default function PreviewCreate({ formData }) {
  const itemContainerStyle =
    "flex flex-row gap-2 justify-between items-center ";
  const itemStyle =
    "  text-white  bg-green-400 h-5 w-1/2 rounded-md flex justify-center items-center";
  return (
    <div className=" flex flex-col justify-between bg-green-200 shadow-xl h-full  p-4  w-72 rounded-xl">
      <div className="  rounded-lg p-4 bg-green-300  shadow-sm h-52 w-full ">
        {formData.image === "" ? (
          ""
        ) : (
          <img
            src={formData.image}
            alt={formData.name}
            className="h-full w-full object-cover rounded-lg"
            height={40}
            weight={40}
          />
        )}
      </div>
      <div className=" gap-2 flex flex-col justify-between h-full mt-6">
        <div className="flex flex-row  justify-between items-center">
          <div>Name</div>
          <div className="  text-white  bg-green-400 h-5 w-1/2 rounded-md flex  justify-center items-center">
            {formData.name}
          </div>
        </div>{" "}
        <div className={itemContainerStyle}>
          <div>Type</div>
          <div className={itemStyle}>{formData.type}</div>
        </div>{" "}
        <div className={itemContainerStyle}>
          <div>Life</div>
          <div className={itemStyle}>{formData.life}</div>
        </div>
        <div className={itemContainerStyle}>
          <div>Speed</div>

          <div className={itemStyle}>{formData.speed}</div>
        </div>{" "}
        <div className={itemContainerStyle}>
          <div>Defense</div>
          <div className={itemStyle}>{formData.defense}</div>
        </div>
        <div className={itemContainerStyle}>
          <div>Attack</div>
          <div className={itemStyle}>{formData.attack}</div>
        </div>{" "}
        <div className={itemContainerStyle}>
          <div>Height</div>
          <div className={itemStyle}>{formData.height}</div>
        </div>
        <div className={itemContainerStyle}>
          <div>Weight</div>
          <div className={itemStyle}>{formData.weight}</div>
        </div>
      </div>
    </div>
  );
}
