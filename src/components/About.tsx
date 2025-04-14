import { assets } from "../assets/assets";
import { AppContainerType } from "../types/AppTypes";

const About = ({ containerStyle }: AppContainerType) => {
  return (
    <section className="py-7" id="about">
      <div className={`${containerStyle}`}>
        <div className="w-fit">
          <h2 className="text-primary text-2xl md:text-[1.8em] font-extrabold py-1 px-2">
            About Us
          </h2>
          <p className="py-1 px-3 bg-primary text-primary-dull rounded-md">
            Who are we? Want to know more about us, be our guest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 my-2 gap-5">
          <div className="flex flex-col gap-3">
            <p className="font-tetiary font-light">
              Blue Bubbles Limited is a trusted cleaning service provider
              dedicated to delivering exceptional cleaning solutions for homes,
              offices, and commercial spaces. With a focus on quality,
              efficiency, and eco-friendly practices, we ensure every space we
              touch is spotless, organized, and welcoming. Our team of
              experienced professionals is committed to exceeding customer
              expectations, providing tailored cleaning plans to meet the unique
              needs of each client. We take pride in our attention to detail,
              reliability, and commitment to using safe, environmentally
              friendly products. At Blue Bubbles, we believe in creating a clean
              and healthy environment for our clients, allowing them to focus on
              what matters most to them. Whether it's a one-time deep clean or
              regular maintenance, we are here to make your space shine. Trust
              us to transform your home or office into a pristine oasis, where
              cleanliness meets comfort. Experience the Blue Bubbles difference
              today and let us take care of your cleaning needs with
              professionalism and care.
            </p>

            <div className="">
              <p className="text-primary text-xl md:text-2xl font-extrabold">
                Our Goal
              </p>
              <p className="font-tetiary font-light">
                Our mission is to redefine cleanliness by providing reliable,
                professional, and sustainable cleaning services. We aim to
                exceed customer expectations by tailoring our services to meet
                individual needs while maintaining the highest standards of
                hygiene and care.
              </p>
            </div>
          </div>
          <div className="">
            <img className="rounded-md" src={assets.cleaningImg3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
