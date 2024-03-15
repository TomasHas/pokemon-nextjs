import { CardsSkeleton } from "@/app/ui/skeletons";

function Page() {
  return (
    <div className=" flex min-h-screen flex-col items-center justify-between p-4 overflow-hidden">
      Form Loading...
      <CardsSkeleton />
    </div>
  );
}

export default Page;
