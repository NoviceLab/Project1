import React from "react";
import Scramble from "../Landing/Scramble";
import Offer from "./offer";
import Footer from "../Footer/footer";
import Explore from "./explore";
import Navbar from "../Navbar/navbar";
const Top: React.FC = () => {
  return (
    <div className="min-h-[450px]    w-full   ">
      <Navbar />
      <div
        className="bg-cover bg-center h-[14%] w-full   sm:h-[23%]"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/black-tone-office-desk-with-computer-black-minimalist-working-station_267300-211.jpg')",
          backgroundSize: "100% 100%", // Ensures the image covers the entire background
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
          backgroundPosition: "center", // Centers the image within the container
        }}
      >
        <div className="m-20        sm:m-44 absolute  opacity-75 ">
          <h1 className="text-7xl sm:text-8xl font-bold text-white">
            <Scramble
              totype=" Our Services "
              className="text-7xl sm:text-8xl font-bold text-white"
              speed={0.2}
            />
          </h1>
          <p className="text-gray-300  font-semibold mt-4 sm:text-2xl">
            <Scramble
              totype="   Everywhere your Buisness should be"
              className="text-gray-300  font-semibold mt-4 sm:text-2xl"
              speed={0.5}
            />
          </p>
        </div>
      </div>
      <div className="min-h-[650px]   flex flex-col    sm:flex-row">
        <div className="      w-full p-4 sm:mt-14 pt-20">
          <img
            src="https://i0.wp.com/www.603thecoworkingspace.com/wp-content/uploads/2023/08/for-now.png?fit=680%2C506&ssl=1"
            className="transition-transform duration-300 transform hover:scale-105"
            alt=""
          />
        </div>
        <div className="min-h-[200px] w-full   sm:pt-48 ">
          <h1 className="text-4xl font-bold">
            Join thousand of people who are part of the 603 space.
          </h1>
          <p className="mt-6 font-Raleway">
            At 603 The Coworking Space, we're dedicated to redefining the way
            you work. Our range of thoughtfully designed services is tailored to
            empower professionals, entrepreneurs, and freelancers to thrive in a
            dynamic and collaborative environment.
          </p>
        </div>
      </div>
      <div className="min-h-[650px] ">
        <h1 className="text-5xl font-bold flex justify-center">
          Here's what we Offer
        </h1>
        <div className="min-h-11 w-full  flex  flex-wrap  justify-center    md:flex   p-5 ">
          <Offer
            title="Flexible Workspaces"
            description="Our state-of-the-art coworking spaces are crafted to cater to your specific needs. Whether you're a solopreneur, a startup team, or a remote worker, we have the perfect workspace for you."
            imagesrc="https://i0.wp.com/www.603thecoworkingspace.com/wp-content/uploads/2023/08/icon1.png?fit=1123%2C962&ssl=1"
          />
          <Offer
            title="Modern Amenities"
            description="Enjoy high-speed internet, ergonomic furniture, and tech-enabled meeting rooms. We prioritise your comfort and productivity, providing all the tools you need to excel."
            imagesrc="https://i0.wp.com/www.603thecoworkingspace.com/wp-content/uploads/2023/08/icon2.png?fit=1199%2C813&ssl=1"
          />
          <Offer
            title="Networking Opportunities"
            description="connect and collaborate with a diverse community of like-minded individuals. Our networking events, workshops, and seminars foster a culture of knowledge sharing and professional growth."
            imagesrc="https://i0.wp.com/www.603thecoworkingspace.com/wp-content/uploads/2023/08/icon3.png?fit=1417%2C1034&ssl=1"
          />

          <Offer
            title="Private Offices"
            description="Need a dedicated space for your team? Our private offices offer privacy and customization while keeping you connected to our vibrant community."
            imagesrc="https://i0.wp.com/www.603thecoworkingspace.com/wp-content/uploads/2023/08/icon4.png?fit=1219%2C585&ssl=11"
          />
          <Offer
            title="Virtual Office Solutions"
            description="Even if you're not physically present, you can benefit from our business address, mail handling, and virtual receptionist services to maintain a professional image"
            imagesrc="https://i0.wp.com/www.603thecoworkingspace.com/wp-content/uploads/2023/08/icon5.png?fit=1211%2C788&ssl=1"
          />
          <Offer
            title="Event Spaces"
            description="Hosting an event? Our versatile event spaces are designed to accommodate workshops, seminars, product launches, and more."
            imagesrc="https://i0.wp.com/www.603thecoworkingspace.com/wp-content/uploads/2023/08/icon6.png?fit=1082%2C1003&ssl=1"
          />

          <Offer
            title="Café and Lounge"
            description="Fuel your creativity with our in-house café serving gourmet coffee and refreshments. Our comfortable lounge areas are perfect for informal meetings or relaxation."
            imagesrc="https://i0.wp.com/www.603thecoworkingspace.com/wp-content/uploads/2023/08/icon7.png?fit=1238%2C933&ssl=1"
          />
          <Offer
            title="24/7 Access"
            description="Embrace flexible working hours with round-the-clock access to our spaces. Work according to your schedule, not ours."
            imagesrc="https://i0.wp.com/www.603thecoworkingspace.com/wp-content/uploads/2023/08/icon8.png?fit=1093%2C725&ssl=1"
          />
          <Offer
            title="Supportive Community"
            description="Join a community that encourages collaboration and innovation. Our members come from diverse backgrounds, providing ample opportunities for cross-industry collaboration."
            imagesrc="https://i0.wp.com/www.603thecoworkingspace.com/wp-content/uploads/2023/08/icon9.png?fit=1176%2C665&ssl=1"
          />

          {/* <Offer
            title="Stylish Hat"
            description="A hat that makes you stand out."
            imagesrc="bg.jpg"
          />
          <Offer
            title="Stylish Hat"
            description="A hat that makes you stand out."
            imagesrc="bg.jpg"
          />
          <Offer
            title="Stylish Hat"
            description="A hat that makes you stand out."
            imagesrc="bg.jpg"
          />
          <Offer
            title="Stylish Hat"
            description="A hat that makes you stand out."
            imagesrc="bg.jpg"
          />
          <Offer
            title="Stylish Hat"
            description="A hat that makes you stand out."
            imagesrc="bg.jpg" */}
          {/* /> */}
        </div>
      </div>
      <div
        className="min-h-[900px]    "
        style={{
          backgroundImage:
            "url('https://wallpapers.com/images/hd/minimalist-background-o4thunr26czh1ln5.jpg')",
          backgroundSize: "100% 100%", // Ensures the image covers the entire background
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
          backgroundPosition: "center", // Centers the image within the container
        }}
      >
        <h1 className="text-5xl font-bold flex justify-center mt-10 ml-12 sm:ml-0">
          Explore Our Services
        </h1>

        <div className="  min-h-[750px] mt-10 flex flex-wrap justify-evenly gap-6 mx-10 carddd  ">
          <div className="min-w-10 min-h-10">
            <Explore
              title="Conference Rooms"
              description="Full equipped premium conference rooms for meetings and discussion with the state of the art support."
              imagesrc="https://i0.wp.com/www.gavias-theme.com/wp/codesk/wp-content/uploads/2020/03/price-1.jpg?w=900&ssl=1"
              price="999"
            />
          </div>
          <div className="min-w-10 min-h-10">
            <Explore
              title="Cabin Spaces"
              description="On demand premium workspaces with vibrant designs, state of the art technology"
              imagesrc="https://i0.wp.com/www.gavias-theme.com/wp/codesk/wp-content/uploads/2020/03/price-2.jpg?w=900&ssl=1"
              price="12,999"
            />
          </div>
          <div className="min-w-10 min-h-10">
            <Explore
              title="Dedicated Desk"
              description="Prestigious office addresses that elevate your business' professional image"
              imagesrc="https://i0.wp.com/www.gavias-theme.com/wp/codesk/wp-content/uploads/2020/03/price-3.jpg?w=900&ssl=1"
              price="11,999"
            />
          </div>
          <div className="min-w-10 min-h-10">
            <Explore
              title="Hot Desk"
              description="Premium custom built and operated workspaces"
              imagesrc="https://i0.wp.com/www.gavias-theme.com/wp/codesk/wp-content/uploads/2020/03/price-4.jpg?w=900&ssl=1"
              price="5,999"
            />
          </div>
        </div>
      </div>
      <div className="min-h-10 border-2 border-red-700">
        <p className="m-16 ">
          Navigating the Future of Work: Exploring Flexible Workspaces for Rent
          in Mumbai & Thane In the ever-evolving landscape of work, the demand
          for flexibility has become a defining characteristic for professionals
          and businesses alike. Mumbai and Thane, bustling metropolises known
          for their vibrant business communities, have witnessed a significant
          rise in the popularity of flexible workspaces for rent. Our adaptive
          environments cater to the diverse needs of a dynamic workforce,
          offering a range of benefits that redefine the traditional office
          experience. One of the primary advantages of opting for flexible
          coworking office spaces in Mumbai and Thane is the freedom they
          provide in terms of location. Strategically positioned in key business
          districts, Our workspaces offer professionals the opportunity to
          choose an office that aligns with their preferences and minimizes
          commute times. Whether nestled in the heart of Mumbai’s financial hub
          or within the rapidly expanding landscape of Thane, Our flexible
          workspaces ensure accessibility and convenience for all. The
          collaborative nature of flexible workspaces fosters an environment
          conducive to innovation and networking. By bringing together
          professionals from various industries under one roof, our spaces
          create dynamic communities that encourage knowledge exchange and
          collaboration. Networking events, workshops, and shared areas within
          pur workspaces facilitate interactions, providing opportunities for
          individuals to connect, share ideas, and forge valuable partnerships.
          Moreover, the amenities offered in our flexible workspaces contribute
          to a seamless and efficient work experience. High-speed internet,
          games room, meeting rooms, ergonomic furniture, and well-equipped
          kitchens are standard features. This attention to detail ensures that
          professionals have access to the tools and resources necessary to work
          effectively and comfortably.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Top;
