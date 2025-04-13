import logo from "./blue_bubbles_logo.png";
import cleaningImg1 from "./cleaningImg1.jpg";
import cleaningImg2 from "./cleaningImg2.jpg";
import cleaningImg3 from "./cleaningImg3.jpg";
import cleaningImg4 from "./cleaningImg4.jpg";
import cleaningImg5 from "./cleaningImg5.jpg";
import cleaningImg6 from "./cleaningImg6.jpg";
import cleaningImg7 from "./cleaningImg7.jpg";
import cleaningImg8 from "./cleaningImg8.jpg";
import bannerImg1 from "./bannerImg1.jpg";
import bannerImg2 from "./bannerImg2.jpg";
import bannerImg3 from "./bannerImg3.jpg";
import bannerImg4 from "./bannerImg4.jpg";
import { InfoDetail } from "../types/AppTypes";

export const assets = {
  logo,
  cleaningImg1,
  cleaningImg2,
  cleaningImg3,
  cleaningImg4,
  cleaningImg5,
  cleaningImg6,
  cleaningImg7,
  cleaningImg8,
  bannerImg1,
  bannerImg2,
  bannerImg3,
  bannerImg4,
};

export const navLinks = {
  home: {
    name: "Home",
    href: "#home",
  },
  about: {
    name: "About",
    href: "#about",
  },
  services: {
    name: "Services",
    href: "#services",
  },
  contact: {
    name: "Contact",
    href: "#contact",
  },
  getQuote: {
    name: "Get Quote",
    href: "#getQuote",
  },
};

export const infoDetails: InfoDetail[] = [
  {
    title: "We take care of our customers from start to finish",
    background:
      "linear-gradient(135deg, rgba(0, 10, 44, 1) 28%, rgba(9, 85, 121, 1) 75%, rgba(255, 148, 109, 1) 100%",
    buttonText: "Get Quote",
    buttonTextTwo: "Our Sevice",
  },
  {
    title: "Are you ready already? Get a Quote Now",
    background: `url(${assets.bannerImg3})`,
    buttonText: "Get Quote",
    buttonTextTwo: "",
  },
  {
    title: "Are you ready already? Get in touch with us now.",
    background: "",
    buttonText: "Call Us Now",
    buttonTextTwo: "",
  },
  {
    title: "Anybody cannot just clean and get it right. Choose Us",
    background: "",
    buttonText: "Call Us Now",
    buttonTextTwo: "",
  },
];
