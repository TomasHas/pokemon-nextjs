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
