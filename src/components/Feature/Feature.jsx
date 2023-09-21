import { GiCheckMark } from "react-icons/gi";

const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex gap-3">
        <GiCheckMark className=" text-green-200" /> {feature}
      </p>
    </div>
  );
};

export default Feature;
