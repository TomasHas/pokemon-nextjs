import TicTacToe from "./TicTacToe";
import React, { Suspense } from "react";
import Loading from "./loading";
export default function Page() {
  return (
    <div>
      <h1>Games</h1>
      <Suspense fallback={<Loading />}>
        {" "}
        <TicTacToe />
      </Suspense>
    </div>
  );
}
