import React from "react";

type Category = {
  category: string[]; // ลิงก์เมนู
};

const SideBar: React.FC<Category> = ({ category }) => {
  return (
    <div className="flex flex-col w-1/6 h-full bg-amber-800 p-4 text-white">
      <div className="text-2xl font-bold mb-4">Category</div>
      {category.map((item, index) => (
        <div key={index} className="mb-2">
          {item}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
