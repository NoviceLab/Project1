import React from "react";

interface OfferProps {
  title: string;
  description: string;
  imagesrc: string;
}

const Explore: React.FC<OfferProps> = ({ title, description, imagesrc }) => {
  return (
    <div className="w-auto max-w-2xl transition-transform duration-300 transform hover:scale-105">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={imagesrc} alt="Movie" className="h-64  w-96 " />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl text-bold">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end  flex flex-col ">
            <div className="flex justify-end mr-5">
              <p className="text-1xl mt-4 italic">
                Starting from{" "}
                <p className="text-red-700 text-2xl font-semibold">
                  {" "}
                  Rs 999 hr
                </p>
              </p>
            </div>
            <div
              className="flex justify-end
             mt-5 "
            >
              <button className="btn btn-primary bg-blue-500 text-white   hover:bg-blue-400">
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
