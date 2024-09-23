// src/components/SceneManager.js

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Model } from "./Model";

const ControlledOrbitControls = ({ isScrolling }) => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = !isScrolling;
    }
  }, [isScrolling]);

  return (
    <OrbitControls
    // ref={controlsRef}
    // args={[camera, gl.domElement]}
    // autoRotate={!isScrolling}
    // autoRotateSpeed={2}
    // enableDamping
    // dampingFactor={0.03}
    // enableZoom={false}
    />
  );
};

const SceneManager = ({ children }) => {
  const sceneRef = useRef();
  const [model, setModel] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);




  return (
    <>
      <Canvas
        shadows
        camera={{
          position: [25, 0, 5],
          fov: 13,
        }}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      >
        <ambientLight intensity={1} />
        <Environment preset='studio' environmentIntensity={0.3} />
        <group ref={sceneRef}>
          <Model position={[0, 0, 0]} ref={setModel} />
        </group>
        <ControlledOrbitControls isScrolling={isScrolling} />
      </Canvas>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { sceneRef, model })
      )}
    </>
  );
};

export default SceneManager;