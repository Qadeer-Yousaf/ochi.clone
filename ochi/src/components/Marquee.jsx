import React from "react";

const Marquee = () => {
  return (
    <div className="w-full mt-16 py-20 rounded-tl-3xl rounded-tr-3xl h-[60vh] bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-600 flex whitespace-nowrap">
        <h1 className="text-[20vw] leading-none font-['Founders_Grotesk_X-condensed'] font-semibold uppercase  -mb-6 -mt-6">
          we are ochi
        </h1>
        <h1 className="text-[20vw] leading-none font-['Founders_Grotesk_X-condensed'] font-semibold uppercase -mb-[3vw] -mt-[3vw] ">
          we are ochi
        </h1>
      </div>
    </div>
  );
};

export default Marquee;
