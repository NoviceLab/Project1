import { heroLocation } from "../../utils/Location/Location";

const Locations = () => {
  return (
    <div className="relative bg-gray-100">
      <img
        className="absolute inset-0 object-cover w-full h-full"
        src={heroLocation}
        alt="Location Image"
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-4xl font-bold">Locations</h1>
        <p className="mt-4 text-lg">Explore our spaces</p>
      </div>
    </div>
  );
};

export default Locations;