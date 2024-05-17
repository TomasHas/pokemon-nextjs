import { CardsSkeleton } from "@/app/ui/skeletons";

export default function Loading() {
  return (
    <div className=" flex flex-row justify-center items-center h-screen">
      <CardsSkeleton />
    </div>
  );
}
