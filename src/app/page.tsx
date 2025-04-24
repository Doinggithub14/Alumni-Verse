import AlumniCard from "@/components/AlumniCard";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  

  return (
    <div className="grid place-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <HeroSection />

      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Alumni
          </h2>
          
        </div>
      </section>
    </div>
  );
}
