import React from "react";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className=" bg-blue-300 flex flex-col  rounded-md p-4 text-black ">
      <h2 className=" text-center">
        <span className="md:text-5xl text-2xl font-extrabold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl text-center my-8">{name}</h4>
      <div className="pl-6 flex-grow">
        {features.map((feature) => {
          return <Feature feature={feature} />;
        })}
        <button className="mt-12 bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-green-950">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default PriceOption;
