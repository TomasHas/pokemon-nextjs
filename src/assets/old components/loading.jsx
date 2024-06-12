import { CreateSkeleton } from "@/app/ui/skeletons";

export default function Loading() {
  return (
    <div className=" flex  flex-col items-center justify-center p-4">
      <CreateSkeleton />
    </div>
  );
}
