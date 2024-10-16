import React from "react";

const About = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black ">
      <h1 className="font-['Neue-montreal'] text-[3vw] leading-[3.5vw] tracking-tight ">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] border-[#a2ad7b] mt-20 pt-4 ">
        <div className="w-1/2 ">
          <h1 className="text-6xl ">Our approach:</h1>
          <button className=" flex gap-10 items-center px-5 py-3 bg-zinc-800 rounded-full text-white mt-5 uppercase ">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-full h-[90vh] rounded-3xl bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')] "></div>
      </div>
    </div>
  );
};

export default About;
