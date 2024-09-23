import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";
import SceneManager from "./components/SceneManager";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Overview from "./components/Overview";
import FinalSection from "./components/FinalSection";

const App = () => {


  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".DetailsSection",
      start: "top center",
      end: "bottom bottom",

      onEnter: () =>
        gsap.to("body", { backgroundColor: "#F2F2F2", duration: 0.5 }),
      onLeave: () =>
        gsap.to("body", { backgroundColor: "#080808", duration: 0.5 }),
      onLeaveBack: () =>
        gsap.to("body", { backgroundColor: "#080808", duration: 0.5 }),
      onEnterBack: () =>
        gsap.to("body", { backgroundColor: "#F2F2F2", duration: 0.5 }),
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <ReactLenis root>
      <div className='App'>
        <SceneManager>
          <Hero />
          <InfoSection />
          <Overview />
          <FinalSection />
        </SceneManager>
      </div>
    </ReactLenis>
  );
};

export default App;