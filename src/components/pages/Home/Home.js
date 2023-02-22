import React from "react";
import FomoMagazine from "./FomoMagazine/FomoMagazine";
import Hero from "./Hero/Hero";
import News from "./News/News";
import Subscribe from "./Subscribe/Subscribe";
import Subscribes from "./Subscribes/Subscribes";
import Trust from "./Trust/Trust";

const Home = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Subscribes />
      <Trust />
      {/* <News /> */}
      <Subscribe />
    </div>
  );
};

export default Home;
