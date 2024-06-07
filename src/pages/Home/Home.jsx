import React, { useEffect, useState, useContext } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext";

const Home = () => {
  const { allCoins, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setDisplayCoin(allCoins);
  }, [allCoins]);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredCoins = allCoins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayCoin(filteredCoins);
  };

  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br />
          Crypto Tracker Site
        </h1>
        <p>
          Welcome to the world of cryptocurrency. Let's sign up to get started.
        </p>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search Crypto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24h Change</p>
          <p className="market">Market Cap</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => (
          <div className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt="" />
              <p>{item.name + " - " + item.symbol}</p>
            </div>
            <p>{currency.symbol} {item.current_price}</p>
            <p style={{ textAlign: "center", color: item.price_change_percentage_24h < 0 ? 'red' : 'green' }}>
              {item.price_change_percentage_24h.toFixed(2)}%
            </p>
            <p className="market">{currency.symbol} {item.market_cap.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
