import React from "react";

const Feature = ({ features }) => {
  return (
    <div className="space-y-5">
      {features.map((feature, index) => (
        <div key={index} className="flex gap-4">
          <span>&#10003;</span> <p>{feature}</p>
        </div>
      ))}
    </div>
  );
};

export default Feature;
