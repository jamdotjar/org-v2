import React, { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import type { Mesh } from "three";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import  Display_Organelle  from './Display_Organelle'


interface SceneProps {
   modelType: string
}

function Scene(props: SceneProps) {
    return (
        <>
            <color attach="background" args={['skyblue']} />
            <Stage
                intensity={0.5}
                preset="rembrandt"
                shadows={{ type: 'accumulative', color: 'skyblue', colorBlend: 2, opacity: 1 }}
                adjustCamera={1}
                environment="city">
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
            
                <Display_Organelle  modelType={props.modelType} />
                <OrbitControls />
            </Stage>
        </>
    );
}

export default Scene;