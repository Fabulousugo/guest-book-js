import React, { useState, useEffect } from 'react';
import axios from 'axios';


const CoingeckoAPI = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const fetchCoinDetails = (id) => {
    return axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => {
        return {
          id: response.data.id,
          image: response.data.image.small,
          color: response.data.image.color,
        };
      })
      .catch((error) => {
        console.error(error);
        return {
          id: id,
          image: null,
          
        };
      });
  };

  useEffect(() => {
    const fetchCoinDetailsForAllCoins = async () => {
      const coinDetails = await Promise.all(
        coins.map((coin) => fetchCoinDetails(coin.id))
      );
      const coinsWithDetails = coins.map((coin, index) => ({
        ...coin,
        image: coinDetails[index].image,
        symbol_color: coinDetails[index].color,
      }));
      setCoins(coinsWithDetails);
    };

    fetchCoinDetailsForAllCoins();
  }, [coins]);

  return (
    <section id='CoinList'> 
    <div style={{background:'navy'}}>
      <h1 className="header" style={{ textAlign: 'center',fontSize:'30px',background:'#000914',color:'#FFB60A' }}>
        Popular Coins
      </h1>
      <div
        className="coin-container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          backgroundColor:'navy',
          color:'gold'
        }}
      >
        {coins.map((coin, index) => (
          <div
            key={index}
            className="coin-box"
            style={{
              backgroundColor: coin.symbol_color,
              display: 'flex',
              flexBasis: '18%',
              margin: '0.5rem',
              borderRadius: '10px',
              boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div
              className="coin"
              style={{
                padding: '1rem',
                flex: 1,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={coin.image}
                  alt={`${coin.name} symbol`}
                  style={{ height: '32px', marginRight: '8px' }}
                />
                <p className="coin-name">
                  {coin.name} ({coin.symbol.toUpperCase()})
                </p>
              </div>
              <p className="coin-parameter">
                Price: {coin.current_price}$
              </p>
              <p className="coin-parameter">Market Cap: {coin.market_cap}$</p>
            </div>
          </div>
        ))}
      </div>
      {loading && <div>Loading...</div>}
      {error && (
        <div style={{background:'red',color: 'white'}}>
          An error occurred: {error.message}. You are meant to see a coin list here, if you can't,then check your netwrok!.
        </div>
      )}
    </div>

    </section>
  );
};

export default CoingeckoAPI;
