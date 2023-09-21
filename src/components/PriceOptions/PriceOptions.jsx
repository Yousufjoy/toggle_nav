import React from "react";
import PriceOption from "../PriceOption.jsx/PriceOption";

const PriceOptions = () => {
  const data = [
    {
      id: 1,
      name: "Basic Membership",
      price: "$29.99/month",
      features: [
        "Access to gym equipment",
        "Unlimited cardio workouts",
        "Locker room access",
        "24/7 gym access",
        "Basic fitness classes",
        "Access to group fitness classes",
        "Online workout tutorials",
      ],
    },
    {
      id: 2,
      name: "Silver Membership",
      price: "$49.99/month",
      features: [
        "All features of Basic Membership",
        "Personalized workout plans",
        "Nutritional guidance",
        "Access to swimming pool",
        "Advanced fitness classes",
        "Access to yoga and Pilates classes",
        "Fitness assessment and progress tracking",
      ],
    },
    {
      id: 3,
      name: "Gold Membership",
      price: "$79.99/month",
      features: [
        "All features of Silver Membership",
        "Access to sauna and spa",
        "Priority class booking",
        "One-on-one personal training session",
        "Access to specialized equipment",
        "Massage and therapy sessions",
        "Exclusive access to VIP events",
      ],
    },
  ];
  return (
    <div className="m-12">
      <h2 className="md:text-5xl text-3xl"> Best Price in the town</h2>
      <div className="grid md:grid-cols-3 gap-6 grid-cols-2 ">
        {data.map((option) => {
          return <PriceOption option={option} />;
        })}
      </div>
    </div>
  );
};

export default PriceOptions;
