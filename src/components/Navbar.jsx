import React, { useState } from "react";
import { FiLink2 } from "react-icons/fi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="h-24 max-w-[1240px] mx-auto px-4 text-white flex justify-between items-center">
      <div className="flex items-center">
        <FiLink2
          size={30}
          style={{ transform: "rotate(-45deg)", marginRight: "5px" }}
        />
        <h1 className="text-3xl font-bold text-[white]">LINKR</h1>
      </div>
      <button className="bg-[white] w-[120px] rounded-full font-medium py-3 text-black">
        Download
      </button>
    </div>
  );
};

export default Navbar;
