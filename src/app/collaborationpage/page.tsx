"use client";
import { useState } from "react";

export default function CollaborationPage() {
  const [collabs] = useState([
    {
      id: 1,
      title: "AI-Powered Crop Monitoring",
      owner: "Ravi Sharma (Batch 2017)",
      description:
        "Looking for a frontend dev and ML engineer to join this precision agriculture startup idea.",
      tags: ["AI", "Agritech", "React", "Python"],
    },
    {
      id: 2,
      title: "Climate Change Impact Research",
      owner: "Dr. Nidhi Rao (Batch 2010)",
      description:
        "Need data analysts and researchers to collaborate on UN-funded climate research.",
      tags: ["Research", "Sustainability", "Data Science"],
    },
    {
      id: 3,
      title: "Mental Health App for Students",
      owner: "Sana Khan (Batch 2021)",
      description:
        "Seeking UI/UX designers and content creators passionate about mental wellness.",
      tags: ["Design", "Wellbeing", "Mobile App"],
    },
  ]);

  return (
    <div className="bg-black text-white min-h-screen mt-10 py-16 px-6">
      <h1 className="text-5xl font-bold text-center text-purple-400 mb-4">
        🤝 Collaboration Hub
      </h1>
      <p className="text-center text-neutral-300 max-w-xl mx-auto mb-10">
        Discover and join exciting alumni-led projects, or pitch your own and
        find passionate collaborators from our global alumni network.
      </p>

      {/* Featured Collaborations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        {collabs.map((c) => (
          <div
            key={c.id}
            className="bg-gray-900 border border-purple-700 rounded-xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold text-purple-300 mb-1">
              {c.title}
            </h3>
            <p className="text-sm text-gray-400 mb-3 italic">{c.owner}</p>
            <p className="text-gray-300 mb-4 text-sm">{c.description}</p>
            <div className="flex flex-wrap gap-2">
              {c.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-purple-700 text-xs text-white px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Submit Idea Section */}
      <section className="bg-gradient-to-r from-purple-950 to-black py-12 px-6 rounded-xl max-w-4xl mx-auto border border-purple-700">
        <h2 className="text-3xl font-bold text-purple-300 mb-4 text-center">
          🚀 Submit Your Collaboration Idea
        </h2>
        <p className="text-center text-gray-400 mb-8 text-sm">
          Got an idea? Share it here and we will feature it for others to
          discover.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Project Title"
            className="w-full p-3 rounded-xl bg-gray-800 border border-purple-600 text-white placeholder-gray-400"
          />
          <textarea
            placeholder="Short project description..."
            className="w-full p-3 rounded-xl bg-gray-800 border border-purple-600 text-white placeholder-gray-400 h-28"
          />
          <input
            type="text"
            placeholder="Skills Needed (comma separated)"
            className="w-full p-3 rounded-xl bg-gray-800 border border-purple-600 text-white placeholder-gray-400"
          />
          <button
            type="button"
            className="bg-purple-700 hover:bg-purple-600 px-6 py-3 rounded-full font-semibold text-white w-full transition"
          >
            Coming Soon 🔒
          </button>
        </form>
      </section>
    </div>
  );
}
