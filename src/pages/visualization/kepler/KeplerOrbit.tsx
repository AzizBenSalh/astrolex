import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

interface KeplerOrbitProps {
  eccentricity: number;
  semiMajorAxis: number;
}

export function KeplerOrbit({ eccentricity, semiMajorAxis }: KeplerOrbitProps) {
  const planetRef = useRef<THREE.Mesh>(null);
  
  // Calculate orbital parameters
  const c = eccentricity * semiMajorAxis; // Distance from center to focus
  const b = semiMajorAxis * Math.sqrt(1 - eccentricity * eccentricity); // Semi-minor axis
  
  // Generate points for the elliptical orbit
  const points = [];
  const segments = 64;
  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    const x = semiMajorAxis * Math.cos(theta);
    const z = b * Math.sin(theta);
    points.push(new THREE.Vector3(x, 0, z));
  }

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const t = clock.getElapsedTime() * 0.5;
      const theta = t % (Math.PI * 2);
      
      // Calculate planet position using parametric equations of ellipse
      planetRef.current.position.x = semiMajorAxis * Math.cos(theta);
      planetRef.current.position.z = b * Math.sin(theta);
    }
  });

  return (
    <>
      {/* Sun */}
      <Sphere args={[1, 32, 32]} position={[-c, 0, 0]}>
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
      </Sphere>

      {/* Planet */}
      <Sphere ref={planetRef} args={[0.5, 32, 32]} position={[semiMajorAxis, 0, 0]}>
        <meshStandardMaterial color="#4169E1" />
      </Sphere>

      {/* Orbit path */}
      <Line
        points={points}
        color="white"
        lineWidth={1}
        dashed
      />
    </>
  );
}