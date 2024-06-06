import React, { useEffect, useState } from 'react'
import './Home.css'
import { useContext } from 'react'
import { CoinContext } from '../../context/CoinContext'

const Home = () => {
    const {allCoin,currency} = useContext(CoinContext);
    const [displayCoin,setDisplayCoin] = useState([])
    useEffect(() => {
        setDisplayCoin(allCoin)
        
    }),[allCoin]
    return (
    <div className='home'>
        <div className='hero'>
            <h1>Largest <br />Crypto Tacker Site</h1>
            <p>Welcome to the world of cryptocurrency.Lets sign up to get started</p>
            <form>
                <input type="text" placeholder='Search Crypto'/>
                <button type='submit'>Search</button>
            </form>
        </div>
        <div className="crypto-table">
            <div className="table-layout">
                <p>#</p>
                <p>Coin</p>
                <p>Price</p>
                <p  style={{textAlign: 'center'}}>24h Change</p>
                <p className='market'>Market Cap</p>
            </div>
            {
                displayCoin.slice
            }
        </div>
    </div>
  )
}

export default Home