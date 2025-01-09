import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useMemo } from 'react';
import * as THREE from 'three';

interface PricePoint {
  price: number;
  timestamp: number;
}

interface PriceChart3DProps {
  data: PricePoint[];
}

const PriceChart3D = ({ data }: PriceChart3DProps) => {
  const points = useMemo(() => {
    const pts = [];
    const maxPrice = Math.max(...data.map(d => d.price));
    const minPrice = Math.min(...data.map(d => d.price));
    const range = maxPrice - minPrice;
    
    for (let i = 0; i < data.length; i++) {
      const x = (i / (data.length - 1)) * 10 - 5;
      const y = ((data[i].price - minPrice) / range) * 4 - 2;
      pts.push(new THREE.Vector3(x, y, 0));
    }
    return pts;
  }, [data]);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [points]);

  const lineMaterial = useMemo(() => {
    return new THREE.LineBasicMaterial({ color: '#9b87f5' });
  }, []);

  const line = useMemo(() => {
    return new THREE.Line(lineGeometry, lineMaterial);
  }, [lineGeometry, lineMaterial]);

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <primitive object={line} />
      
      {points.map((point, i) => (
        <mesh key={i} position={point}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#9b87f5" />
        </mesh>
      ))}
      
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={5}
        maxDistance={15}
      />
      
      <gridHelper args={[20, 20, "#666666", "#444444"]} />
    </Canvas>
  );
};

export default PriceChart3D;