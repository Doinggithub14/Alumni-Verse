'use client';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AlumniCard from './AlumniCard';
import alumniData from '@/data/alumni_info.json';

export default function AlumniCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative px-6 py-12 bg-black">
      <h2 className="text-3xl font-bold text-center text-purple-500 mb-6">Our Alumni</h2>

      {/* Arrows */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white text-black p-2 rounded-full shadow-md"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white text-black p-2 rounded-full shadow-md"
      >
        <ChevronRight />
      </button>

      {/* Horizontal Scroll */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-6 scroll-smooth scrollbar-hide w-full"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {alumniData.alumni.map((alumni) => (
          <div
            key={alumni.id}
            className="flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-[30vw] scroll-snap-align-start"
          >
            <div className="bg-gray-900 border border-purple-600 rounded-xl p-6 text-white hover:shadow-lg transition duration-300">
              <AlumniCard {...alumni} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
