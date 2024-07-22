import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./custom.css";

function PartnerWithUs() {
  return (
    <div>
      <div
        style={{ width: "1524px", height: "600px" }}
        className="flex justify-between bg-hero-partner"
      >
        <div className="flex flex-col justify-center w-1/2 py-50 pl-32">
          <h2 className="text-white text-6xl">
            Interested in becoming a property Partner?
          </h2>
          <br />
          <br />
          <p className="text-white">
            Watch this video to start earning from your property right now
          </p>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <iframe
            width="570"
            height="329"
            src="https://www.youtube.com/embed/c5CNPHuvwck?si=FApWC0PEnjGHtz9h"
            title="What is coworking and how to get started today"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="flex justify-between">
        <div
          className="flex flex-col items-center justify-center pl-96"
          style={{ width: "816px", height: "614px" }}
        >
          <div style={{ width: "900px", height: "506px" }} className="px-12">
            <img
              src="https://i0.wp.com/www.603thecoworkingspace.com/wp-content/uploads/2017/05/matulya2.jpg"
              alt="matulya2"
            />
            <br />
            <p className="text-2xl text-slate-700">
              Coworking is an opportunity to transform your usual office
              premises into a community of Entrepreneurs/Startups with a huge
              potential of earning and to be a proud partner of a coworking
              space with 603 The Coworking Space.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center pr-48"
          style={{ width: "307px", height: "634px" }}
        >
          {[100, 80, 60, 40, 30, 20, 10].map((size, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              style={{ fontSize: `${size}px`, color: "#fcc519" }}
            />
          ))}
        </div>
      </div>
      <div className="pt-14">
        <div className="px-80">
        <h2 className="text-center text-4xl font-bold text-yellow-400 bg-yellow-100 rounded">Property Partner Form</h2>
        </div>
        
        <div className="bg-yellow-300 w-full max-w-4xl mx-auto mt-8 p-8 rounded-lg shadow-lg">
          <form className="space-y-4">
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name*
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email*
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="phone"
              >
                Phone*
              </label>
              <input
                className="w-full px-3 py-2   rounded-lg"
                type="tel"
                id="phone"
                name="phone"
                required
              />
            </div>
            
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="location"
              >
                Company*
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg"
                type="text"
                id="location"
                name="location"
                required
              />
            </div>
           
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="specifications"
              >
                Message*
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg"
                id="specifications"
                name="specifications"
                rows={4}
              ></textarea>
            </div>
            <div className="text-center  ">
              <button
                className="bg-slate-950 text-white font-bold py-2 px-6 rounded-lg hover:shadow-lg "
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

    <div className="pt-8">
    <div className="bg-yellow-300 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between">
        <div className="pl-40">
        <p className="text-gray-800 font-bold text-lg mb-4 md:mb-0 ">Be notified about new locations</p>
        </div>
         
          <form className="w-full md:w-auto flex flex-col md:flex-row items-center pr-20">
            <input
              type="email"
              placeholder="Enter E-Mail Address"
              className="border border-gray-300 rounded px-4 py-2 mb-4 md:mb-0 md:mr-4 w-full md:w-64"
            />
            <button className="bg-red-500 text-white rounded px-4 py-2 w-full md:w-auto">Subscribe</button>
          </form>
        </div>
    </div>
    </div>
  );
}

export default PartnerWithUs;
