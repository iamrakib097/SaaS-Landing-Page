import React from "react";

const TestimonialCard = ({ text, imageSrc, name, username }) => {
  return (
    <div className="flex border  py-10 mx-5  lg:mx-0  rounded-xl mt-10 shadow-lg  md:w-[300px] lg:justify-end px-5 h-auto md:px-10 items-start ">
      <div className=" flex gap-6 justify-between flex-col">
        <p>{text}</p>
        <div className="flex items-center justify-start gap-4 ">
          <div>
            <img src={imageSrc} alt="" width={48} height={48} />
          </div>
          <div>
            <p className="font-semibold">{name}</p>
            <p>{username}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
