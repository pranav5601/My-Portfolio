import { Canvas } from "@react-three/fiber";
import { useRef, React } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const Earth2 = () => {
  const loader = new GLTFLoader();

  loader.load(
    "path/to/model.glb",
    function (gltf) {
      scene.add(gltf.scene);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
  return (
    <div>
      <Canvas>
        <mesh ref={ref}></mesh>
      </Canvas>
    </div>
  );
};

export default Earth2;
