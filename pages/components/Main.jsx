import Image from "next/image";
import React from "react";
import me from "../assets/me.png";
import vector from "../assets/Vector.png";
import img from "../assets/img2.png";
import img2 from "../assets/img.png";
import img3 from "../assets/img3.png";

const Main = () => {
  return (
    <div
      id="home"
      className="w-full md:h-scr een bg-cover text-center"
      style={{
        backgroundImage: { vector },
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[1240px] w-full h-screen mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            Want to be a succesfull trader?
          </h1>
          <div className="flex justify-start items-start w-[240px] h-auto m-auto">
            <Image
              className="rounded-full shadow-lg shadow-gray-400"
              src={me}
              alt="/"
            />
          </div>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Learn & trade together with India's #1 trusted by over 4500+ Traders
          </p>
          <button
            type="submit"
            className="w-30 p-4 bg-[#ffb31b] font-bold text-gray-100 mt-4"
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="p-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center">
        <div className="p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 justify-center items-center">
            <div className="m-auto">
              <Image src={img2} width="64" height="64" alt="/" />
            </div>
            <div className=" items-center justify-center">
              <h2>4500+</h2>
              <h4>Students learned</h4>
            </div>
          </div>
        </div>
        <div className="p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 justify-center items-center">
            <div className="m-auto">
              <Image src={img} width="64" height="64" alt="/" />
            </div>
            <div className=" items-center justify-center">
              <h2>28+</h2>
              <h4>Cities learned</h4>
            </div>
          </div>
        </div>
        <div className="p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 justify-center items-center">
            <div className="m-auto">
              <Image src={img3} width="64" height="64" alt="/" />
            </div>
            <div className=" items-center justify-center">
              <h2>5+</h2>
              <h4>Countries learned</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
