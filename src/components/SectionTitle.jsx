import React from "react";

const SectionTitle = ({ title = "Your title" }) => {
  return (
    <h1 className="text-4xl text-center md:text-5xl md:leading-[60px] font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5 tracking-tighter">
      {title}
    </h1>
  );
};

export default SectionTitle;
