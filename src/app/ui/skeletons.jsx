const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl  p-2 shadow-sm bg-gray-300`}
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
    <>
      <div
        className=" grid w-screen grid-cols-4  container   rounded-xl mt-4 mb-4 gap-4  min-h-screen  
      p-4 overflow-hidden "
      >
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </>
  );
}

export function CreateSkeleton() {
  const input = "rounded-md h-8 w-48 bg-gray-300  ";
  return (
    <div className="flex flex-row w-3/4 h-96 ">
      <div className=" flex flex-col bg-gray-200 p-4 w-1/2 gap-2 justify-between">
        <div className="rounded-md h-8  bg-gray-300 "></div>

        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col gap-2">
            <div className={input}></div>
            <div className={input}></div>
            <div className={input}></div>
            <div className={input}></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className={input}></div>
            <div className={input}></div>
            <div className={input}></div>
            <div className={input}></div>
          </div>
        </div>
        <div className="rounded-md h-8  bg-gray-300 "></div>
        <div className="rounded-md h-8  bg-gray-300 "></div>
      </div>
      <div className=" w-1/2 bg-gray-400"></div>
    </div>
  );
}
