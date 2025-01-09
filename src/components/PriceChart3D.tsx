import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { PriceLineGraph } from './PriceLineGraph';
import { DataPoints } from './DataPoints';
import { Grid } from './Grid';
import type { PricePoint } from '@/types/price';
import { Suspense } from 'react';

interface PriceChart3DProps {
  data: PricePoint[];
}

const Scene = ({ data }: PriceChart3DProps) => {
  console.log('Rendering Scene with data:', data);
  
  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <PriceLineGraph data={data} />
      <DataPoints data={data} />
      <Grid />
    </group>
  );
};

const PriceChart3D = ({ data }: PriceChart3DProps) => {
  console.log('Rendering PriceChart3D with data:', data);
  
  return (
    <div className="chart-container h-[500px] w-full relative">
      <Canvas
        camera={{ 
          position: [5, 5, 10],
          fov: 60,
          near: 0.1,
          far: 1000
        }}
        gl={{
          antialias: true,
          alpha: false
        }}
      >
        <color attach="background" args={['#000000']} />
        <Suspense fallback={null}>
          <Scene data={data} />
        </Suspense>
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={20}
        />
      </Canvas>
    </div>
  );
};

export default PriceChart3D;