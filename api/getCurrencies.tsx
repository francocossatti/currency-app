'use server'

type ExchangeRateData = {
    timestamp: number;
    rates: {
      ARS: number;
      BRL: number;
      CLP: number;
      CNY: number;
      EUR: number;
      JPY: number;
      MXN: number;
      USD: number;
    };
  };

  export default async function getCurrencies(){
    const url = 'https://api.fxratesapi.com/latest?currencies=ARS, USD, BRL, EUR, CLP, MXN, JPY, CNY&base=UYU&places=2';
    const options = {
        method: 'GET',
        next: {
          revalidate: 1200
        },
        headers: {
          'Accept': `*/*`,
          'User-Agent': `Thunder Client (https://www.thunderclient.com)`,
          'api-key': `${process.env.APIKEY}`,
        },
      };
    
    const res = await fetch(url, options);
    const data: ExchangeRateData = await res.json();

    return data;
  }