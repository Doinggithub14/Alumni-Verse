import AlumniCard from "@/components/AlumniCard";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  const alumni = [
    {
      name: "Aditi Sharma",
      job: "Software Engineer at Google",
      image: "/aditi.jpg",
    },
    {
      name: "Rahul Mehta",
      job: "Founder at Tech Startup",
      image: "/rahul.jpg",
    },
    {
      name: "Neha Kapoor",
      job: "Product Manager at Microsoft",
      image: "/neha.jpg",
    },
  ];

  return (
    <div className="grid place-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <HeroSection />

      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Alumni
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumni.map((alumnus, index) => (
              <AlumniCard key={index} alumnus={alumnus} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
