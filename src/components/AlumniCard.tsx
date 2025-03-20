import Image from "next/image";

interface AlumnusProps {
  name: string;
  passingYear: number;
  organization: string;
  designation: string;
  image: string;
}

export default function AlumniCard({ alumnus }: { alumnus: AlumnusProps }) {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={alumnus.image || "/placeholder.svg"}
          alt={`${alumnus.name}'s background`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      <div className="relative -mt-16 px-6">
        <div className="flex items-end justify-between">
          <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-background bg-background">
            <Image
              src="/placeholder.svg?height=96&width=96"
              alt={alumnus.name}
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
            Class of {alumnus.passingYear}
          </span>
        </div>
        <div className="py-4">
          <h3 className="text-xl font-bold">{alumnus.name}</h3>
          <p className="text-muted-foreground">{alumnus.designation}</p>
          <div className="mt-2 flex items-center">
            <div className="h-6 w-6 rounded-full bg-muted"></div>
            <span className="ml-2">{alumnus.organization}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
