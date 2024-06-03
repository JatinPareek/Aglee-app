import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //set toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //set sticky nav
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //nav-items
  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Services", path: "services" },
    { link: "Pricing", path: "pricing" },
  ];

  return (
    <header className=" w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 mt-8">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <ul className="md:flex space-x-16 font-4xl poppins-regular text-black hidden">
            <a href="">
              <img src={logo} alt="" />
            </a>
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className={`text-customblack hover:text-gray-900 poppins font-semibold cursor-pointer ${
                  path === "home" ? "text-customgreen" : ""
                }`}
              >
                {link}
              </Link>
            ))}
          </ul>

          <div className="space-x-12 hidden lg:flex items-center">
            <button className="bg-customviolet text-white py-2 px-4 rounded hover:bg-customgray transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
