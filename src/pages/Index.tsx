import { useState, useEffect } from 'react';
import PriceChart3D from '@/components/PriceChart3D';
import PriceStats from '@/components/PriceStats';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const MOCK_DATA = {
  currentPrice: 45000,
  high24h: 46500,
  low24h: 44200,
  priceChange24h: 2.5,
  priceHistory: Array.from({ length: 24 }, (_, i) => ({
    price: 44000 + Math.random() * 2000,
    timestamp: Date.now() - (23 - i) * 3600000
  }))
};

const Index = () => {
  const [timeframe, setTimeframe] = useState<'24h' | '7d' | '30d'>('24h');
  const { toast } = useToast();
  
  useEffect(() => {
    toast({
      title: "Welcome to CryptoViz",
      description: "Explore cryptocurrency trends with our interactive 3D visualization",
    });
  }, []);

  return (
    <div className="min-h-screen p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Bitcoin Price Chart</h1>
          <p className="text-muted-foreground">Interactive 3D visualization of BTC/USD price movements</p>
        </div>

        <PriceStats
          currentPrice={MOCK_DATA.currentPrice}
          high24h={MOCK_DATA.high24h}
          low24h={MOCK_DATA.low24h}
          priceChange24h={MOCK_DATA.priceChange24h}
        />

        <div className="mb-6 space-x-4">
          {(['24h', '7d', '30d'] as const).map((period) => (
            <Button
              key={period}
              variant={timeframe === period ? "default" : "outline"}
              onClick={() => setTimeframe(period)}
              className="transition-all duration-300"
            >
              {period}
            </Button>
          ))}
        </div>

        <div className="glass-card rounded-lg p-4">
          <div className="chart-container">
            <PriceChart3D data={MOCK_DATA.priceHistory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;