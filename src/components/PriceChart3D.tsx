import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { PriceLineGraph } from './PriceLineGraph';
import { DataPoints } from './DataPoints';
import { Grid } from './Grid';
import type { PricePoint } from '@/types/price';

interface PriceChart3DProps {
  data: PricePoint[];
}

const PriceChart3D = ({ data }: PriceChart3DProps) => {
  console.log('Rendering PriceChart3D with data:', data);
  
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }}
      gl={{ antialias: true }}
      style={{ height: '500px' }}
    >
      <color attach="background" args={['#000000']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <group>
        <PriceLineGraph data={data} />
        <DataPoints data={data} />
        <Grid />
      </group>
      
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={5}
        maxDistance={15}
      />
    </Canvas>
  );
};

export default PriceChart3D;