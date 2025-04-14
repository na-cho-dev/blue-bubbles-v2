import { ServiceCardType } from "../types/AppTypes";

const ServiceCard = ({ img, title, description }: ServiceCardType) => {
  return (
    <div className="bg-primary-dull rounded-md shadow-md">
      <img className="rounded-t-md w-150 h-450" src={img} alt="" />
      <div className="flex flex-col gap-3 p-5">
        <p className="text-2xl text-center text-white font-bold">{title}</p>
        <p className="text-white text-l font-normal font-tetiary text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
