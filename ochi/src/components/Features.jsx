import React from "react";

const Features = () => {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-600 pb-16">
        <h1 className="text-6xl tracking-tighter">Featured projects</h1>
      </div>
      <div className="px-16">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardcontainer relative  w-1/2 h-[75vh] bg-gray-800">
            <h1 className="absolute left-full text-[#7fe74f] -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] text-7xl leading-none tracking-tight ">
              {"FYDE".split("").map((item, index) => (
                <span key={"tum"}>{item} </span>
              ))}
            </h1>
            <div className="card  w-full h-full rounded-2xl bg-gray-600 overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div className="cardcontainer relative  w-1/2 h-[75vh] bg-gray-800 ">
            <h1 className="absolute right-full text-[#85eb56] translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] text-7xl leading-none tracking-tight ">
              {"VISE".split("").map((item, index) => (
                <span key={"hum"}>{item} </span>
              ))}
            </h1>
            <div className="card  w-full h-full rounded-2xl bg-gray-600 overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
