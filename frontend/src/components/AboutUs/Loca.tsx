// import { FaLocationArrow } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
interface LocaProps {
  title: string;
  description: string;
}
const Loca: React.FC<LocaProps> = ({ title, description }) => {
  let hover: boolean = false;
  return (
    <div
      className={`flex  min-h-28 max-w-[400px] hover:text-red-500 `}
      onMouseOver={() => (hover = true)}
    >
      <div className="   w-14 text-center">
        <FaLocationDot className="w-6 h-6 text-center ml-2  " />
      </div>
      <div className="flex flex-col ">
        <p
          className={`font-bold text-amber-950 text-lg ${
            hover ? "text-red-500" : ""
          }`}
        >
          {title}{" "}
        </p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Loca;
