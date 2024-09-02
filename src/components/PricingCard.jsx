import React from "react";
import PopularBtn from "./PopularBtn";
import Button from "./Button";
import Feature from "./Feature";

const PricingCard = ({
  title,
  monthlyPrice,
  buttonText,
  popular,
  inverse,
  features,
}) => {
  return (
    <div
      className={`border  py-10 mx-10  lg:mx-0  rounded-xl mt-10 shadow-lg w-[320px] md:w-[400px] lg:w-auto h-auto lg:h-full lg:justify-end px-5 md:px-10 items-start ${
        inverse && "bg-black text-white"
      }`}
    >
      <div className="flex flex-col gap-6">
        <div
          className={`${
            popular ? "flex" : ""
          } gap-32 justify-center items-center`}
        >
          <p className="text-slate-500">{title}</p>
          {popular && <PopularBtn />}
        </div>
        <div>
          <p>
            <span className="text-3xl">${monthlyPrice}</span>
            <span className="text-sm text-slate-500">/monthly</span>
          </p>
        </div>
        <Button
          wide={true}
          text={buttonText}
          type={inverse ? "inverted" : ""}
        />
        <Feature features={features} />
      </div>
    </div>
  );
};

export default PricingCard;
