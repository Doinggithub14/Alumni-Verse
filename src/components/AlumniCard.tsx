import Image from "next/image";

interface AlumniCardProps {
  name: string;
  batch: number;
  degree: string;
  currentPosition: string;
  company: string;
  location: string;
  email: string;
  image?: string | null;
}

export default function AlumniCard({
  name,
  batch,
  degree,
  currentPosition,
  company,
  location,
  email,
  image,
}: AlumniCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full h-full text-black">
      <div className="w-full h-64 relative">
        {image ? (
          <Image
            src={image}
            alt={name || "Alumni Photo"}
            fill
            className="object-cover rounded-t-xl"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 text-sm">
            No Image
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm text-gray-600">Batch of {batch}</p>
        <p className="text-sm">{degree}</p>
        <hr className="my-2" />
        <p className="font-semibold">{currentPosition}</p>
        <p className="text-sm text-gray-700">{company}</p>
        <p className="text-sm">{location}</p>
        {email && (
          <a
            href={`mailto:${email}`}
            className="text-blue-500 text-sm block mt-2"
          >
            {email}
          </a>
        )}
      </div>
    </div>
  );
}
