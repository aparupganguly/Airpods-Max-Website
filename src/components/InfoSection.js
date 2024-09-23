import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InfoSection = ({ sceneRef, model }) => {
    const sectionRef = useRef();

    useEffect(() => {
        if (!sceneRef.current || !model) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                end: "bottom top",
                scrub: true,
            }
        });

        tl.to(model.scale, { x: 1.5, y: 1.5, z: 1.5, duration: 1 });
        tl.to(sceneRef.current.rotation, { z: Math.PI / 4, duration: 1 }, 0);

        return () => {
            tl.kill();
        };
    }, [sceneRef, model]);

    return (
        <div ref={sectionRef} className='InfoSection' style={{ height: '100vh' }}>
            <p className="infoHeader">A radically original composition.</p>
            <li className="OverViewSubHeader">Pro-level Active Noise Cancellation</li>
            <li className="OverViewSubHeader">Automatic Switching, on-head detection</li>
            <li className="OverViewSubHeader">Always-on Siri</li>
        </div>
    );
};
export default InfoSection;