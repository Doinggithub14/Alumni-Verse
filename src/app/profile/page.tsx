"use client";
import axios from "axios";
//import Link from "next/link";
import React from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful!");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);

      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black text-white mt-10">
      <h1 className="text-3xl font-bold text-purple-500">Profile</h1>
      <hr className="border-purple-700 my-2 w-1/2" />
      <p className="text-gray-300 mt-10">This is user profile page</p>
      <hr className="border-purple-700 my-2 w-1/2" />
      <button
        onClick={logout}
        className="bg-purple-600 hover:bg-purple-800 mt-4 text-white font-bold py-2 px-4 rounded transition-all"
      >
        Logout
      </button>

      {/* 👇 Additional Profile Card UI 👇 */}
      <div className="mt-10 bg-black text-white rounded-2xl shadow-lg border border-purple-800 p-6 w-[90vw] sm:w-[70vw] md:w-[50vw]">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            className="w-32 h-32 rounded-full object-cover border-4 border-purple-600"
          />
          <div>
            <h2 className="text-2xl font-bold text-purple-400">Divya Sharma</h2>
            <p className="text-sm text-gray-300">Software Developer at Infosys</p>
            <p className="text-sm text-purple-300 italic">Class of 2022 | B.Tech CSE</p>
            <div className="mt-2 text-sm text-gray-400">📍 Bangalore, India</div>
            <div className="mt-3">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded-full text-sm transition-all">
                View LinkedIn
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-purple-700 pt-4">
          <h3 className="font-semibold text-lg text-purple-400 mb-2">
            About Me
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Passionate developer and proud alumni of XYZ University. I love helping
            juniors grow, and I'm always open to new challenges and collaborations.
          </p>
        </div>
      </div>
    </div>
  );
}
