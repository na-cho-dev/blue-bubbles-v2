import { assets } from "../assets/assets";
import { AppContainerType } from "../types/AppTypes";

const Hero = ({ containerStyle }: AppContainerType) => {
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
              Enjoy A <span className="text-secondary">Clean Atmosphere</span>{" "}
              Always
            </p>
            <p className="font-secondary text-white text-lg md:text-xl mt-4 font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
              accusantium necessitatibus beatae! Cumque commodi consequuntur
              esse consectetur adipisicing elit. Quibusdam perferendis similique
              aliquid. Aperiam dolorem inventore distinctio, nisi ipsam maxime
              vero.
            </p>
            <button className="mt-4 bg-secondary text-white px-6 py-3 rounded-md hover:bg-white hover:text-secondary transition-all">
              <a href="">Book A Services Now</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
