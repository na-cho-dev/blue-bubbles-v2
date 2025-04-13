import { infoDetails } from "./assets/assets";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Hero from "./components/Hero";
import CTAInfo from "./components/CTAInfo";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

const App = () => {
  const containerStyle = "max-w-[1152px] mx-auto my-0 px-4";

  return (
    <div>
      <Navbar containerStyle={containerStyle} />
      <Hero containerStyle={containerStyle} />
      <CTAInfo containerStyle={containerStyle} infoDetail={infoDetails[0]} />
      <About containerStyle={containerStyle} />
      <CTAInfo containerStyle={containerStyle} infoDetail={infoDetails[1]} />
      <Benefits containerStyle={containerStyle} />
      <Service containerStyle={containerStyle} />
      <CTAInfo containerStyle={containerStyle} infoDetail={infoDetails[2]} />
    </div>
  );
};

export default App;
