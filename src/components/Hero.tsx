import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContainerType } from "../types/AppTypes";

const Hero = ({ containerStyle }: AppContainerType) => {
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
    <section
      className="bg-cover bg-no-repeat bg-center h-[100vh] flex items-center justify-center"
      style={{ backgroundImage: `url(${assets.cleaningImg2})` }}
      id="home"
    >
      {/* Dark Overlay */}
      <div className="absolute h-[100vh] inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className={`${containerStyle}  relative z-1`}>
        <div className="grid grid-cols-3 gap-4">
          <div className="md:col-span-2 col-span-3 bg-tetiary p-5 rounded-md">
            <p className="text-4xl md:text-5xl text-white font-bold">
              Experience a{" "}
              <span className="text-secondary">Cleaner, Healthier</span> Space
            </p>
            <p className="font-secondary text-white text-lg md:text-xl mt-4 font-medium">
              At Blue Bubbles Limited, we specialize in creating spotless,
              organized, and welcoming spaces for homes, offices, and commercial
              properties. Let us handle the cleaning so you can focus on what
              matters most.
            </p>
            <button className="mt-4 bg-secondary text-white px-6 py-3 rounded-md hover:bg-white hover:text-secondary transition-all">
              <Link
                onClick={() => {
                  handleLinkClick("#services");
                }}
                to="#services"
              >
                Explore Our Services
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
