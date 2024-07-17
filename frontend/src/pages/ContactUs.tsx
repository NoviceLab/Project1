import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import Loca from "../components/AboutUs/Loca";

const ContactUs = () => {
  const [source, setsource] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.9011137451!2d77.46578492597025!3d12.953945399494673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1721250670237!5m2!1sen!2sin"
  );
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* <div className="flex flex-col items-center justify-center flex-grow bg-gray-50 py-16"> */}
      <div className="flex flex-col lg:flex-row items-center justify-center mx-auto bg-white shadow-md rounded-lg p-8">
        <div className="text-center lg:text-left lg:w-1/2 px-6 py-6   mt-14">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            Get in touch with
          </h1>
          <h2 className="text-4xl font-bold text-gray-800 mb-4  mr-6 text-center">
            603
          </h2>
          <div className="mb-4 flex items-center text-lg text-gray-600 ">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-yellow-300"
            />
            <span className="ml-3">
              {" "}
              Makhija Arcade, 35th Rd, Khar, Khar West, Mumbai, Maharashtra
              400052
            </span>
          </div>
          <div className="mb-4 flex items-center text-lg text-gray-600">
            <FontAwesomeIcon icon={faEnvelope} className="text-yellow-300" />
            <a
              href="mailto:sales@603thecoworkingspace.com"
              className="text-indigo-600 hover:underline ml-3"
            >
              sales@603thecoworkingspace.com
            </a>
          </div>
          <div className="mb-4 flex items-center text-lg text-gray-600">
            <FontAwesomeIcon icon={faPhone} className="text-yellow-300 mr-2" />
            <a
              href="tel:+919136036603"
              className="text-indigo-600 hover:underline"
            >
              +91 9136036603
            </a>
          </div>
          <p className="mt-4 text-gray-600">
            We're here to help and answer any questions you might have. We look
            forward to hearing from you.
          </p>
        </div>

        <div className="lg:w-1/2 mt-6 lg:mt-0 flex flex-col items-center">
          <img
            className="max-w-full h-auto rounded-lg "
            src="https://i0.wp.com/www.603thecoworkingspace.com/wp-content/uploads/2024/05/1644091050845.jpg?resize=180%2C180&ssl=1"
            alt="Contact Us"
          />

          <div className="mt-6 text-gray-600 text-center lg:text-left px-6 -2  ">
            <p className="text-3xl font-semibold text-center text-yellow-300 italic ">
              Kunal Kataria, Director
            </p>
            <p className="mt-4 text-center">
              603 A number defining Success, Infinity and Energy. Our aim is to
              support your business’s triumphs, shaping an enduring legacy. Your
              legendary feat are etched in memory, and if we can enhance that by
              even 0.1%, grant us the privilege to assist. Backed by unwavering
              commitment, the 603 team will provide unparalleled services. The
              essence of our prosperity is rooted in the synergy of our team,
              each member enriching with their distinct skills. Our realm
              fosters enterprise growth, a testament to our collective resolve.
              It’s this shared ethos that paves the way to our accomplishments,
              propelling us forward.
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-center text-5xl font-bold text-gray-800 mt-8 underline">
        Drop us a note and we’ll be in
      </h2>
      <h2 className="text-center text-5xl font-bold text-gray-800 mt-8 underline">
        touch shortly!
      </h2>
      <div className="bg-yellow-300 w-full max-w-4xl mx-auto mt-8 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
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
              htmlFor="location"
            >
              Preferred Location*
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
              htmlFor="seats"
            >
              Number of Seats Required*
            </label>
            <input
              className="w-full px-3 py-2   rounded-lg"
              type="number"
              id="seats"
              name="seats"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="company"
            >
              Company
            </label>
            <input
              className="w-full px-3 py-2   rounded-lg"
              type="text"
              id="company"
              name="company"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="specifications"
            >
              Specifications
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
              className="bg-yellow-300 text-white font-bold py-2 px-6 rounded-lg hover:shadow-lg "
              type="submit"
            >
              Send
            </button>
            <button
              className="bg-yellow-300 text-white font-bold py-2 px-6 rounded-lg  hover:shadow-lg"
              type="submit"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
      <div className="mt-14">
        <iframe
          src={source}
          className="w-full"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
      <div className="flex flex-wrap justify-between items-center   min-h-8 mt-12 mb-12 gap-4">
        <div
          onClick={() =>
            setsource(
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.5215046769017!2d72.82170697472064!3d18.99672818219162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf8ecd0c9849%3A0xea41679190a97909!2sMarathon%20Innova%20C%20wing!5e0!3m2!1sen!2sin!4v1721254426295!5m2!1sen!2sin"
            )
          }
        >
          <Loca
            title="Marathon (Lower Parel)"
            description="Marathon Innova, 1st Floor, Lower Parel, Mumbai, Maharashtra 400013"
          />
        </div>
        <div
          onClick={() =>
            setsource(
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.4738712785665!2d72.82505347472069!3d18.99882948218989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8d495475cf%3A0x60b2ec04a00313c8!2sMatulya%20Centre!5e0!3m2!1sen!2sin!4v1721254522143!5m2!1sen!2sin"
            )
          }
        >
          <Loca
            title="
Matulya (Lower Parel)"
            description="Matulya Centre, 2nd Floor, Lower Parel, Mumbai, Maharashtra 400013"
          />
        </div>
        <div
          onClick={() =>
            setsource(
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15089.895512569543!2d72.8173286431614!3d18.99882917941545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf4397856501%3A0x482f3f34e960ca79!2sSun%20Mill%20Compound!5e0!3m2!1sen!2sin!4v1721254812039!5m2!1sen!2sin"
            )
          }
        >
          <Loca
            title="Sun Mill (Lower Parel)"
            description="Sun Mill Compound, Unit 15, Cama Industrial Estate. Mumbai 400013"
          />
        </div>
        <div
          onClick={() =>
            setsource(
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8599308386288!2d72.83604277472271!3d19.069895082133446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90fe1f8f311%3A0x82834a11fb2f0757!2sAmore%20(Khar%20West)!5e0!3m2!1sen!2sin!4v1721255063979!5m2!1sen!2sin"
            )
          }
        >
          <Loca
            title="Amore, Khar West"
            description="Amore Centre, 5th Floor, Hasnabad Ln, Khar, Ram Krishna Nagar, Khar West, Mumbai, Maharashtra 400052"
          />
        </div>
        <div
          onClick={() =>
            setsource(
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9619361328455!2d72.83045948885497!3d19.065411100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c911698fff91%3A0x1f2d87a146cbbbc2!2sMakhija%20Arcade!5e0!3m2!1sen!2sin!4v1721255112349!5m2!1sen!2sin"
            )
          }
        >
          <Loca
            title="Bandra, Makhija"
            description="Makhija Arcade, 6th Floor, 35th Rd, Khar, Khar West, Mumbai, Maharashtra 400052"
          />
        </div>
        <div
          onClick={() =>
            setsource(
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7386179269965!2d72.86902197472399!3d19.119119382094336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c94a766fb321%3A0x15bd80ce48eb013!2s27%20MIDC!5e0!3m2!1sen!2sin!4v1721255215891!5m2!1sen!2sin"
            )
          }
        >
          <Loca
            title="Andheri East, M.I.D.C"
            description="27 MIDC Shah Coal, 1st Floor, M.I.D.C, Marol Industrial Area, Andheri East, Mumbai, Maharashtra 400093"
          />
        </div>
        <div
          onClick={() =>
            setsource(
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1966976400286!2d77.64079672457862!3d12.959261887354954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae153e793c5a5d%3A0x5ff8cd98e5a272e!2sDiamond%20District!5e0!3m2!1sen!2sin!4v1721255315697!5m2!1sen!2sin"
            )
          }
        >
          <Loca
            title="
Diamond District"
            description="Diamond District, D Wing, 4th Floor, Old Airport Raod, Kodihalli, Bangalore 560008, Karnataka, India, HAL Old Airport Rd, ISRO Colony, Domlur, Bengaluru, Karnataka 560008"
          />
        </div>
        <div
          onClick={() =>
            setsource(
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.1700457010757!2d72.83392647472104!3d19.012227182179295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cee8325aee35%3A0xb0d98d4080e115a!2sSunshine%20Tower!5e0!3m2!1sen!2sin!4v1721255373322!5m2!1sen!2sin"
            )
          }
        >
          <Loca
            title="Dadar Sunshine Centre"
            description="Sunshine tower, 29th Floor, Plot No, 616, Tulsi Pipe Rd, Dadar West, Parel, Mumbai, Maharashtra 400013"
          />
        </div>
        <div
          onClick={() =>
            setsource(
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9576681553413!2d73.01590922472377!3d19.109512932101964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0e7e7a71499%3A0x98d8b38ca6db76be!2sMillenium%20Business%20Park%2C%20MIDC%20Industrial%20Area%2C%20Sector%201%2C%20Kopar%20Khairane%2C%20Navi%20Mumbai%2C%20Maharashtra%20400710!5e0!3m2!1sen!2sin!4v1721255614332!5m2!1sen!2sin"
            )
          }
        >
          <Loca
            title="
Navi Mumbai"
            description="MILLENNIUM BUSINESS PARK, Millenium Business Park, Sector 2, Kopar Khairane, Navi Mumbai, Maharashtra 400701"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
