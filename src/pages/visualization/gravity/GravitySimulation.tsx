import { useRef } from 'react';
import { Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

interface GravitySimulationProps {
  mass1: number;
  mass2: number;
  distance: number;
}

export function GravitySimulation({ mass1, mass2, distance }: GravitySimulationProps) {
  const radius1 = Math.log(mass1) * 0.2;
  const radius2 = Math.log(mass2) * 0.2;
  const pos1 = new THREE.Vector3(-distance/2, 0, 0);
  const pos2 = new THREE.Vector3(distance/2, 0, 0);

  return (
    <>
      <Sphere args={[radius1, 32, 32]} position={pos1}>
        <meshStandardMaterial color="#4169E1" />
      </Sphere>
      
      <Sphere args={[radius2, 32, 32]} position={pos2}>
        <meshStandardMaterial color="#CD5C5C" />
      </Sphere>

      <Line
        points={[[-distance/2, 0, 0], [distance/2, 0, 0]]}
        color="white"
        lineWidth={1}
        dashed
      />
    </>
  );
}