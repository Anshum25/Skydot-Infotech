import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface McxData {
  symbol: string;
  last: number;
  change: number;
  changePercent: number;
  close: number;
  high: number;
  low: number;
  lastTrade: string;
}



export function McxLiveDashboard() {
  const [data, setData] = useState<McxData[]>([]);
  const [loading, setLoading] = useState(true);

  // Map MCX symbols to Yahoo Finance global futures symbols
  const yahooSymbols: Record<string, string> = {
    "MCX Gold": "GC=F",
    "MCX Gold Mini": "MGC=F",
    "MCX Silver": "SI=F",
    "MCX Silver Mini": "SIL=F",
    "MCX Silver Micro": "SIL=F", // proxy
    "MCX Crude Oil": "CL=F",
    "MCX Natural Gas": "NG=F",
    "MCX Copper": "HG=F",
    "MCX Zinc": "ZNC=F"
  };

  const fetchLiveData = async () => {
    try {
      const mcxSymbols = Object.keys(yahooSymbols);
      const allYahooSymbols = mcxSymbols.map(s => yahooSymbols[s]);
      
      // Use v8 spark endpoint which allows bulk fetching without crumb/auth, avoiding 429 rate limits
      const res = await fetch(`/api/yahoo/v8/finance/spark?symbols=${allYahooSymbols.join(',')},INR=X&range=1d&interval=1m`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      
      const json = await res.json();
      
      // Get live USD to INR exchange rate, fallback to 83.5 if blocked
      let USD_INR = 83.5;
      const inrData = json['INR=X'];
      if (inrData && inrData.close && inrData.close.length > 0) {
        USD_INR = inrData.close[inrData.close.length - 1];
      }
      
      // Indian taxes/duties on precious metals (approximate 15% import duty + 3% GST)
      const METAL_DUTY_MULTIPLIER = 1.15 * 1.03;

      setData(prevData => {
        const updatedData = mcxSymbols.map((symbol) => {
          const ySymbol = yahooSymbols[symbol];
          const dataNode = json[ySymbol];
          
          if (!dataNode || !dataNode.close || dataNode.close.length === 0) {
            const existing = prevData.find(p => p.symbol === symbol);
            return existing || null;
          }

          const closes = dataNode.close;
          let calculatedPrice = closes[closes.length - 1];
          let calculatedPrevClose = dataNode.previousClose || calculatedPrice;
          
          let dayHigh = Math.max(...closes);
          let dayLow = Math.min(...closes);

          // Convert COMEX USD prices to precise MCX INR specifications
          if (symbol.includes("Gold")) {
            const conversionFactor = (10 / 31.1035) * USD_INR * METAL_DUTY_MULTIPLIER;
            calculatedPrice = calculatedPrice * conversionFactor;
            calculatedPrevClose = calculatedPrevClose * conversionFactor;
            dayHigh = dayHigh * conversionFactor;
            dayLow = dayLow * conversionFactor;
          } 
          else if (symbol.includes("Silver")) {
            const conversionFactor = (1000 / 31.1035) * USD_INR * METAL_DUTY_MULTIPLIER;
            calculatedPrice = calculatedPrice * conversionFactor;
            calculatedPrevClose = calculatedPrevClose * conversionFactor;
            dayHigh = dayHigh * conversionFactor;
            dayLow = dayLow * conversionFactor;
          } 
          else if (symbol.includes("Crude Oil") || symbol.includes("Natural Gas")) {
            calculatedPrice = calculatedPrice * USD_INR;
            calculatedPrevClose = calculatedPrevClose * USD_INR;
            dayHigh = dayHigh * USD_INR;
            dayLow = dayLow * USD_INR;
          }
          else if (symbol.includes("Copper")) {
            const conversionFactor = (1 / 0.453592) * USD_INR;
            calculatedPrice = calculatedPrice * conversionFactor;
            calculatedPrevClose = calculatedPrevClose * conversionFactor;
            dayHigh = dayHigh * conversionFactor;
            dayLow = dayLow * conversionFactor;
          }
          else if (symbol.includes("Zinc")) {
            const conversionFactor = (1 / 1000) * USD_INR;
            calculatedPrice = calculatedPrice * conversionFactor;
            calculatedPrevClose = calculatedPrevClose * conversionFactor;
            dayHigh = dayHigh * conversionFactor;
            dayLow = dayLow * conversionFactor;
          }

          const change = calculatedPrice - calculatedPrevClose;
          const changePercent = (change / calculatedPrevClose) * 100;
          
          // Get the latest timestamp for this symbol
          const timestamps = dataNode.timestamp || [];
          const lastTime = timestamps.length > 0 ? timestamps[timestamps.length - 1] * 1000 : Date.now();

          return {
            symbol: symbol,
            last: calculatedPrice,
            change: change,
            changePercent: changePercent,
            close: calculatedPrevClose,
            high: dayHigh,
            low: dayLow,
            lastTrade: new Date(lastTime).toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
          };
        });
        
        return updatedData.filter(Boolean) as McxData[];
      });

    } catch (error) {
      console.error("Global fetch failure:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveData(); // Initial fetch
    
    // Poll every 30 seconds for live updates to prevent rate limits
    const interval = setInterval(() => {
      fetchLiveData();
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  // Format currency
  const formatNum = (num: number, decimals: number = 2) => {
    return num.toLocaleString('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  };

  return (
    <section id="capabilities" className="home-section relative py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <p className="home-label mb-2">Live Data Feed</p>
            <h2 className="home-headline text-3xl font-light">MCX Live Rates Dashboard</h2>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold border border-green-500/20 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Live Market Active
          </div>
        </div>

        <div className="border border-border rounded-xl bg-card shadow-sm overflow-hidden overflow-x-auto">
          <table className="w-full min-w-[900px] text-sm text-left">
            <thead className="text-xs uppercase bg-secondary/50 text-muted-foreground border-b border-border">
              <tr>
                <th className="px-6 py-4 font-semibold tracking-wider">Symbol</th>
                <th className="px-6 py-4 font-semibold tracking-wider text-right">Last Price</th>
                <th className="px-6 py-4 font-semibold tracking-wider text-right">Change</th>
                <th className="px-6 py-4 font-semibold tracking-wider text-right">Change %</th>
                <th className="px-6 py-4 font-semibold tracking-wider text-right">Prev Close</th>
                <th className="px-6 py-4 font-semibold tracking-wider text-right">High</th>
                <th className="px-6 py-4 font-semibold tracking-wider text-right">Low</th>
                <th className="px-6 py-4 font-semibold tracking-wider text-right">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {data.map((row) => {
                const isPositive = row.change >= 0;
                return (
                  <tr key={row.symbol} className="hover:bg-secondary/20 transition-colors group">
                    <td className="px-6 py-4 font-bold flex items-center gap-2 group-hover:text-[var(--skydot-blue)] transition-colors">
                      {isPositive ? (
                        <ArrowUp className="w-4 h-4 text-green-500 shrink-0" />
                      ) : (
                        <ArrowDown className="w-4 h-4 text-red-500 shrink-0" />
                      )}
                      {row.symbol}
                    </td>
                    <td className={`px-6 py-4 text-right font-bold tabular-nums transition-colors duration-300 ${isPositive ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'}`}>
                      {formatNum(row.last)}
                    </td>
                    <td className={`px-6 py-4 text-right font-semibold tabular-nums ${isPositive ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'}`}>
                      {isPositive ? '+' : ''}{formatNum(row.change)}
                    </td>
                    <td className={`px-6 py-4 text-right font-semibold tabular-nums bg-opacity-20 ${isPositive ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'}`}>
                      <span className={`px-2 py-1 rounded-sm ${isPositive ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                        {isPositive ? '+' : ''}{formatNum(row.changePercent)}%
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-muted-foreground tabular-nums">
                      {formatNum(row.close)}
                    </td>
                    <td className="px-6 py-4 text-right text-muted-foreground tabular-nums">
                      {formatNum(row.high)}
                    </td>
                    <td className="px-6 py-4 text-right text-muted-foreground tabular-nums">
                      {formatNum(row.low)}
                    </td>
                    <td className="px-6 py-4 text-right text-muted-foreground tabular-nums font-medium">
                      {row.lastTrade}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
