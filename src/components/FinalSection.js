// src/components/Details.js

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

const FinalSection = ({ sceneRef, model }) => {
    const sectionRef = useRef();
    const originalMaterials = useRef({});

    useEffect(() => {
        if (!model || !sceneRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                end: "bottom top",
                scrub: true,

            }
        });



        tl.to(model.scale, { x: 1.5, y: 1.5, z: 1.5, duration: 1 });


        return () => {
            tl.kill();

        };
    }, [sceneRef, model]);

    return (
        <div className='finalSectionContainer'>
            <p className="keepExploring">Keep exploring AirPods.</p>
            <p className="subPrice">The ultimate over‑ear listening experience.

            </p>
            <p className="price">$549.00*.
            </p>
        </div>
    );
};

export default FinalSection;