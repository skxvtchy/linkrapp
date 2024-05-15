import React from "react";
import { FiLink2 } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 flex flex-col items-center justify-between lg:flex-row">
      <div className="flex space-x-8">
        <h6 className="font-semibold text-[#888]">Claim</h6>
        <h6 className="font-semibold text-[#888]">Policy</h6>
        <h6 className="font-semibold text-[#888]">Terms</h6>
        <h6 className="font-semibold text-[#888]">Legal</h6>
      </div>
    </div>
  );
};

export default Footer;
