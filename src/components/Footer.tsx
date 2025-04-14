import { Link } from "react-router-dom";
import { AppContainerType } from "../types/AppTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleUp,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { navLinks } from "../assets/assets";

const Footer = ({ containerStyle }: AppContainerType) => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 1000) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
    <footer className="bg-primary-dull text-white p-10 pb-1">
      <div className={`${containerStyle}`}>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="">
            <h2 className="text-2xl font-bold font-secondary">
              <Link to="#home">
                <span className="text-primary">Blue Bubbles</span> Limited
              </Link>
            </h2>
            <p className="text-sm font-tetiary font-light">
              Cleaning you can trust always...
            </p>
          </div>

          <div className="md:m-0 m-5">
            <h3 className="text-center">Follow/Contact Us</h3>
            <div className="text-base flex justify-center items-center gap-6 m-2 list-none">
              <Link to="http://">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link to="http://">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link to="http://">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link to="http://">
                <FontAwesomeIcon icon={faWhatsapp} />
              </Link>
              <Link to="http://">
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center items-center gap-2 list-none text-sm">
            {Object.values(navLinks).map((link, ind) => (
              <li key={ind} className="hover:text-secondary">
                <Link to={link.href} onClick={() => handleLinkClick(link.href)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </div>
        </div>
        <p className="text-sm text-center font-tetiary font-light m-3">
          {`Blue Bubbles Limited Copyright © 2022 - ${new Date().getFullYear()} All rights Reserved.`}
        </p>
        <hr />
        <p className="text-sm text-center font-tetiary font-light m-3">
          Developed by{" "}
          <Link to="http://nachodev.netlify.app" className="text-secondary">
            nachodev
          </Link>
        </p>

        <div
          className={`fixed right-5 p-5 transition-all duration-500 ${
            showScrollToTop ? "bottom-5 opacity-100" : "bottom-0 opacity-0"
          }`}
        >
          <Link to="#home" onClick={handleScrollToTop}>
            <FontAwesomeIcon
              icon={faArrowAltCircleUp}
              className="text-3xl text-primary hover:text-secondary transition duration-300"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
