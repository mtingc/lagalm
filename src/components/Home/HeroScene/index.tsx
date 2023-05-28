import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { Mesh } from "three";

const HeroScene: React.FC = () => {
  const cubeRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    const rotationSpeed = 0.005;
    const scrollSpeed = 0.005;
    const yRotation = clock.elapsedTime * rotationSpeed;
    const yPosition = window.scrollY * scrollSpeed;

    if (cubeRef.current) {
      cubeRef.current.rotation.y = yRotation;
      cubeRef.current.position.y = yPosition;
    }
  });

  return (
      <mesh ref={cubeRef}>
        <boxGeometry args={[5, 5, 5]} />
        <meshBasicMaterial color="red" />
      </mesh>
  );
};

export default HeroScene;
