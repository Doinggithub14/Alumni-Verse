'use client';
import { useState } from 'react';
import alumniData from '@/data/alumni_info.json';
import Image from 'next/image';

interface Alumni {
  id: number;
  name: string;
  batch: string;
  degree: string;
  currentPosition: string;
  company: string;
  location: string;
  email: string;
  image: string;
  isFeatured: boolean;
}

export default function AlumniDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('All');

  const years = Array.from(new Set(alumniData.alumni.map((a: Alumni) => a.batch)));

  const filteredAlumni = alumniData.alumni.filter((alumnus: Alumni) =>
    (selectedYear === 'All' || alumnus.batch === selectedYear) &&
    alumnus.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-black text-white py-16 mt-10 px-6">
      <h2 className="text-4xl font-bold text-center text-purple-400 mb-10">
        🎓 Alumni Directory
      </h2>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto gap-4 mb-10">
        <input
          type="text"
          placeholder="Search by name or role..."
          className="w-full md:w-2/3 p-3 rounded-xl bg-gray-900 text-white border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <select
          className="w-full md:w-1/3 p-3 rounded-xl bg-gray-900 text-white border border-purple-600 focus:outline-none"
          value={selectedYear}
          onChange={e => setSelectedYear(e.target.value)}
        >
          <option value="All">All Years</option>
          {years.map((year: string) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      {/* Alumni Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredAlumni.map((alumnus: Alumni) => (
          <div
            key={alumnus.id}
            className="bg-gray-900 rounded-2xl shadow-lg p-6 hover:shadow-purple-500/40 border border-purple-800 transition-all duration-300"
          >
            <Image
              src={alumnus.image}
              alt={alumnus.name}
              width={400}
              height={300}
              className="rounded-xl mb-4 w-full object-cover h-48"
            />
            <h3 className="text-xl font-bold text-purple-400">{alumnus.name}</h3>
            <p className="text-sm text-gray-300">{alumnus.currentPosition}</p>
            <p className="text-sm text-gray-400 italic">Class of {alumnus.batch}</p>

            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <button className="px-4 py-2 bg-purple-700 hover:bg-purple-600 rounded-full text-white text-sm font-semibold transition-all">
                View Profile
              </button>

              <button
                disabled
                className="px-4 py-2 bg-blue-700 hover:bg-blue-600 rounded-full text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-not-allowed"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.852-3.037-1.853 0-2.136 1.448-2.136 2.942v5.664H9.352V9h3.414v1.561h.049c.476-.898 1.637-1.848 3.368-1.848 3.6 0 4.267 2.368 4.267 5.451v6.288zM5.337 7.433c-1.144 0-2.07-.928-2.07-2.071 0-1.144.927-2.071 2.07-2.071 1.143 0 2.07.927 2.07 2.071 0 1.143-.927 2.071-2.07 2.071zm1.778 13.019H3.559V9h3.556v11.452z" />
                </svg>
                LinkedIn
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
