import { CoinMarketData } from '@/types/coin';

const COINGECKO_API = 'https://api.coingecko.com/api/v3';

export const fetchCoinData = async (coinId: string = 'bitcoin'): Promise<CoinMarketData> => {
  console.log('Fetching coin data for:', coinId);
  const response = await fetch(
    `${COINGECKO_API}/coins/markets?vs_currency=usd&ids=${coinId}&order=market_cap_desc&sparkline=true&price_change_percentage=24h`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch coin data');
  }
  
  const data = await response.json();
  console.log('Received coin data:', data[0]);
  return data[0];
};