import { Grid as DreiGrid } from '@react-three/drei';
import * as THREE from 'three';

export const Grid = () => {
  console.log('Rendering Grid');
  
  return (
    <group position={[0, 0, -0.1]}>
      <DreiGrid 
        args={[20, 20]}
        cellSize={1}
        cellThickness={0.5}
        cellColor="#666666"
        sectionSize={5}
        sectionThickness={1}
        sectionColor="#444444"
        fadeDistance={30}
        fadeStrength={1}
        followCamera={false}
        infiniteGrid={true}
      />
    </group>
  );
};