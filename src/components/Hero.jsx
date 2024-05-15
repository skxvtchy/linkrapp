import React from "react";
import Typed from "react-typed";
import Footer from "./Footer";
import { FiLink2 } from "react-icons/fi";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";

const Hero = () => {
  return (
    <div className="text-white relative">
      <div className="max-w-[800px] w-full mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7m sm:text-6xl text-4xl font-bold md:py-6 px-1">
          Expand Your Experiences
        </h1>

        <div className="flex justify-center items-center my-10 mx-auto">
          <div className="p-2">
            <img
              src={image1}
              alt="1"
              className="rounded-lg w-80 sm:w-96 h-52 sm:h-64 object-cover"
            />
          </div>
          <div className="p-2">
            <img
              src={image2}
              alt="2"
              className="rounded-lg w-96 sm:w-[400px] h-64 sm:h-[400px] object-cover"
            />
          </div>
          <div className="p-2">
            <img
              src={image3}
              alt="3"
              className="rounded-lg w-80 sm:w-96 h-52 sm:h-64 object-cover"
            />
          </div>
        </div>

        <div className="flex justify-center items-center pb-10">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 ">
            Find New
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Events", "Friends", "Experiences"]}
            typeSpeed={50}
            backSpeed={20}
            loop
          />
        </div>

        <button className="bg-[white] w-[200px] rounded-full font-medium mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
      <div className=" py-8 bottom-10 w-full flex justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default Hero;
