import { useState } from "react";
import { close, menu, aryanyadav } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center h-[80px] px-4"> 
      <a href="#home" className="flex items-center">
        <img
          src={aryanyadav}
          alt="Aryan Yadav"
          className="w-[300px] h-[180px] object-contain"
          style={{ 
            marginLeft: "-80px",
            transform: "translateY(10px)"
          }}
        />
      </a>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins
            font-normal
            cursor-pointer
            text-[16px]
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
            text-white hover:text-teal-200
            relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 
            after:bg-teal-200 after:transition-all after:duration-300 hover:after:w-full`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient
          absolute top-20 right-0 mx-4 my-2
          min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins
                font-normal
                cursor-pointer
                text-[16px]
                ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}
                text-white
                relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 
                after:bg-teal-200 after:transition-all after:duration-300 hover:after:w-full`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;