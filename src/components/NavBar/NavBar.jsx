import { useState } from "react";
import Nav from "../Nav/Nav";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav className="text-black bg-yellow-200 p-6">
      <div
        className="md:hidden"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open == true ? (
          <AiOutlineClose className="text-2xl " />
        ) : (
          <AiOutlineMenu className="text-2xl " />
        )}
      </div>
      <ul
        className={`md:flex absolute duration-1000 px-6 ${
          open ? "" : "hidden"
        } bg-yellow-200 shadow-lg`}
      >
        {routes.map((route) => {
          return <Nav route={route} />;
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
