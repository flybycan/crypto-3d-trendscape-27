import { useMemo } from 'react';
import * as THREE from 'three';
import { Line } from '@react-three/drei';
import { normalizeData } from '@/utils/dataUtils';
import type { PricePoint } from '@/types/price';

interface PriceLineGraphProps {
  data: PricePoint[];
}

export const PriceLineGraph = ({ data }: PriceLineGraphProps) => {
  const points = useMemo(() => {
    const normalizedData = normalizeData(data);
    return normalizedData.map(point => new THREE.Vector3(point.x, point.y, 0));
  }, [data]);

  return (
    <group>
      <Line
        points={points}
        color="#9b87f5"
        lineWidth={2}
        dashed={false}
      />
    </group>
  );
};