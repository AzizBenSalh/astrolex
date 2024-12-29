import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { SolarSystem } from './SolarSystem';

export default function SolarSystemVisualization() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Solar System Explorer</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our solar system in 3D. Watch as planets orbit around the Sun and rotate on their axes.
            Use your mouse to rotate, zoom, and pan around the visualization.
          </p>
        </div>
        
        <div className="h-[600px] bg-gray-900 rounded-lg overflow-hidden">
          <Canvas camera={{ position: [0, 30, 50], fov: 60 }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[0, 0, 0]} intensity={2} color="#FDB813" />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <SolarSystem />
            <OrbitControls 
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              minDistance={20}
              maxDistance={100}
            />
          </Canvas>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-white font-semibold mb-2">Controls</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• Left click + drag to rotate</li>
              <li>• Right click + drag to pan</li>
              <li>• Scroll to zoom in/out</li>
            </ul>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-white font-semibold mb-2">Features</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• Realistic planet orbits</li>
              <li>• Planet rotation</li>
              <li>• Interactive 3D view</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-white font-semibold mb-2">Scale</h3>
            <p className="text-gray-400">
              Note: Planet sizes and distances are not to scale to make the visualization more accessible.
              In reality, the distances between planets are much larger relative to their sizes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}