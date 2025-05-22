import Image from "next/image";
import successStoriesData from "@/data/success_stories.json";

export default function SuccessStories() {
  return (
    <section className="bg-black py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-white mt-10 mb-10">
        ✨ Alumni Success Stories ✨
      </h2>

      <div className="space-y-12 max-w-5xl mx-auto">
        {successStoriesData.stories.map((story, index) => (
          <div
            key={story.id}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={story.image}
                alt={story.name}
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 md:px-10 mt-6 md:mt-0">
              <h3 className="text-2xl font-bold text-purple-500">
                {story.name}
              </h3>
              <p className="text-white mt-2 italic">
                &quot;{story.title}&quot;
              </p>
              <p className="mt-4 text-white text-justify leading-relaxed">
                {story.story}
              </p>
              <div className="mt-4 bg-purple-900 border-l-4 border-purple-500 p-4 rounded shadow">
                <p className="text-sm font-semibold text-white">🎓 Takeaway:</p>
                <p className="text-white">{story.lesson}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
