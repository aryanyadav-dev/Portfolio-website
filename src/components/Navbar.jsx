import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { close, menu, aryanyadav } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const sidebarVariants = {
    hidden: { 
      x: "100%", 
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: { 
      x: 0, 
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <nav className="w-full flex justify-between items-center h-[80px] px-4 relative z-50"> 
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
            <a href={`#${nav.id}`} onClick={() => setToggle(false)}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain z-50"
          onClick={() => setToggle((prev) => !prev)}
        />

        <AnimatePresence>
          {toggle && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sidebarVariants}
              className="fixed top-0 right-0 w-[70%] h-full bg-primary/95 
              flex flex-col items-center justify-start pt-24 
              transition-all duration-300 ease-in-out z-40"
            >
              <ul className="list-none flex flex-col items-center justify-center space-y-6">
                {navLinks.map((nav) => (
                  <motion.li
                    key={nav.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.2 }}
                    className={`font-poppins
                    font-normal
                    cursor-pointer
                    text-[16px] /* Reduced size from 24px */
                    text-white
                    relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 
                    after:bg-teal-200 after:transition-all after:duration-300 hover:after:w-full`}
                  >
                    <a 
                      href={`#${nav.id}`} 
                      onClick={() => setToggle(false)}
                    >
                      {nav.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
