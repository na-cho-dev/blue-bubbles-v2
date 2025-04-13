import { infoDetails } from "./assets/assets";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Navbar from "./components/Navbar";

const App = () => {
  const containerStyle = "max-w-[1152px] mx-auto my-0 px-4";

  return (
    <div>
      <Navbar containerStyle={containerStyle} />
      <Hero containerStyle={containerStyle} />
      <Info containerStyle={containerStyle} infoDetail={infoDetails[0]} />
      <About containerStyle={containerStyle} />
      <Info containerStyle={containerStyle} infoDetail={infoDetails[1]} />
      <Benefits containerStyle={containerStyle} />
    </div>
  );
};

export default App;
