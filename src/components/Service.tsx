import { assets } from "../assets/assets";
import { AppContainerType } from "../types/AppTypes";
import ServiceCard from "./ServiceCard";

const Service = ({ containerStyle }: AppContainerType) => {
  return (
    // className="bg-cover bg-no-repeat bg-center h-[100vh] flex items-center justify-center"
    //   style={{ backgroundImage: `url(${assets.cleaningImg1})` }}
    <section
      id="services"
      className="relative py-7 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${assets.cleaningImg1})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className={`${containerStyle} relative z-1`}>
        <div className="w-fit">
          <h2 className="text-secondary text-2xl md:text-[1.8em] font-extrabold py-1 px-2">
            Our Services
          </h2>
          <p className="py-1 px-3 bg-secondary text-primary-dull rounded-md">
            Discover our wide range of services that we offer to our clients.
          </p>
        </div>

        <div className="">
          <p className="text-white font-normal font-tetiary my-5">
            Our comprehensive cleaning services are designed to meet all your
            needs, whether for your home, office, or post-construction projects.
            With a focus on quality, efficiency, and eco-friendly solutions, we
            ensure every space is spotless, organized, and welcoming. Explore
            our range of services tailored to provide exceptional results for
            every cleaning requirement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ServiceCard
              img={assets.cleaningImg6}
              title={"General Housekeeping & Maintenance"}
              description={
                "Regular cleaning and upkeep services for homes and offices, ensuring a clean, organized, and well-maintained environment."
              }
            />

            <ServiceCard
              img={assets.cleaningImg9}
              title={"Post-Construction & Renovation Cleaning"}
              description={
                "Specialized cleaning to remove dust, debris, and construction residue after building or renovation projects, leaving spaces move-in ready."
              }
            />

            <ServiceCard
              img={assets.cleaningImg7}
              title={"Carpet, Upholstery & Deep Cleaning"}
              description={
                "Intensive cleaning for carpets, rugs, upholstery, and neglected areas to remove stains, allergens, and odors, restoring freshness and hygiene."
              }
            />

            <ServiceCard
              img={assets.cleaningImg8}
              title={"Residential & Move-In/Move-Out Cleaning"}
              description={
                "Tailored cleaning services for homes, including detailed cleaning during transitions to ensure spaces are spotless for new occupants."
              }
            />

            <ServiceCard
              img={assets.cleaningImg10}
              title={"Janitorial & Office Cleaning"}
              description={
                "Professional cleaning services for offices and commercial spaces, promoting a tidy and productive work environment."
              }
            />

            <ServiceCard
              img={assets.cleaningImg11}
              title={"Window & Glass Cleaning"}
              description={
                "Streak-free cleaning for windows, glass doors, and mirrors to enhance the brightness and appearance of your space."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
