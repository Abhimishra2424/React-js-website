import React from "react";
import web from "../src/img/Endless-Constellation.svg";
import Common from "./Common";

function Home() {
  return (
    <>
      <Common 
        name=" Welcome to Home page"
        imgsrc={web}
        visit="/service"
        btnname="Get Started "
      />
    </>
  );
}

export default Home;
