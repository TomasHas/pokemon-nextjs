export default function Input({
  name,
  value,
  handleChange,
  type,
  max,
  min,
  placeholder,
}) {
  if (type === "text") {
    return (
      <div className="flex  flex-col w-full  ">
        <div className="flex flex-row justify-between items-center">
          <label className=" capitalize w-24" htmlFor={name}>
            {name}
          </label>
          <input
            className=" rounded-md w-2/3 h-8 p-2 hover:border-yellow-500 border-2  text-center"
            name={name}
            value={value}
            type={type}
            onChange={handleChange}
            id={name}
            placeholder={placeholder}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex  flex-row w-full justify-between ">
        <label className=" capitalize w-24" htmlFor={name}>
          {name}
        </label>{" "}
        <div className="flex flex-row w-2/3 justify-between items-center ">
          <input
            className=" rounded-md h-8 p-2 hover:border-yellow-500 border-2  w-32 text-center"
            name={name}
            value={value}
            type={type}
            onChange={handleChange}
            id={name}
            placeholder={placeholder}
            max={max}
            min={min}
          />{" "}
          <p className="flex text-gray-400  w-16 items-center justify-end">
            /{`${max}`}
          </p>
        </div>
      </div>
    );
  }
}
