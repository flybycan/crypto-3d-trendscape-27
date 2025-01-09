import { useMemo } from 'react';
import * as THREE from 'three';
import { normalizeData } from '@/utils/dataUtils';
import type { PricePoint } from '@/types/price';

interface DataPointsProps {
  data: PricePoint[];
}

export const DataPoints = ({ data }: DataPointsProps) => {
  const points = useMemo(() => {
    const normalizedData = normalizeData(data);
    return normalizedData.map(point => new THREE.Vector3(point.x, point.y, 0));
  }, [data]);

  console.log('Rendering DataPoints with points:', points);

  return (
    <group>
      {points.map((point, i) => (
        <mesh key={i} position={[point.x, point.y, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#9b87f5" emissive="#4a3b8c" emissiveIntensity={0.2} />
        </mesh>
      ))}
    </group>
  );
};