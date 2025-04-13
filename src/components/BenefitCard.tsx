import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BenefitCardType } from "../types/AppTypes";

const BenefitCard = ({ title, description, cardIcon }: BenefitCardType) => {
  return (
    <div className="bg-[#cbcfdd] rounded-lg p-7 flex flex-col items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300">
      <FontAwesomeIcon icon={cardIcon} className="text-5xl my-2 text-primary" />
      <h3 className="text-2xl font-semibold text-primary-dull">{title}</h3>
      <p className="font-normal font-tetiary">{description}</p>
    </div>
  );
};

export default BenefitCard;
