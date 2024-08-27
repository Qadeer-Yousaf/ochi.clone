import React from "react";
import { VscArrowUp } from "react-icons/vsc";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900  text-yellow-50 pt-1">
      <div className="textstructure mt-56  px-10">
        {["We Create", "eye-opening", "presentations"].map((items, index) => {
          return (
            <div key={items.idd} className="masker ">
              <div className="w-fit flex ">
                {index === 1 && (
                  <div className="mr-[.5vw] w-[8vw] rounded-md h-[5vw] top-[1vw] reative bg-green-600 hover:bg-green-500 mt-7 "></div>
                )}
                <h1 className="pt-[2vw] -mb-1vw uppercase text-[7vw] leading-[.6] tracking-tighter font-['Founders_Grotesk_X-Condensed' ] font-semibold text-yellow-50 ">
                  {items}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 bg-zinc-900  mt-20 flex justify-between items-center py-3 px-20">
        {[
          "For public and private companies",
          "from the first pitch to IPO",
        ].map((items) => (
          <p
            key={items.id}
            className="text-md font-light tracking-tight leading-none"
          >
            {items}{" "}
          </p>
        ))}
        <div className="start flex items-center gap-2">
          <div className="px-3 py-1 border-[1px] border-zinc-400 uppercase rounded-full font-light text-md">
            Start the Projects
          </div>
          <div className="w-8 h-8 rounded-full border-[1px] border-zinc-500 flex items-center justify-center ">
            <span className="rotate-[45deg]">
              {" "}
              <VscArrowUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
