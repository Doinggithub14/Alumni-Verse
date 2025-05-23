import Link from "next/link";
import React from "react";
//import Spline from "@splinetool/react-spline/next";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Welcome to Alumniverse
        </h1>

        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Lets connect,collaborate and create!
        </p>
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
            <Link href={"/networkinghub"}>Explore</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
