import Spline from "@splinetool/react-spline/next";
export default function Page() {
  return (
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
  );
}
