import React from "react";

const Tab = ({ activeTab, onChange }) => {
  const tabs = [
    { id: "your", label: "Your" },
    { id: "all", label: "All" },
    { id: "blocked", label: "Blocked" },
  ];

  return (
    <nav className="border-b-[2px] border-gray-200">
      <ul className="flex gap-4 pb-2 text-gray-500">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`relative cursor-pointer ${
              activeTab === tab.id
                ? "before:block before:-bottom-[10px] before:w-[100%] before:h-[2px] before:absolute before:bg-red-500 before:rounded-lg text-black"
                : ""
            }`}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Tab;
