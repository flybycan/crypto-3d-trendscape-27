import { Card } from "@/components/ui/card";

interface PriceStatsProps {
  currentPrice: number;
  high24h: number;
  low24h: number;
  priceChange24h: number;
}

const PriceStats = ({ currentPrice, high24h, low24h, priceChange24h }: PriceStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <Card className="glass-card p-6">
        <h3 className="text-sm font-medium text-muted-foreground mb-2">Current Price</h3>
        <p className="text-2xl font-semibold">${currentPrice.toLocaleString()}</p>
      </Card>
      
      <Card className="glass-card p-6">
        <h3 className="text-sm font-medium text-muted-foreground mb-2">24h High</h3>
        <p className="text-2xl font-semibold">${high24h.toLocaleString()}</p>
      </Card>
      
      <Card className="glass-card p-6">
        <h3 className="text-sm font-medium text-muted-foreground mb-2">24h Low</h3>
        <p className="text-2xl font-semibold">${low24h.toLocaleString()}</p>
      </Card>
      
      <Card className="glass-card p-6">
        <h3 className="text-sm font-medium text-muted-foreground mb-2">24h Change</h3>
        <p className={`text-2xl font-semibold ${priceChange24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
          {priceChange24h >= 0 ? '+' : ''}{priceChange24h.toFixed(2)}%
        </p>
      </Card>
    </div>
  );
};

export default PriceStats;