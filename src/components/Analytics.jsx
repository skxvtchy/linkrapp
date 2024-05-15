import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            About Linkr
          </h1>
          <p>
            Welcome to LINKR, the next-generation social media platform designed
            to revolutionize the way you connect, share, and interact with the
            world around you. At LINKR, our mission is to create a seamless and
            enriching social experience that empowers users to express
            themselves, discover new interests, and build meaningful connections
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
