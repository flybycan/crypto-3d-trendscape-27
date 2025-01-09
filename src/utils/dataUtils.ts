import type { PricePoint } from '@/types/price';

interface NormalizedPoint {
  x: number;
  y: number;
}

export const normalizeData = (data: PricePoint[]): NormalizedPoint[] => {
  if (!data.length) return [];

  const maxPrice = Math.max(...data.map(d => d.price));
  const minPrice = Math.min(...data.map(d => d.price));
  const range = maxPrice - minPrice;

  console.log('Normalizing data:', { maxPrice, minPrice, range });

  return data.map((point, index) => ({
    x: (index / (data.length - 1)) * 10 - 5, // Scale to -5 to 5 on X axis
    y: ((point.price - minPrice) / range) * 4 - 2 // Scale to -2 to 2 on Y axis
  }));
};