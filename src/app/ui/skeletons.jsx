import { Tillana } from "next/font/google";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl w-56 p-2 shadow-sm bg-gray-300`}
    >
      {" "}
      <div
        className="flex items-center justify-center h-48
       rounded-xl bg-gray-200 px-4 py-8"
      ></div>
      <div className="flex mt-2 flex-col gap-2 items-start justify-start">
        {" "}
        <div className="h-7 w-20 rounded-md bg-gray-200" />
        <div className="h-7 w-20 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <div>
      <div className="container  grid   grid-cols-1 lg:grid-cols-4   gap-3   md:grid-cols-2 ">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}

export function CreateSkeleton() {
  const input = "rounded-md h-8 w-48 bg-gray-300  ";
  const previewInput = "rounded-md h-4 w-28 bg-gray-200  ";
  return (
    <div
      className={`${shimmer} relative overflow-hidden md:w-3/4  p-2 shadow-sm bg-gray-300 mt-10`}
    >
      <div
        className="flex flex-col lg:flex-row justify-end gap-4
      "
      >
        <div className=" flex flex-col bg-gray-200 p-4  gap-2 justify-between">
          <div className="flex flex-col justify-between items-end w-full gap-2">
            <div className={input}></div>
            <div className={input}></div>
            <div className={input}></div>
            <div className={input}></div>
            <div className={input}></div>
            <div className={input}></div>
            <div className={input}></div>
            <div className={input}></div>{" "}
          </div>{" "}
          <div className="rounded-md h-8  bg-gray-300  "></div>
        </div>
        <div className=" w-96 flex flex-row justify-center lg:justify-end ">
          <div className=" flex flex-col justify-between items-end  gap-3">
            <div className="h-40 w-56 bg-gray-200 rounded-xl "></div>
            <div className={previewInput}></div>
            <div className={previewInput}></div>
            <div className={previewInput}></div>
            <div className={previewInput}></div>
            <div className={previewInput}></div>
            <div className={previewInput}></div>
            <div className={previewInput}></div>
            <div className={previewInput}></div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export function IdSkeleton() {
  const input = "rounded-xl h-6 w-60 bg-gray-300  ";
  const titles = " rounded-lg h-10 w-32 bg-gray-200 ";
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl  p-2 shadow-sm bg-gray-300 mt-10`}
    >
      <div className="flex flex-col justify-center  gap-4 ">
        {" "}
        <div
          className="  flex flex-col gap-1   items-center lg:flex-row justify-between  
        "
        >
          <div className={titles}></div>
          <div className={titles}></div>
          <div className={titles}></div>
        </div>
        <div>
          <div className=" flex flex-col items-centerlg:flex-row bg-gray-200 p-4  gap-8 justify-between">
            <div className=" w-72 h-72 rounded-xl bg-gray-300"></div>

            <div className="flex flex-col  items-center gap-4">
              <div className={input}></div>
              <div className={input}></div>
              <div className={input}></div>
              <div className={input}></div>
              <div className={input}></div>
              <div className={input}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
