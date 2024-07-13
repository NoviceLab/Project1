import React from "react";

interface OfferProps {
  title: string;
  description: string;
  imagesrc: string;
  price: String;
}

const Explore: React.FC<OfferProps> = ({
  title,
  description,
  imagesrc,
  price,
}) => {
  return (
    <div className="w-auto max-w-[600px] transition-transform duration-300 transform hover:scale-105">
      <div
        className="card card-side bg-base-100 shadow-xl   max-h-80
      "
      >
        <figure>
          <img src={imagesrc} alt="Movie" className="h-80  min-w-96 " />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl text-bold">{title}</h2>
          <p>{description}</p>
          <div className="card-actions min-w-1 max-h-20 flex items-center justify-between      ">
            <div className="   border-2    ">
              <p className="text-1xl  italic">
                Starting from{" "}
                <p className="text-red-500 text-2xl font-semibold"> ₹{price}</p>
              </p>
            </div>
            <div
              className=" 
             
                "
            >
              <button className=" btn btn-primary bg-blue-500 text-white   hover:bg-blue-400  ">
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
