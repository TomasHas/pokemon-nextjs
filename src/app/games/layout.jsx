import React from "react";
import GamesSidebar from "../ui/gamesSidebar";

function layout({ children }) {
  return (
    <div className=" flex flex-row">
      <GamesSidebar />
      {children}
    </div>
  );
}

export default layout;
