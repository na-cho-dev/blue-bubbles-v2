import { useEffect, useState } from "react";
import { assets, navLinks } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { AppContainerType } from "../types/AppTypes";
import { Link } from "react-router-dom";

const Navbar = ({ containerStyle }: AppContainerType) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    const handleScrollHide = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 1000) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavbarOpen(false);
      }
    };

    const handleScroll = () => {
      // console.log("Scroll position:", window.scrollY);
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScrollHide);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScrollHide);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleLinkClick = (to: string) => {
    const targetElement = document.querySelector(to);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className={`fixed w-full z-10 transition-all duration-500 ${
        isScrolled
          ? "bg-primary-dull border-primary-dull border-b-4 shadow-lg py-0"
          : "bg-tetiary border-primary border-b-4 py-2"
      } ${isVisible ? "top-0" : "-top-full"}`}
    >
      {/* Mobile Menu */}
      {
        <div
          className={`fixed left-0 w-full h-full bg-tetiary-dull flex flex-col justify-center items-center gap-20 py-4 transition-all duration-500 z-10 ${
            navbarOpen ? "top-0" : "-top-full"
          }`}
        >
          {Object.values(navLinks).map((link, ind) => (
            <li
              key={ind}
              className={
                link.name === "Get Quote"
                  ? "bg-secondary text-white list-none px-4 py-2 rounded-md"
                  : "text-white list-none hover:text-secondary transition-all"
              }
              onClick={() => {
                handleLinkClick(link.href);
                toggleNavbar();
              }}
            >
              <Link to={link.href}>{link.name}</Link>
            </li>
          ))}
        </div>
      }

      {/* Nav Bar */}
      <nav
        className={`${containerStyle} relative py-4 flex justify-between items-center`}
      >
        <div className="display flex items-center gap-2">
          <img width="50px" height="50px" src={assets.logo} alt="" srcSet="" />
          <h2 className="text-2xl font-bold text-white">
            <Link to="">Blue Bubbles</Link>
          </h2>
        </div>

        {/* Desktop Links */}
        <div className="gap-4 items-center hidden md:flex">
          {Object.values(navLinks).map((link, ind) => (
            <li
              key={ind}
              className={
                link.name === "Get Quote"
                  ? "bg-secondary text-white list-none px-4 py-2 rounded-md"
                  : "text-white list-none hover:text-secondary transition-all"
              }
              onClick={() => {
                handleLinkClick(link.href);
              }}
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-10">
          <button onClick={toggleNavbar} className="text-white">
            {navbarOpen ? (
              <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
