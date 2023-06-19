import React, { useState } from "react";
import { GrFilter } from "react-icons/gr";

const Filter = ({ setFilterType, handleSearchChange, value }) => {
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeChange = (type) => {
    setSelectedType((prevType) => (prevType === type ? null : type));
  };

  const handleApply = () => {
    setFilterType(selectedType);
  };

  const handleClear = () => {
    setSelectedType(null);
    setFilterType("");
  };

  return (
    <div className="flex relative gap-x-[10px] justify-end mt-10 mb-10">
      <input
        className="bg-[#F5F5F5] w-[240px] h-[40px] rounded-[6px] pl-2 placeholder:text-sm placeholder:text-[#787486]"
        type="text"
        placeholder="Search by Card Name..."
        value={value}
        onChange={handleSearchChange}
      />
      <div
        onClick={() => setSelectedType((prevType) => !prevType)}
        className="flex items-center justify-center cursor-pointer"
      >
        <GrFilter size={20} />
      </div>
      {selectedType && (
        <div className="absolute z-30 top-full right-0 max-w-[320px] w-full bg-white shadow-lg">
          <div className="flex flex-col gap-2 mx-5 my-2">
            <span className="font-bold text-gray-600">Filters</span>
            <hr />
            <div>
              <span className="font-medium text-gray-400">Type</span>
              <div className="flex items-center">
                <div className="flex items-center gap-1 mt-2">
                  <input
                    value="subscription"
                    checked={selectedType === "subscription"}
                    onChange={() => handleTypeChange("subscription")}
                    type="checkbox"
                  />
                  <span className="text-sm">Subscription</span>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <input
                    className="ml-4"
                    checked={selectedType === "burner"}
                    value="burner"
                    onChange={() => handleTypeChange("burner")}
                    type="checkbox"
                  />
                  <span className="text-sm">Burner</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex flex-col">
              <span className="font-medium text-gray-400">CardHolder</span>
              <select
                className="w-full p-2 text-sm outline-none bg-gray-50"
                name=""
                id=""
              >
                <option value="0">Select CardHolder</option>
                <option value="1">All</option>
                <option value="2">All</option>
              </select>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={handleApply}
                className="w-full px-2 text-white rounded-md bg-rose-600"
              >
                Apply
              </button>
              <button
                onClick={handleClear}
                className="w-full px-2 text-gray-400 rounded-md bg-gray-50 "
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
