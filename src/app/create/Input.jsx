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
          <label className=" capitalize " htmlFor={name}>
            {name}
          </label>
          <input
            className=" rounded-md h-8 p-2 hover:border-yellow-500 border-2  w-1/2 text-center"
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
      <div className="flex  flex-col w-full  ">
        <div className="flex flex-row justify-between items-center">
          <label className=" capitalize " htmlFor={name}>
            {name}
          </label>
          <input
            className=" rounded-md h-8 p-2 hover:border-yellow-500 border-2  w-1/2 text-center"
            name={name}
            value={value}
            type={type}
            onChange={handleChange}
            id={name}
            placeholder={placeholder}
            max={max}
            min={min}
          />
        </div>
      </div>
    );
  }
}
