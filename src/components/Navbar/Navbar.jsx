import React, { useEffect, useState } from "react";
import { handleResize } from "../utils/handleResize";

export const Navbar = () => {
  const { isMobile } = handleResize();
  return (
    <div className="w-full">
      {" "}
      {/* Navbar para pantallas grandes */}{" "}
      <div className="text-white hidden md:block transition delay-150 duration-300 ease-in-out bg-red-400 w-full p-4">
        {" "}
        Navbar{" "}
      </div>{" "}
      {/* Navbar para dispositivos móviles */}{" "}
      <div
        className={`text-cyan-300 md:hidden fixed bottom-0 w-full bg-red-400 p-4`}
      >
        {" "}
        navbar mobile{" "}
      </div>{" "}
    </div>
  );
};
