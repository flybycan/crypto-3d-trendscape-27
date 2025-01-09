import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import PriceChart3D from '@/components/PriceChart3D';
import PriceStats from '@/components/PriceStats';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { fetchCoinData } from '@/services/coinService';
import type { PriceDataPoint } from '@/types/coin';
import { Skeleton } from '@/components/ui/skeleton';

const Index = () => {
  const [timeframe, setTimeframe] = useState<'24h' | '7d' | '30d'>('7d');
  const { toast } = useToast();
  
  const { data: coinData, isLoading, error } = useQuery({
    queryKey: ['bitcoin', timeframe],
    queryFn: () => fetchCoinData('bitcoin'),
  });

  if (error) {
    toast({
      variant: "destructive",
      title: "Error",
      description: "Failed to fetch cryptocurrency data",
    });
  }

  const priceHistory: PriceDataPoint[] = coinData?.sparkline_in_7d.price.map((price, index) => ({
    price,
    timestamp: Date.now() - (168 - index) * 3600000 // 7 days in hours
  })) || [];

  return (
    <div className="min-h-screen p-6 md:p-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Bitcoin Price Chart</h1>
          <p className="text-muted-foreground">Interactive 3D visualization of BTC/USD price movements</p>
        </div>

        {isLoading ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-[100px] w-full" />
              ))}
            </div>
            <Skeleton className="h-[500px] w-full" />
          </div>
        ) : (
          <>
            {coinData && (
              <PriceStats
                currentPrice={coinData.current_price}
                high24h={coinData.high_24h}
                low24h={coinData.low_24h}
                priceChange24h={coinData.price_change_percentage_24h}
              />
            )}

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
              <PriceChart3D data={priceHistory} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Index;