import React from 'react'
import { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
const Navbar = () => {
  const {setcurrency} = useContext(CoinContext)
  const handleCurrency = (e) => {
    switch (e.target.value) {
      case "usd":
        {
        setcurrency({name: "usd", symbol: "$"})
        break
        }
      case "inr":
        {
        setcurrency({name: "inr", symbol: "₹"})
        break
        }
        
      case "eur":
        {
        setcurrency({name: "eur", symbol: "€"})
        break
        }
        default:
          {
            setcurrency({name: "usd", symbol: "$"})
          }
    }
  }
  return (
    <div className='navbar'>
      <img src={logo}  className='logo' alt="" />
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className='nav-right'>
            <select onChange={handleCurrency}>
                <option value="usd">USD</option>
                <option value="inr">INR</option>
                <option value="eur">EUR</option>
            </select>
            <button>Sign up<img src={arrow}></img></button>
        </div>
    </div>
  )
}

export default Navbar
