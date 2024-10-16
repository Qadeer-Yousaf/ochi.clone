import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-800 flex items-center gap-5 px-16">
      <div className="cardscontainer w-1/2 h-[60vh]">
        {" "}
        <div className="cards relative rounded-xl w-full h-full  bg-[#004D43] flex items-center justify-center ">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          {/* https://ochi.design/wp-content/uploads/2022/04/logo002.svg */}
          <button className="absolute left-10 bottom-10 border-2 border-yellow-100 px-1 py-1 w-32 rounded-full">
            2019-2022
          </button>
        </div>
      </div>
      <div className="cardscontainer w-1/2 h-[60vh] flex gap-5">
        <div className="cards relative rounded-xl w-1/2 h-full bg-slate-500 flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />

          <button className="absolute left-10 bottom-10 border-2 border-yellow-100 px-1 py-1 w-32 rounded-full">
            Rating 5.0 on clutch
          </button>
        </div>
        <div className="cards relative rounded-xl w-1/2 h-full  bg-[#161817] flex items-center justify-center">
          <img
            className="w-32"
            src="https://cdn.prod.website-files.com/5d816b07d269385f68dbcab0/5ea29a574423326d48ee3ee9_TFA-Hero-Badge-01-white.svg"
            alt=""
          />

          <button className="absolute left-10 bottom-10 border-2 border-yellow-100 px-1 py-1 w-32 rounded-full">
            Business Bootcamp Alumni
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
