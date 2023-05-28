import React, { useRef } from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { useScroll } from 'react-use-gesture';

const Model: React.FC = () => {
  const materials = useLoader(MTLLoader, '/Engine.mtl');
  const obj = useLoader(OBJLoader, '/Engine.obj', (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  const modelRef = useRef<THREE.Group>();
  const { size } = useThree();

  useFrame(() => {
    if (modelRef.current) {
      const { rotation } = modelRef.current;
      const scrollY = window.scrollY || window.pageYOffset;
      const rotationY = (scrollY / size.height) * Math.PI * .4;
      rotation.y = rotationY;
    }
  });

  useScroll(
    ({ xy: [, scrollY] }) => {
      if (modelRef.current) {
        const { rotation } = modelRef.current;
        const rotationY = (scrollY / size.height) * Math.PI * .4;
        rotation.y = rotationY;
      }
    },
    { domTarget: window }
  );

  return <primitive object={obj} ref={modelRef} scale={0.2} />;
};

export default Model;

