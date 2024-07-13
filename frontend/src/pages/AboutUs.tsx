import { bgimage,lifeat603, mission,bgimage2 } from "../utils/AboutUs/AboutUs"
import OurServices from "../components/AboutUs/OurServices"
import GreyLine from "../components/AboutUs/GreyLine"

function AboutUs(){
  return (
    <div className="w-screen h-screen">
      <div>
        Navbar
      </div>
      <div className="relative flex justify-center items-center">
        <img
          className="h-[580px] w-full object-cover object-center"
          src={bgimage}
        />
        <div className="absolute">
          <h2 className="text-center font-Raleway font-extrabold text-white text-[56px]">About Us</h2>
          <p className="text-center font-sans text-white text-[20px]">THIS IS WHO WE ARE</p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-16">
        <div className="mx-3 md:mx-52">
          <h1 className="text-center text-[42px] font-bold text-[#fcc519]">Who We Are</h1>
          <p className="text-center text-[#817a78] text-[16px] md:text-[18px] md:font-light xl:mx-24 mt-4">603 is a Mumbai based coworking space with a total of 8 centres, 7 in Mumbai itself and 1 in Bangalore. 603 as a number defines “Your Infinite Existence” and thus we, from our company, aim to provide a space where you get an opportunity to be limitless. At 603, we understand the evolving needs of businesses like yours and strive to provide an environment that fosters collaboration, productivity, and growth.</p>
        </div>
      </div>
      <div className="flex w-full flex-col md:flex-row justify-center mt-16">
        <div className="flex w-full md:w-1/2 justify-center">
          <img src={lifeat603} className=" m-3 xl:h-[500px] md:h-[450px] h-[300px] xl:w-[510px]"/>
        </div>
        <div className="w-full md:w-1/2 mt-12 md:mt-0">
          <div className="mx-5 md:mx-0 md:mr-16">
            <h1 className="text-[#fcc519] font-bold text-[28px] md:text-[42px] my-3">Life at 603</h1>
            <p className="text-[#817a78] text-[16px] xl:text-[18px]">Your life is an orchestra. Your business is the Symphony in it. 603 The Co-Working Space is built to give your symphony wings to fly. Imagine to enjoy the fresh Barista in the morning in a well lit office with someone who works 24/7 to ensure you come in with a smile and leave with one.</p>
            <p className="text-[#817a78] text-[16px] xl:text-[18px] mt-8">603 is a Mumbai based coworking space with a total of 8 centres, 7 in Mumbai itself and 1 in Bangalore. 603 as a number defines “Your Infinite Existence” and thus we, from our company, aim to provide a space where you get an opportunity to be limitless. At 603, we understand the evolving needs of businesses like yours and strive to provide an environment that fosters collaboration, productivity, and growth.</p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="bg-[#faf6c9] rounded-3xl p-3 m-3 md:mx-12 xl:ml-20 my-6">
            <h1 className="font-Raleway font-bold text-[26px] md:text-[32px] xl:text-[42px] text-[#3f3836]">Our Mission</h1>
            <p className="font-sans text-[#424242] text-[16px] xl:text-[18px] mt-6">At 603, our mission is to provide a vibrant and inspiring coworking space that fosters collaboration, innovation, and personal growth. We strive to create an inclusive and supportive community where professionals from diverse backgrounds can thrive, connect, and achieve their goals.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img src={mission}/>
        </div>
      </div>
      <div className="flex w-full flex-col-reverse md:flex-row mt-16">
        <div className="w-full md:w-1/2"><img src={mission}/></div>
        <div className="w-full md:w-1/2">
          <div className="bg-[#faf6c9] rounded-3xl p-3 m-3 md:mx-12 xl:ml-20 my-6">
            <h1 className="font-Raleway font-bold text-[26px] md:text-[32px] xl:text-[42px] text-[#3f3836]">Our Vision</h1>
            <p className="font-sans text-[#424242] text-[16px] xl:text-[18px] mt-6">Our vision at 603 is to be the leading coworking space that transforms the way people work, connect, and succeed. We envision a dynamic and energising environment where creativity flourishes, ideas come to life, and meaningful connections are forged. By nurturing a culture of collaboration, knowledge sharing, and entrepreneurial spirit, we aspire to be a catalyst for innovation and a hub for diverse talents.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-16">
        <div className="w-1/2 bg-[#fcc519] flex items-center">
          <div className="flex flex-col">
            <div className="flex flex-col mx-12 ml-32">
              <h1 className="text-[54px] font-Raleway font-semibold text-white">Join a community of early stage startups.</h1>
              <p className="text-[16px] mt-10">Come join our high-energy environment of camaraderie, excitement and optimism that is going to shape the future of work.</p>
              <div className="mt-10"><button className="text-[18px] text-white bg-[#3f3836] px-8 py-4 border-l-2 border-white">Book a Space</button></div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex items-center w-full relative">
            <div className="h-[600px]"><img className="h-full" src={bgimage2}/></div>
            <div className="absolute flex flex-col w-[30%]">
              <div className="text-center flex flex-col bg-white py-8">
                <h1 className="text-[44px] text-[#fcc519]">7+</h1>
                <p className="text-[16px] text-[#3f3836] mx-4">Creative people
                space is available.</p>
              </div>
              <div className="text-center flex flex-col bg-[#feface] py-8">
                <h1 className="text-[44px] text-[#fcc519]">15+</h1>
                <p className="text-[16px] text-[#3f3836] mx-4">Conference & meeting rooms available.</p>
              </div>
            </div>
          </div>        
        </div>
      </div>
      <OurServices/>
      <GreyLine/>
      <div className="w-full">
        <div className="text-slate-400 ml-2 mr-2 md:ml-6 xl:ml-12 xl:mr-8 md:mr-4">
          <p>Embracing Affordability: The Charm of Budget-Friendly Coworking Spaces in Mumbai and Thane.</p>
          <br />
          <p>In a world where the traditional office paradigm is shifting towards flexibility and collaboration, budget-friendly coworking office spaces have emerged as a beacon for professionals seeking a dynamic work environment without breaking the bank. Our affordable shared workspaces are revolutionizing the way individuals and small businesses operate, providing a cost-effective solution without compromising on essential amenities.</p>
          <br />
          <p>One of the primary draws of our budget-friendly coworking office spaces is, of course, the cost savings they offer. In bustling urban centers, where real estate prices can skyrocket, our work spaces provide an economical alternative to traditional office leases. Entrepreneurs, freelancers, and small teams can access fully equipped workspaces without the burden of exorbitant rents, making it an attractive proposition for those looking to manage overhead costs more efficiently.</p>
          <br />
          <p>Despite being budget-friendly, our coworking spaces do not compromise on quality. They typically offer a range of amenities essential for a productive work environment. High-speed internet, ergonomic furniture, games room, meeting rooms, and communal areas are standard features, ensuring that professionals have access to the tools they need to excel in their work. The emphasis on functionality and comfort allows individuals to focus on their tasks without being hindered by budget constraints.</p>
          <br />
          <p>The flexibility provided by budget-friendly coworking spaces is another compelling factor. Many of our spaces offer a variety of plans, allowing users to choose options that align with their specific needs. Whether it’s a hot desk for a freelancer, a dedicated desk for a small team, or a private office for a growing business, our spaces cater to diverse requirements, providing scalability without the financial burden associated with traditional leasing.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs