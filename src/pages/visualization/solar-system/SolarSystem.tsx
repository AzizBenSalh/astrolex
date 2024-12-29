import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Text } from '@react-three/drei';
import * as THREE from 'three';

const PLANET_DATA = [
  { 
    name: 'Sun',
    radius: 3,
    color: '#FDB813',
    emissive: '#FDB813',
    orbitRadius: 0,
    rotationSpeed: 0.01,
    orbitSpeed: 0
  },
  {
    name: 'Mercury',
    radius: 0.4,
    color: '#A0522D',
    orbitRadius: 5,
    rotationSpeed: 0.02,
    orbitSpeed: 0.008
  },
  {
    name: 'Venus',
    radius: 0.9,
    color: '#E6B800',
    orbitRadius: 7,
    rotationSpeed: 0.015,
    orbitSpeed: 0.007
  },
  {
    name: 'Earth',
    radius: 1,
    color: '#4B9BE1',
    orbitRadius: 10,
    rotationSpeed: 0.01,
    orbitSpeed: 0.006
  },
  {
    name: 'Mars',
    radius: 0.5,
    color: '#FF6B6B',
    orbitRadius: 13,
    rotationSpeed: 0.008,
    orbitSpeed: 0.005
  },
  {
    name: 'Jupiter',
    radius: 2,
    color: '#E8B894',
    orbitRadius: 17,
    rotationSpeed: 0.004,
    orbitSpeed: 0.004
  },
  {
    name: 'Saturn',
    radius: 1.7,
    color: '#F4D03F',
    orbitRadius: 21,
    rotationSpeed: 0.003,
    orbitSpeed: 0.003
  },
  {
    name: 'Uranus',
    radius: 1.4,
    color: '#73C6B6',
    orbitRadius: 24,
    rotationSpeed: 0.002,
    orbitSpeed: 0.002
  },
  {
    name: 'Neptune',
    radius: 1.3,
    color: '#2E86C1',
    orbitRadius: 27,
    rotationSpeed: 0.001,
    orbitSpeed: 0.001
  }
];

function Planet({ name, radius, color, orbitRadius, rotationSpeed, orbitSpeed, emissive }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current && orbitRadius > 0) {
      // Orbital motion
      const angle = clock.getElapsedTime() * orbitSpeed;
      meshRef.current.position.x = Math.cos(angle) * orbitRadius;
      meshRef.current.position.z = Math.sin(angle) * orbitRadius;
      
      // Self rotation
      meshRef.current.rotation.y += rotationSpeed;

      // Update text position to follow planet
      if (textRef.current) {
        textRef.current.position.x = meshRef.current.position.x;
        textRef.current.position.z = meshRef.current.position.z;
        textRef.current.position.y = radius + 1; // Position text above planet
        
        // Make text face camera
        textRef.current.rotation.y = -angle;
      }
    }
  });

  return (
    <>
      <Sphere ref={meshRef} args={[radius, 32, 32]} position={[orbitRadius, 0, 0]}>
        <meshStandardMaterial 
          color={color}
          emissive={emissive || '#000000'}
          emissiveIntensity={emissive ? 0.5 : 0}
          metalness={0.3}
          roughness={0.7}
        />
      </Sphere>
      
      {/* Planet label */}
      <Text
        ref={textRef}
        position={[orbitRadius, radius + 1, 0]}
        fontSize={0.8}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>

      {/* Orbit path */}
      {orbitRadius > 0 && (
        <line>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={64}
              array={new Float32Array(
                [...Array(65)].map((_, i) => {
                  const angle = (i / 64) * Math.PI * 2;
                  return [
                    Math.cos(angle) * orbitRadius,
                    0,
                    Math.sin(angle) * orbitRadius
                  ];
                }).flat()
              )}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#ffffff" opacity={0.2} transparent />
        </line>
      )}
    </>
  );
}

export function SolarSystem() {
  return (
    <>
      {PLANET_DATA.map((planet) => (
        <Planet key={planet.name} {...planet} />
      ))}
    </>
  );
}