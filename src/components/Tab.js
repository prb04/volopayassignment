import React from "react";

const Tab = ({}) => {
  return (
    <div className="flex gap-x-4 mb-[20px] text-white pb-2 border-b-2">
      <button className="px-5 py-2 hover:bg-white hover:text-black bg-black rounded-xl border border-gray-400 cursor-pointer outline-none text-white font-bold shadow-md transition duration-300">
        Your
      </button>
      <button className="px-5 py-2 hover:bg-white hover:text-black bg-black rounded-xl border border-gray-400 cursor-pointer outline-none text-white font-bold shadow-md transition duration-300">
        All
      </button>
      <button className="px-5 py-2 hover:bg-white hover:text-black bg-black rounded-xl border border-gray-400 cursor-pointer outline-none text-white font-bold shadow-md transition duration-300">
        Blocked
      </button>
    </div>
  );
};

export default Tab;
