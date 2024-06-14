import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import logo from "/images/Icon.png";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //set Toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // useEffect hook?
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
      window.addEventListener("scroll", handleScroll);
    };
  });

  // NavItems Array
  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testimonials", path: "testimonials" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300 "
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img
              src={logo}
              alt="logo"
              className="w-10 inline-block items-center"
            />
            <span className="text-[#263238]">NEXCENT</span>
          </a>
          {/* Nav Items In large Devices */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                key={path}
                spy={true}
                smooth={true}
                offset={-100}
                className="block text-base text-black hover:text-brandPrimary first:font-medium cursor-pointer"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* btns for larger devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center text-brandPrimary hover:text-black"
            >
              Login
            </a>
            <button className="bg-brandPrimary text-white py-2 px-4 translate-all duration-300 rounded hover:bg-neutralDGrey">
              Sign Up
            </button>
          </div>

          {/* menu for mobile devices  */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-brandPrimary"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-brandPrimary" />
              ) : (
                <FaBars className="h-6 w-6 text-brandPrimary" />
              )}
            </button>
          </div>
        </div>

        {/* nav items for mobile */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0 " : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              key={path}
              spy={true}
              smooth={true}
              offset={-100}
              className="block text-base text-black hover:text-white first:font-medium cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
