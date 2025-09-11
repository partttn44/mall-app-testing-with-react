import React from "react";

type SideBarProps = {
  category: string[];
  selected: string;
  onSelect: (cat: string) => void;
};

const SideBar: React.FC<SideBarProps> = ({ category, selected, onSelect }) => {
  return (
    <div className="flex flex-col w-1/6 h-full bg-amber-800 p-4 text-white">
      <div className="text-2xl font-bold mb-4">Category</div>
      {category.map((item) => (
        <div
          key={item}
          onClick={() => onSelect(item)}
          className={`mb-2 cursor-pointer px-2 py-1 rounded transition-colors
            ${selected === item ? "bg-amber-600" : "hover:bg-amber-700"}`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
