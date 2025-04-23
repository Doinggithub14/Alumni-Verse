"use client";
import Link from "next/link";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import alumniData from "../data/alumni_info.json";

interface Alumni {
  id: 1;
  name: number;
  batch: number;
  degree: string;
  currentPosition: string;
  company: string;
  location: string;
  email: string;

  isFeatured: boolean;
}

function FeaturedAlumni() {
  const featuredAlumni = alumniData.alumni.filter(
    (alumni: Alumni) => alumni.isFeatured
  );
  return (
    <div className="py-12 ">
      <div className="text-center">
        <h2 className="text-base text-teal-500 font-semibold tracking-wide uppercase">
          MEET OUR ALUMNI
        </h2>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow"></div>
          </BackgroundGradient>
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link
          href="/networkinghub"
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          Explore
        </Link>
      </div>
    </div>
  );
}

export default FeaturedAlumni;
