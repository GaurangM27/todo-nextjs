"use client";
import React from "react";
import imageBanner from "../../assets/singup.svg";
import Image from "next/image";
import Link from "next/link";
const ActionSection = () => {
  return (
    <div className="relative bg-blue-500 text-white py-20">
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-opacity-70 bg-blue-500"></div>
      <div className="container mx-auto text-center relative z-20">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Take Control of Your Tasks
        </h2>
        <p className="text-xl text-center mb-8">
          Start managing your tasks efficiently with our task manager app.
        </p>
        <Link href={"/show-task"}>
          <button className="bg-white text-blue-500 py-3 px-6 rounded-md shadow-md hover:shadow-lg transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-30">
        <Image
          src={imageBanner} // Replace with the actual path to your image
          alt="Action Background"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default ActionSection;
