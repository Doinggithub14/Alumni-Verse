"use client";
import Link from "next/link";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import alumniData from "../data/alumni_info.json";

interface Alumni {
  id: number;
  name: string;
  batch: number;
  degree: string;
  currentPosition: string;
  company: string;
  location: string;
  email: string;
  isFeatured: boolean;
}

// Type definition for alumni data
interface AlumniData {
  alumni: Alumni[];
}

const alumniDataTyped: AlumniData = alumniData as unknown as AlumniData;

function FeaturedAlumni() {
  const featuredAlumni = alumniDataTyped.alumni.filter(
    (alumni: Alumni) => alumni.isFeatured
  );

  return (
    <div className="py-12">
      <div className="text-center">
        <h2 className="text-base text-teal-500 font-semibold tracking-wide uppercase">
          MEET OUR ALUMNI
        </h2>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredAlumni.map((alumni) => (
            <BackgroundGradient
              key={alumni.id}
              className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm"
            >
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                <h3 className="text-lg font-bold text-neutral-800 dark:text-white">
                  {alumni.name}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {alumni.degree} ({alumni.batch})
                </p>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {alumni.currentPosition} at {alumni.company}
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-500">
                  {alumni.location}
                </p>
              </div>
            </BackgroundGradient>
          ))}
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
