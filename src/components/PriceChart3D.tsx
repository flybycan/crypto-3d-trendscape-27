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

const PriceChart3D = ({ data }: PriceChart3DProps) => {
  console.log('Rendering PriceChart3D with data:', data);
  
  return (
    <div style={{ width: '100%', height: '500px', position: 'relative' }}>
      <Canvas
        camera={{ 
          position: [0, 0, 10],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <Suspense fallback={null}>
          <group position={[0, 0, 0]}>
            <PriceLineGraph data={data} />
            <DataPoints data={data} />
            <Grid />
          </group>
        </Suspense>
        
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          minDistance={5}
          maxDistance={15}
        />
      </Canvas>
    </div>
  );
};

export default PriceChart3D;