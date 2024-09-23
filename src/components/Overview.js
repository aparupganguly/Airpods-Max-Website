// src/components/Details.js

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

const Overview = ({ sceneRef, model }) => {
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
                onEnter: () => setWireframe(true),
                onLeaveBack: () => setWireframe(false),
                onLeave: () => setWireframe(false),
                onEnterBack: () => setWireframe(true),
            }
        });

        // Rotate to front view
        // tl.to(sceneRef.current.rotation, { y: 0, duration: 1 });

        tl.to(model.position, { x: 0, y: 0, z: 0 }, 0);

        // Store original materials and set wireframe
        function setWireframe(isWireframe) {
            model.traverse((child) => {
                if (child.isMesh) {
                    if (isWireframe) {
                        originalMaterials.current[child.uuid] = child.material;
                        child.material = new THREE.MeshStandardMaterial({
                            color: '#474747',
                            wireframe: true,
                            linewidth: 2,

                        });
                    } else {
                        child.material = originalMaterials.current[child.uuid];
                    }
                }
            });
        }

        return () => {
            tl.kill();
            setWireframe(false); // Reset materials when component unmounts
        };
    }, [sceneRef, model]);

    return (
        <div ref={sectionRef} className='DetailsSection' style={{ height: '100vh', color: 'black' }}>
            <p className="OverViewHeader">Take a closer look.</p>
            <li className="OverViewSubHeader">Personalised Spatial Audio</li>
            <li className="OverViewSubHeader">Adaptive EQ tailors sound to the bespoke</li>
            <li className="OverViewSubHeader">Transparency mode.</li>
        </div>
    );
};

export default Overview;