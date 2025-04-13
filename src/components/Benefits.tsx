import { AppContainerType } from "../types/AppTypes";
import {
  faClock,
  faCogs,
  faDollarSign,
  faGem,
  faHeadset,
  faLeaf,
  faRocket,
  faShieldAlt,
  faSlidersH,
} from "@fortawesome/free-solid-svg-icons";
import BenefitCard from "./BenefitCard";

const Benefits = ({ containerStyle }: AppContainerType) => {
  return (
    <section className="py-7">
      <div className={`${containerStyle}`}>
        <h2 className="text-center text-primary-dull text-2xl md:text-[1.8em] font-extrabold py-1 px-2 my-7">
          Why Choose Blue Bubbles?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          <BenefitCard
            title={"Efficiency & Proficiency"}
            description={
              "Blue Bubbles ensures top-notch cleaning services with a focus on delivering results efficiently and with professional expertise."
            }
            cardIcon={faRocket}
          />

          <BenefitCard
            title={"Real-time Assistance"}
            description={
              "Customers can rely on real-time support for inquiries, bookings, and updates, ensuring a seamless service experience."
            }
            cardIcon={faHeadset}
          />

          <BenefitCard
            title={"Readiness & Punctuality"}
            description={
              "We value your time and ensure our team is always prepared and punctual for every appointment."
            }
            cardIcon={faClock}
          />

          <BenefitCard
            title={"Eco-friendly Cleaning Solutions"}
            description={
              "We use environmentally friendly cleaning products and methods to protect your health and the planet."
            }
            cardIcon={faLeaf}
          />

          <BenefitCard
            title={"Customizable Cleaning Plans"}
            description={
              "Tailor our services to meet your specific needs, ensuring you get exactly what you want from our cleaning solutions."
            }
            cardIcon={faSlidersH}
          />

          <BenefitCard
            title={"Advanced Cleaning Technology"}
            description={
              "Our team uses cutting-edge tools and techniques to deliver superior cleaning results every time."
            }
            cardIcon={faCogs}
          />

          <BenefitCard
            title={"Trusted & Verified Professionals"}
            description={
              "Our staff is thoroughly vetted and trained, giving you peace of mind with reliable and trustworthy service."
            }
            cardIcon={faShieldAlt}
          />

          <BenefitCard
            title={"Affordable Pricing"}
            description={
              "Enjoy premium cleaning services at prices that fit your budget, without compromising on quality."
            }
            cardIcon={faDollarSign}
          />
          <BenefitCard
            title={"Comprehensive Cleaning Excellence"}
            description={
              "Blue Bubbles combines all these qualities to deliver a complete, reliable, and exceptional cleaning experience tailored to your needs."
            }
            cardIcon={faGem}
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
