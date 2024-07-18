import Scramble from "./../components/Landing/Scramble";
import Popuptext from "../components/Landing/Popuptext";
import {
  logo,
  office_pic,
  photo1,
  photo2,
  photo3,
} from "../utils/Landing/Landing";
import { Twopeoplesitting, Flexiblepo } from "../utils/Landing/Svg";
import {
  FaWifi,
  FaPowerOff,
  FaFan,
  FaHome,
  FaPrint,
  FaCar,
} from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import Locationdiv from "../components/Landing/Locationdiv";
import YellowBox from "../components/Landing/YellowBox";
import Yellowline from "../components/Landing/Yellowline";
import PhotoGallery from "../components/Landing/PhotoGallery";
import Review from "../components/Landing/Review";
import Random from "../components/Landing/Random";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import "../utils/Landing/custom.css";

function Landing() {
  return (
    <div className="h-screen w-screen">
      <div>
        <Navbar />
      </div>
      <div className="flex md:h-[73%] lg:h-[83%] xl:h-[95%] items-center justify-between pt-40 pb-40 pr-10 pl-20 bg-image">
        <div>
          <h1 className="border-l-2 border-yellow-400 text-white pl-3 m-6">
            <span className="flex flex-row">
              <div className="pb-2 pr-2">
                <img src={logo} className="w-[50px] h-[40px]" />
              </div>
              <div>
                <Popuptext />
              </div>
            </span>
            <span>
              <Scramble totype="Work" />
            </span>
            <span>
              <Scramble totype="better," />
            </span>
            <span>
              <Scramble totype="together" />
            </span>
          </h1>
          <h1 className=" ml-9 text-white md:text-2xl">
            Be surrounded by inspiration
          </h1>
          <div className="ml-9">
            <button className="bg-yellow-400 border-l-2 hover:bg-yellow-500 hover:border-l-2 m-2 py-2 px-4 text-white md:text-2xl font-sans font-bold">
              Book a Space
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-20 text-yellow-400">
          <div>a</div>
          <div>a</div>
          <div>a</div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row ">
        <div className="w-screen md:w-[60%] px-6 mt-10">
          <h1 className="px-4 py-2 text-3xl md:text-4xl xl:text-5xl mx-10 font-Raleway font-bold">
            Best working environment that suits your business needs, customized
            solutions and more.
          </h1>
          <h1 className="px-4 py-2 mt-6 text-lg md:text-xl mx-10 text-slate-400">
            Elevate your work experience with 603 The Coworking Space. Whether
            you're looking for a creative hub, a place to meet clients, or a
            supportive community, we have it all. Join us and unlock your full
            potential in an environment designed for success. You’ll love it
            here.
          </h1>
        </div>
        <div className="w-screen md:w-[40%] flex flex-col p-2 md:p-0">
          <div className="bg-yellow-400 p-2 py-8 flex justify-around md:w-[80%]">
            <div className=" h-[85px] w-[79px] text-white">
              <Twopeoplesitting />
            </div>
            <div className="flex flex-col items-center justify-center text-white font-Raleway font-semibold">
              <h1 className="text-4xl">1,650</h1>
              <h1 className="text-lg text-black">Total seats are available</h1>
            </div>
          </div>
          <div className="py-3 text-xl">
            <h1 className="flex items-center">
              <span className="pr-1 text-yellow-300">
                <FaWifi />
              </span>
              <span>High speed internet</span>
            </h1>
            <h1 className="flex items-center">
              <span className="pr-1 text-yellow-300">
                <FaPowerOff />
              </span>
              <span>Uninterrupted power supply</span>
            </h1>
            <h1 className="flex items-center">
              <span className="pr-1 text-yellow-300">
                <FaFan />
              </span>
              <span>Fully Air conditioned rooms</span>
            </h1>
            <h1 className="flex items-center">
              <span className="pr-1 text-yellow-300">
                <FaHome />
              </span>
              <span>Housekeeping & Facility Upkeep</span>
            </h1>
            <h1 className="flex items-center">
              <span className="pr-1 text-yellow-300">
                <RiTeamFill />
              </span>
              <span>Conference Rooms</span>
            </h1>
            <h1 className="flex items-center">
              <span className="pr-1 text-yellow-300">
                <FaPrint />
              </span>
              <span>Free Printing</span>
            </h1>
            <h1 className="flex items-center">
              <span className="pr-1 text-yellow-300">
                <FaCar />
              </span>
              <span>Valet Parking</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-28">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col justify-center items-center py-3">
            <img src={office_pic} alt="" className="h-[80%] w-[80%]" />
          </div>
          <div className="ml-6 py-4">
            <h1 className="text-xl font-Convergence font-semibold mx-10">
              Space to make your greatest impact.
            </h1>
            <p className="text-lg font-medium text-slate-500 mx-10 font-Raleway mt-3 mr-3">
              If you need space today, you need a huge range of options that can
              be reserved simply and efficiently. If you need to offer flexible
              work benefits to all your team members, you need our simple
              solution for teams of any size.
            </p>
            <button className="my-6 mx-10 p-3 md:p-4 bg-yellow-400 border-l-2 border-black hover:font-medium font-Raleway">
              Explore Our Managed Office Solutions
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="ml-6 mr-4">
            <h1 className="text-gray-950 text-3xl font-bold md:text-4xl">
              Our Locations
            </h1>
            <br />
            <p className="text-slate-500 text-lg mr-20">
              Experience the epitome of workspace excellence with 603, the
              leading coworking space. Our thoughtfully curated collection of
              premium locations provides a distinguished environment for
              professionals and businesses. Join us as we redefine productivity
              and elevate your work experience.
            </p>
          </div>
          <div className="flex flex-col xl:flex-row w-full items-center">
            <div className="flex w-[80%] mt-4">
              <div>
                <Flexiblepo />
              </div>
              <div className="flex w-full justify-center items-center font-semibold text-lg text-black">
                <div>Flexible Private Offices</div>
              </div>
            </div>
            <div className="flex w-[80%] mt-4">
              <div>
                <Flexiblepo />
              </div>
              <div className="flex w-full justify-center items-center font-semibold text-lg text-black">
                <div>Flexible Meeting Rooms</div>
              </div>
            </div>
          </div>
          <div className="ml-6 mr-4 my-6">
            <p className="text-slate-500 text-lg mr-20">
              Give your team access to thousands of workspace options over
              India, so they can meet, collaborate, and get their best work
              done.
            </p>
          </div>
          <div>
            <h1 className="ml-6 mr-4 text-2xl font-Raleway font-extrabold">
              Click for more details
            </h1>
            <div className="ml-6 mr-12 md:mr-6 xl:mr-24 flex flex-col md:flex-row justify-between">
              <div className="w-56 md:w-36">
                <div className="w-full flex flex-col">
                  <Locationdiv place="Khar Amore center" />
                  <Locationdiv place="Bandra Majikh Center" />
                  <Locationdiv place="Lower Parel Matulya" />
                  <Locationdiv place="Lower Parel Matulya" />
                  <Locationdiv place="Lower Parel Matulya" />
                </div>
              </div>
              <div className="w-56 md:w-36">
                <div className="w-full flex flex-col">
                  <Locationdiv place="Lower Parel Matulya" />
                  <Locationdiv place="Lower Parel Matulya" />
                  <Locationdiv place="Lower Parel Matulya" />
                  <Locationdiv place="Lower Parel Matulya" />
                </div>
              </div>
              <div className="w-56 md:w-36">
                <div className="w-full flex flex-col">
                  <Locationdiv place="Lower Parel Matulya" />
                  <Locationdiv place="Lower Parel Matulya" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="items-center justify-between pt-40 pb-40 pr-10 pl-20 bg-image2 w-1524"
        style={{ height: 800 }}
      >
        <div>
              <div className="text-center text-lg leading-10 text-yellow-500">
                <span>Join the Coworking Movement</span>
              </div>

              <h2 className="text-center text-6xl leading-none px-40 py-10 text-white font-montserrat tracking-tighter overflow: auto or overflow: scroll">
                <span>
                  Spaces that are occupied by Corporates and Start ups, designed
                  with your business&nbsp;in&nbsp;mind
                </span>
              </h2>

              <div className="ml-9 flex justify-center items-center">
                <button className="bg-yellow-400 border-l-2 hover:bg-white hover:border-l-2 m-2 py-2 px-4 md:text-2xl font-sans font-Raleway">
                  Book a Space
                </button>
              </div>
        </div>
      </div>
      <div className="w-full flex flex-col mt-6 xl:flex-row">
        <div className="w-full xl:w-1/2 flex justify-center items-center">
          <div className="ml-16 mr-8">
            <h1 className="font-Convergence italic text-yellow-400 font-bold mr-4 ml-6 shadow-black shadow-md text-2xl">
              DID YOU KNOW?
            </h1>
            <h1 className="text-2xl text-black font-sans font-semibold mr-4 ml-6 mt-4">
              we are now offering our expertise for managed offices to your
              offices of all sizes?
            </h1>
            <p className="text-slate-500 mr-4 ml-6 mt-8 md:text-lg">
              Standalone workspaces designed and built for your brand, and
              tailored to your needs. Offices, meeting rooms and co-working
              access for your team ‑ by the year, month, day or hour
            </p>
          </div>
        </div>
        <div className="w-full xl:w-1/2 flex flex-col mt-6">
          <div className="flex flex-col md:flex-row">
            <div className="m-3 p-3 bg-yellow-400 md:w-96 xl:w-64">
              <h1 className="font-Convergence font-semibold text-white text-2xl md:text-4xl ">
                Explore our standard private offices
              </h1>
              <button
                type="button"
                className="bg-gray-500 md:text-xl px-2 py-1 mt-2 text-white border-l-2 border-white"
              >
                More
              </button>
            </div>
            <div className="m-3 hidden md:block md:w-96 xl:w-64">
              <img src={photo1} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="m-3 md:w-96 xl:w-64">
              <img src={photo2} />
            </div>
            <div className="m-3 p-3 md:p-4 md:w-96  xl:w-64 bg-gray-500">
              <h1 className="font-Convergence font-semibold text-white text-2xl md:text-4xl">
                Rent Conference & Meeting rooms
              </h1>
              <button
                type="button"
                className="bg-yellow-400 md:text-xl px-2 py-1 mt-2 text-white border-l-2 border-white"
              >
                More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full mt-12">
        <div className="flex md:w-1/2 w-full">
          <div className="m-3">
            <img src={photo3} />
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <YellowBox />
        </div>
      </div>
      <Yellowline />
      <div>
        <h1 className="md:mt-8 text-3xl text-yellow-400 font-Raleway font-bold text-center md:text-5xl">
          Our photo gallery
        </h1>
      </div>
      <div className="mt-4">
        <PhotoGallery />
      </div>
      <Yellowline />
      <div className="w-full">
        <Review />
      </div>
      <Random />
      <Yellowline />
      <div className="w-full mb-16">
        <div className="text-slate-400 mx-4 md:mx-20">
          The Rise of Coworking: Unveiling Vibrant Office Spaces in Mumbai &
          Thane. In the dynamic business landscape of Mumbai and Thane,
          traditional office spaces are making way for a revolutionary
          concept—coworking. Our bustling metropolises, known for their
          fast-paced lifestyle and thriving business communities, have witnessed
          a surge in the popularity of coworking spaces. This shift is
          attributed to the changing preferences of professionals and
          entrepreneurs who seek flexibility, collaboration, and a dynamic work
          environment. Our Coworking office spaces in Mumbai and Thane offer a
          compelling alternative to conventional offices, providing an ecosystem
          that fosters innovation and productivity. Our shared workspaces cater
          to a diverse range of professionals, from freelancers and startups to
          established businesses looking to optimize their operations and save
          cost. One of the key advantages of our coworking office spaces in
          Mumbai and Thane is the strategic locations of Our spaces. Positioned
          in the heart of business districts, our offices are easily accessible,
          reducing commute times and increasing overall efficiency. Whether
          situated in the bustling financial hub of Mumbai or the rapidly
          developing areas of Thane, our coworking office spaces are
          strategically placed to meet the needs of a diverse clientele. The
          collaborative nature of coworking is a driving force behind its
          popularity. Our spaces bring together professionals from various
          industries under one roof, creating a dynamic community that
          encourages knowledge exchange and collaboration. Networking events,
          workshops, and communal areas within coworking spaces facilitate
          interactions, sparking new ideas and partnerships among like-minded
          individuals. The flexibility offered by coworking spaces is a
          game-changer for businesses in Mumbai and Thane. Professionals can
          choose from a variety of plans, from hot desking to private offices,
          allowing them to scale their workspace according to their needs. This
          agility is particularly beneficial for startups and small businesses
          that may experience fluctuations in team size and project
          requirements. Moreover, coworking spaces in Mumbai and Thane
          prioritize amenities and services that enhance the overall work
          experience. High-speed internet, modern meeting rooms, games room,
          ergonomic furniture, and fully-equipped kitchens are standard
          offerings. Our amenities contribute to a comfortable and productive
          work environment, attracting professionals who prioritize work-life
          balance.
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
