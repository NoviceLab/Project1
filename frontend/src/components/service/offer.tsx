import React from "react";

interface OfferProps {
  title: string;
  description: string;
  imagesrc: string;
}

const Offer: React.FC<OfferProps> = ({ title, description, imagesrc }) => {
  return (
    <div className=" ">
      <div className="card bg-base-100 h-96 *:w-96 shadow-xl border-2 border-black  ">
        <figure className="px-10 pt-10">
          <img
            src={imagesrc}
            alt="Offer"
            className="rounded-xl transition-transform duration-300 transform hover:scale-105 "
          />
        </figure>
        <div className="card-body items-center text-center border-2    ">
          <div>
            {" "}
            <h2 className="  font-bold  ">{title}</h2>
          </div>
          <div>
            {" "}
            <p className="font-Raleway text-gray-500"> {description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
