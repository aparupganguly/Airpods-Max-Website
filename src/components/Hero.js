import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ sceneRef, model }) => {
  const sectionRef = useRef();

  useEffect(() => {
    if (!sceneRef.current || !model) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to(sceneRef.current.rotation, {
      y: Math.PI * 2,
      duration: 1,
    });
    tl.to(model.position, { x: 0, y: 0, z: 0 }, 0);

    return () => {
      tl.kill();
    };
  }, [sceneRef, model]);

  return (
    <div ref={sectionRef} className='HeroContainer'>
      <p className='headingText'>Airpods Max®</p>
      <p className='heroText'>Scroll Down To See the Magic</p>
    </div>
  );
};

export default Hero;
