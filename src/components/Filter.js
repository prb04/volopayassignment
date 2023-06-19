import React from "react";

const Filter = () => {
  return (
    <div className="flex gap-x-[10px] justify-end">
      <input
        className="bg-[#F5F5F5] w-[240px] h-[40px] rounded-[6px] pl-2 placeholder:text-sm placeholder:text-[#787486]"
        type="text"
        placeholder="Search by Card Name..."
        // value={value}
        // onChange={onChange}
      />
      <select className="border py-2 rounded-md">
        <option value="">All</option>
        <option value="burner">Burner</option>
        <option value="subscription">Subscription</option>
      </select>
    </div>
  );
};

export default Filter;
