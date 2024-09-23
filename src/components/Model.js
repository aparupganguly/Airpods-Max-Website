import React, { forwardRef } from 'react';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';

export const Model = forwardRef((props, ref) => {
    const { nodes, materials } = useGLTF('/assets/airpods_max.glb');

    return (
        <group ref={ref} {...props} dispose={null}
            shadows
            camera={{
                position: [25, 0, 5],
                fov: 13,
            }}
            position={[0, 0, 0]}
        >


            <directionalLight position={[2, 5, 2]} intensity={5} />
            <ambientLight intensity={1} />
            <spotLight position={[10, 10, 10]} angle={0.3} intensity={5} castShadow />
            {/* <Environment preset='studio' environmentIntensity={0.3} /> */}



            <group scale={0.01}>
                <group position={[0, -112.04, -124.8]} rotation={[-1.576, 0, -Math.PI]} scale={100}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Headset_Main_Headset_0.geometry}
                        material={materials.Headset}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Headset_Main_Headset_0_1.geometry}
                        material={materials.Headset}
                    />
                </group>
                <group
                    position={[41.536, -16.189, -179.097]}
                    rotation={[-1.576, 0, -Math.PI]}
                    scale={103.495}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Digital_Crown_Headrest_0.geometry}
                        material={materials.Headrest}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Digital_Crown_Button_top_0.geometry}
                        material={materials.Button_top}
                    />
                </group>
                <group
                    position={[0, 169.523, -185.27]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={100}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Headrest_Headrest_0.geometry}
                        material={materials.Headrest}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Headrest_Metallic_0.geometry}
                        material={materials.Metallic}
                    />
                </group>
                <group position={[0, -112.04, 124.8]} rotation={[-1.566, 0, 0]} scale={100}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Headset_Secondary_Headset_0.geometry}
                        material={materials.Headset}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Headset_Secondary_Headset_0_1.geometry}
                        material={materials.Headset}
                    />
                </group>

                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cusion_Main_Speakers_0.geometry}
                    material={materials.Speakers}
                    position={[0, -112.04, -124.797]}
                    rotation={[-1.576, 0, -Math.PI]}
                    scale={100}
                />

                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Button_On_Headset_Button_top_0.geometry}
                    material={materials.Button_top}
                    position={[0, -112.04, -124.8]}
                    rotation={[-1.576, 0, -Math.PI]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cusion_Secondary_Speakers_0.geometry}
                    material={materials.Speakers}
                    position={[0, -112.04, 122.902]}
                    rotation={[-1.566, 0, 0]}
                    scale={100}

                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Headrest_Mesh_Mesh_drill_0.geometry}
                    material={materials.Mesh_drill}
                    position={[0, 169.523, -185.27]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={100}
                />

            </group>
        </group >
    );
});

useGLTF.preload('/assets/airpods_max.glb');
