'use client'; // required if you're using hooks in added sections

import dynamic from 'next/dynamic';
const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function Page() {
  return (
    <>
      {/* Existing Networking Hub UI (unchanged) */}
      <div className="container mx-auto p-4 h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-7xl font-bold bg-gradient-to-l from-purple-500 to-blue-900 bg-clip-text text-transparent">
              Networking Hub
            </h1>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg">
              Join thousands of alumni to network, find job opportunities, and
              relive your best moments
            </p>
          </div>

          <div className="flex justify-center items-center">
            <Spline scene="https://prod.spline.design/QRR5BER1ygtnwvhM/scene.splinecode" />
          </div>
        </div>
      </div>

      {/* ➕ Additional Features Below */}

      {/* Alumni Event Highlights */}
      <section className="bg-black text-white py-16 px-6">
        <h2 className="text-3xl font-bold text-purple-400 text-center mb-10">
          🎉 Featured Alumni Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-purple-300">Global Alumni Meetup</h3>
            <p className="text-sm text-gray-400 mt-2">📍 New York | 🗓️ June 20, 2025</p>
            <p className="mt-3 text-gray-300 text-sm">Reunite with old friends, make new connections, and celebrate alumni success stories.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-purple-300">Tech Leaders Summit</h3>
            <p className="text-sm text-gray-400 mt-2">📍 San Francisco | 🗓️ July 15, 2025</p>
            <p className="mt-3 text-gray-300 text-sm">Join alumni working in tech to share knowledge, startups, and ideas.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-purple-300">Online Career Workshop</h3>
            <p className="text-sm text-gray-400 mt-2">📍 Virtual | 🗓️ August 10, 2025</p>
            <p className="mt-3 text-gray-300 text-sm">Polish your resume, get interview tips, and access insider job referrals.</p>
          </div>
        </div>
      </section>

      {/* Job Opportunities */}
      <section className="bg-black text-white py-16 px-6 border-t border-purple-900">
        <h2 className="text-3xl font-bold text-purple-400 text-center mb-10">💼 Featured Job Openings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-900 p-5 rounded-xl">
            <h3 className="text-lg font-bold text-purple-300">Software Engineer</h3>
            <p className="text-sm text-gray-400">Google | Mountain View</p>
            <p className="mt-2 text-sm text-gray-300">Work with top tech teams to build scalable apps.</p>
          </div>
          <div className="bg-gray-900 p-5 rounded-xl">
            <h3 className="text-lg font-bold text-purple-300">Product Designer</h3>
            <p className="text-sm text-gray-400">Meta | Remote</p>
            <p className="mt-2 text-sm text-gray-300">Create intuitive user experiences for millions.</p>
          </div>
          <div className="bg-gray-900 p-5 rounded-xl">
            <h3 className="text-lg font-bold text-purple-300">AI Research Intern</h3>
            <p className="text-sm text-gray-400">OpenAI | San Francisco</p>
            <p className="mt-2 text-sm text-gray-300">Join cutting-edge AI projects and research teams.</p>
          </div>
        </div>
      </section>

      {/* Community Chat Teaser */}
      <section className="bg-gradient-to-r from-black to-purple-950 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-300 mb-4">💬 Join the Alumni Chat Forum</h2>
          <p className="text-neutral-300 mb-6">
            Connect with fellow graduates, ask questions, share stories, or get career advice in real-time.
          </p>
          <button className="bg-purple-700 px-6 py-3 rounded-full hover:bg-purple-600 transition-all font-semibold">
            Coming Soon 🚀
          </button>
        </div>
      </section>

      {/* Mentorship Matching Teaser */}
      <section className="bg-black text-white py-16 px-6 border-t border-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-400 mb-4">🌟 Alumni Mentorship Program</h2>
          <p className="text-gray-300">
            Whether you're looking for guidance or eager to give back—our mentorship platform will help students and alumni connect meaningfully.
          </p>
          <p className="mt-4 text-sm text-gray-500 italic">Launching soon...</p>
        </div>
      </section>
    </>
  );
}
