import { AppContainerType, InfoDetail } from "../types/AppTypes";

interface InfoProps extends AppContainerType {
  infoDetail: InfoDetail;
}

const Info = ({ containerStyle, infoDetail }: InfoProps) => {
  return (
    <section
      className="relative py-16 px-7 text-center"
      style={{
        background: infoDetail.background,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      {infoDetail.background.startsWith("url") ? (
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      ) : (
        ""
      )}

      {/* Content */}
      <div className={`${containerStyle} relative z-1`}>
        <h1 className="my-1 mx-0 text-3xl md:text-4xl text-white font-semibold font-secondary">
          {infoDetail.title}
        </h1>
        <button className="bg-primary text-white py-2 md:py-3 px-3 md:px-4 mt-5 m-2 rounded-md">
          <a href="#services">{infoDetail.buttonText}</a>
        </button>
        {infoDetail.buttonTextTwo !== "" ? (
          <button className="text-primary-dull bg-secondary py-2 md:py-3 px-3 md:px-4 mt-5 m-2 rounded-md">
            <a href="#services">{infoDetail.buttonTextTwo}</a>
          </button>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Info;
