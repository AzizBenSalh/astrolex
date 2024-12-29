import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GravitySimulation } from './GravitySimulation';
import { useState } from 'react';

export default function GravitySimulator() {
  const [mass1, setMass1] = useState(5000);
  const [mass2, setMass2] = useState(3000);
  const [distance, setDistance] = useState(10);

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Gravity Simulator</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experiment with gravitational forces between two masses. Adjust the parameters
            to see how gravity changes with mass and distance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-white font-semibold mb-4">Parameters</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 mb-2">Mass 1 (kg)</label>
                  <input
                    type="range"
                    min="1000"
                    max="10000"
                    value={mass1}
                    onChange={(e) => setMass1(Number(e.target.value))}
                    className="w-full"
                  />
                  <span className="text-purple-400">{mass1}</span>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Mass 2 (kg)</label>
                  <input
                    type="range"
                    min="1000"
                    max="10000"
                    value={mass2}
                    onChange={(e) => setMass2(Number(e.target.value))}
                    className="w-full"
                  />
                  <span className="text-purple-400">{mass2}</span>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Distance (m)</label>
                  <input
                    type="range"
                    min="5"
                    max="20"
                    value={distance}
                    onChange={(e) => setDistance(Number(e.target.value))}
                    className="w-full"
                  />
                  <span className="text-purple-400">{distance}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-white font-semibold mb-4">Force</h3>
              <p className="text-purple-400 text-2xl font-bold">
                {((6.67430e-11 * mass1 * mass2) / (distance * distance)).toExponential(2)} N
              </p>
              <p className="text-gray-400 text-sm mt-2">
                F = G(m₁m₂)/r²
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 h-[600px] bg-gray-900 rounded-lg overflow-hidden">
            <Canvas camera={{ position: [0, 20, 35], fov: 60 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <GravitySimulation mass1={mass1} mass2={mass2} distance={distance} />
              <OrbitControls />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
}