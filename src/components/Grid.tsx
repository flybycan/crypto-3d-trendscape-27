import { Grid as DreiGrid } from '@react-three/drei';

export const Grid = () => {
  console.log('Rendering Grid');
  
  return (
    <DreiGrid
      args={[20, 20]}
      position={[0, -2, 0]}
      cellColor="#666666"
      sectionColor="#444444"
    />
  );
};