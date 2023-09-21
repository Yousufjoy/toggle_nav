import React from "react";
import PropTypes from "prop-types";

const Nav = ({ route }) => {
  const { id, path, name } = route;
  console.log(route);
  return (
    <div>
      <li className="mr-12 hover:bg-yellow-500 px-6" key={id}>
        <a href={path}>{name}</a>
      </li>
    </div>
  );
};

Nav.PropTypes = {
  route: PropTypes.object,
};
export default Nav;
