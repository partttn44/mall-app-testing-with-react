import React from "react";

type AppbarProps = {
  title?: string; // ชื่อเว็บไซต์
  links?: string[]; // ลิงก์เมนู
  showSearch?: boolean; // แสดง search bar หรือไม่
};

const Appbar: React.FC<AppbarProps> = ({
  title = "App name",
  links = ["Service", "About", "Contact"],
  showSearch = true,
}) => {
  return (
    <header className="w-full h-[10vh] bg-[#1B1B1B] shadow-md flex items-center px-6">
      <div className="text-3xl font-bold text-white whitespace-nowrap">
        {title}
      </div>

      {showSearch && (
        <input
          type="text"
          placeholder="Search..."
          className="w-full mx-4 px-7 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
      )}

      <div className="w-2/6 flex justify-around items-center">
        {links.map((link, idx) => (
          <div key={idx} className="text-xl text-white">
            {link}
          </div>
        ))}
      </div>
    </header>
  );
};

export default Appbar;
