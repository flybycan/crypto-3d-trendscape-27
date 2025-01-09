export interface CoinMarketData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  high_24h: number;
  low_24h: number;
  price_change_percentage_24h: number;
  sparkline_in_7d: {
    price: number[];
  };
}

export interface PriceDataPoint {
  price: number;
  timestamp: number;
}