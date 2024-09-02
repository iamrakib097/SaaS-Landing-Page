import React from "react";

const SectionPara = ({ para = "your para" }) => {
  return (
    <div className="md:px-[70px]">
      <p className="text-center text-[22px] leading-[30px] tracking-tight mt-5 text-[#010D3E]">
        {para}
      </p>
    </div>
  );
};

export default SectionPara;
