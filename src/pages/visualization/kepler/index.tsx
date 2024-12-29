import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState } from 'react';
import { KeplerOrbit } from './KeplerOrbit';

export default function KeplerVisualization() {
  const [eccentricity, setEccentricity] = useState(0.5);
  const [semiMajorAxis, setSemiMajorAxis] = useState(5);

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Kepler's Laws Simulator</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore the laws of planetary motion through an interactive visualization.
            Adjust orbital parameters to see how they affect planetary motion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-white font-semibold mb-4">Orbital Parameters</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 mb-2">Eccentricity</label>
                  <input
                    type="range"
                    min="0"
                    max="0.99"
                    step="0.01"
                    value={eccentricity}
                    onChange={(e) => setEccentricity(Number(e.target.value))}
                    className="w-full"
                  />
                  <span className="text-purple-400">{eccentricity}</span>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Semi-Major Axis</label>
                  <input
                    type="range"
                    min="3"
                    max="10"
                    step="0.1"
                    value={semiMajorAxis}
                    onChange={(e) => setSemiMajorAxis(Number(e.target.value))}
                    className="w-full"
                  />
                  <span className="text-purple-400">{semiMajorAxis}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-white font-semibold mb-4">Kepler's Laws</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>1. Planets move in elliptical orbits with the Sun at one focus</li>
                <li>2. A line joining a planet and the Sun sweeps out equal areas in equal times</li>
                <li>3. The square of the orbital period is proportional to the cube of the semi-major axis</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 h-[600px] bg-gray-900 rounded-lg overflow-hidden">
            <Canvas camera={{ position: [0, 20, 35], fov: 60 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <KeplerOrbit eccentricity={eccentricity} semiMajorAxis={semiMajorAxis} />
              <OrbitControls />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
}