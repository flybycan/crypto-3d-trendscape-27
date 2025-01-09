import { GridHelper } from '@react-three/drei';

export const Grid = () => {
  console.log('Rendering Grid');
  
  return (
    <GridHelper 
      args={[20, 20, "#666666", "#444444"]} 
      position={[0, 0, -0.1]} 
    />
  );
};