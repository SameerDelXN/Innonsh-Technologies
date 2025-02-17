"use client"
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const BusinessCharacter = () => {
  const characterRef = useRef();
  
  useFrame((state) => {
    // Subtle breathing animation
    if (characterRef.current) {
      characterRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.05;
    }
  });

  return (
    <group ref={characterRef}>
      {/* Head */}
      <mesh position={[0, 2.2, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#FFB6C1" />
      </mesh>

      {/* Glasses */}
      <group position={[0, 2.2, 0.4]}>
        {/* Left Lens */}
        <mesh position={[-0.25, 0, 0]}>
          <boxGeometry args={[0.3, 0.15, 0.1]} />
          <meshStandardMaterial color="#2c3e50" transparent opacity={0.7} />
        </mesh>
        {/* Right Lens */}
        <mesh position={[0.25, 0, 0]}>
          <boxGeometry args={[0.3, 0.15, 0.1]} />
          <meshStandardMaterial color="#2c3e50" transparent opacity={0.7} />
        </mesh>
        {/* Bridge */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.1, 0.05, 0.1]} />
          <meshStandardMaterial color="#2c3e50" />
        </mesh>
      </group>

      {/* Hair */}
      <group position={[0, 2.5, 0]}>
        <mesh>
          <sphereGeometry args={[0.52, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.35]} />
          <meshStandardMaterial color="#2c3e50" />
        </mesh>
      </group>

      {/* Suit Body */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.7, 0.8, 2, 32]} />
        <meshStandardMaterial color="#34495e" />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 1.7, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.3, 32]} />
        <meshStandardMaterial color="#FFB6C1" />
      </mesh>

      {/* Shirt Collar */}
      <mesh position={[0, 1.6, 0.1]} rotation={[0.3, 0, 0]}>
        <boxGeometry args={[0.8, 0.2, 0.1]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Tie */}
      <mesh position={[0, 1.3, 0.3]} rotation={[0.3, 0, 0]}>
        <boxGeometry args={[0.15, 0.4, 0.05]} />
        <meshStandardMaterial color="#8e44ad" />
      </mesh>

      {/* Phone */}
      <group position={[0.4, 1, 0.4]} rotation={[0.2, -0.3, 0.1]}>
        <mesh>
          <boxGeometry args={[0.2, 0.4, 0.05]} />
          <meshStandardMaterial color="#95a5a6" />
        </mesh>
        {/* Phone Screen */}
        <mesh position={[0, 0, 0.03]}>
          <boxGeometry args={[0.18, 0.38, 0.01]} />
          <meshStandardMaterial color="#2c3e50" />
        </mesh>
      </group>
    </group>
  );
};

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 2, 5], fov: 50 }}
      style={{
        width: '100%',
        height: '500px',
        background: 'linear-gradient(to bottom, #F5F7FA, #E3E9F0)'
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.2} />
      
      {/* Key light for character highlighting */}
      <spotLight
        position={[5, 5, 5]}
        angle={0.4}
        penumbra={1}
        intensity={0.5}
        castShadow
      />

      <BusinessCharacter />
      
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        minDistance={3}
        maxDistance={8}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
      />
    </Canvas>
  );
};

export default Scene;