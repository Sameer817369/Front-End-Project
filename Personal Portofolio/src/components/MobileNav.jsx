import { useState } from "react";
import { cross, hamburger, github } from "../assets/icons";
import { navLinks } from "../constants";

const MobileNav = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  const handleClick = () => {
    setOpenNavigation(false);
  };

  return (
    <div>
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleNavigation}
        className={`relative z-50 p-2 text-white xl:hidden lg:hidden`}
      >
        <img
          src={openNavigation ? cross : hamburger}
          alt="hamburger"
          width={25}
          height={25}
        />
      </button>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-slate-900 text-white transform transition-transform duration-500 ease-in-out z-40 ${
          openNavigation ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-evenly h-full cursor-pointer">
          {navLinks.map((item) => (
            <li
              className="hover:opacity-60 transition-opacity duration-300 active:opacity-[1] list-none"
              key={item.label}
            >
              <a
                onClick={handleClick}
                href={item.link}
                target={item.target}
                rel={item.rel}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
          <div>
            <a
              className="flex gap-2 hover:opacity-[0.7] transition-opacity cursor-pointer "
              href="https://github.com/Sameer817369"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                width={85}
                height={25}
                className=" bg-white rounded-full"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
