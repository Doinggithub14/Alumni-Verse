import FeaturedAlumni from "@/components/FeaturedAlumni";
import Spline from "@splinetool/react-spline/next";
import Image from "next/image";
import AlumniCard from '@/components/AlumniCard';
import alumniData from "@/data/alumni_info.json";
import AlumniCarousel from "@/components/AlumniCarousal";

export default function Home() {
  // Get the first alumni from the data for demonstration
  const alumni = alumniData.alumni[0];

  return (
    <div className="container mx-auto min-h-screen">
      <main>
        <Spline scene="https://prod.spline.design/EMBHw-msnuk7dpMT/scene.splinecode" />
      </main>

      {/* <section className="text-center px-6 pt-50 pb-50">
        <p className="mt-6 text-xl text-white max-w-xl mx-auto  text-justify leading-relaxed text-semibold uppercase ">
          Alumni-Verse is a dynamic platform designed to keep alumni connected
          with their alma mater and each other. Whether it's networking, job
          opportunities, mentorship programs, or exclusive events, we ensure
          lifelong engagement. Stay informed, stay connected, and grow together
          with Alumni-Verse.
        </p>
      </section> */}

      <section className="mt-16 pt-10 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
          {/* Left Side - Image */}
          <div className="md:w-1/2">
            <Image
              src="/alumni-network.jpg"
              alt="Alumni Networking"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div className="md:w-1/2 md:pl-10">
            <h2 className="text-purple-800 text-sm uppercase">Who We Are</h2>
            <h1 className="text-4xl font-bold mt-2">
              Connect, Inspire & Grow with Our Alumni Community
            </h1>
            <p className="mt-4 text-white">
              Our Alumni Association is a platform where former students
              connect, share experiences, and create opportunities. Whether its
              networking, mentorship, or career growth, we build lifelong
              relationships beyond campus.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6">
              <a
                href="/join"
                className="bg-purple-800 px-6 py-3 rounded-lg text-white font-semibold"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-12">
  
  <div >
  <AlumniCarousel />
  </div>
</section>
</div>
);
}
