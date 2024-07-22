import React from "react";
import GamesSidebar from "../ui/gamesSidebar";

function layout({ children }) {
  return (
    <div className=" flex flex-col lg:flex-row bg-gradient-to-b from-blue-500 to-white ">
      <GamesSidebar />
      {children}
    </div>
  );
}

export default layout;
