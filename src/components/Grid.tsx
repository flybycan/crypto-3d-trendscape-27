import { Grid as DreiGrid } from '@react-three/drei';

export const Grid = () => {
  return (
    <group>
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
        position={[0, -2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
};