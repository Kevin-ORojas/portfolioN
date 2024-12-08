import { useEffect, useState } from "react";
import { AboutMe } from "../About/AboutMe";
import { Navbar } from "../Navbar/Navbar";

export const Home = () => {
  return (
    <div className="px-4 bg-gradient-to-b from-black to-slate-500 w-full min-h-screen ">
      <div>
        <Navbar />
        <div className="">
          <h1>Hola, soy Kevin Rojas, </h1>
          <p className=" bottom-0">
            un desarrollador frontend, creacion de interfaces web dinamicas y
            intuitivas
          </p>
          <p>
            nissimos totam, laudantium nulla dolores nam reiciendis vitae, dicta
            cum nemo Cupiditat doloremque, at dignissimos reic quasi. Omnis
            Debitis. Doloremque volu architecto!
          </p>
          <div className="text-white">
            <a href="">BUTTON</a>
            <a href="">BUTTON</a>
          </div>
          <AboutMe />
        </div>
      </div>
    </div>
  );
};
