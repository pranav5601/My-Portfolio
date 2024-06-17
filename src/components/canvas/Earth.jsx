import React, { Suspense } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";

import {
  OrbitControls,
  Preload,
  useDepthBuffer,
  useGLTF,
  SpotLight,
} from "@react-three/drei";
import { useRef } from "react";

import CanvasLoader from "../Loader";
import { Vector3 } from "three";

function MovingSpot({ vec = new Vector3(), ...props }) {
  const light = useRef();
  const viewport = useThree((state) => state.viewport);
  useFrame((state) => {
    light.current.target.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0
      ),
      0.1
    );
    light.current.target.updateMatrixWorld();
  });
  return (
    <SpotLight
      castShadow
      ref={light}
      penumbra={1}
      distance={6}
      angle={0.35}
      attenuation={5}
      anglePower={4}
      intensity={2}
      {...props}
    />
  );
}

const Earth = () => {
  const earth = useGLTF("./planet_earth/scene.gltf");
  const earthRef = useRef();
  const depthBuffer = useDepthBuffer({ frames: 1 });

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      {/* <spotLight
        ref={earthRef}
        position={[20, 50, 60]}
        angle={0.35}
        penumbra={1}
        intensity={100}
        castShadow
        shadow-mapSize={1024}
      /> */}
      <MovingSpot
        depthBuffer={depthBuffer}
        color="#FFEA00"
        position={[3, 3, 2]}
      />
      <ambientLight intensity={0.8} />
      <pointLight intensity={1} />
      <primitive
        object={earth.scene}
        scale={0.5}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.2,
        far: 100,
        position: [-4, 7, 8],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {/* <fog attach="fog" args={["#202020", 5, 20]} /> */}
        <ambientLight intensity={0.5} />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
