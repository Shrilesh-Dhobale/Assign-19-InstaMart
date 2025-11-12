import React from 'react'
import './Home.css'
import { Search, ShoppingCart } from 'lucide-react'

function Home() {
  const InstamartHome = () => {
        const categories = [
        { name: 'Vegetables', icon: '🥬' },
        { name: 'Dairy', icon: '🥛' },
        { name: 'Snacks', icon: '🍿' },
        { name: 'Beverages', icon: '🥤' }
  ];   
        const products = [
    { id: 1, name: 'Fresh Tomatoes', price: 45, image: '🍅' },
    { id: 2, name: 'Milk', price: 60, image: '🥛' },
    { id: 3, name: 'Bread', price: 35, image: '🍞' },
    { id: 4, name: 'Chips', price: 20, image: '🥔' }
  ]; }
  return (
    <>
      <div>
        <div className="header">
          <div className="logo">Instamart</div>
          <div className="search">
            <Search className="search-icon" size={20} color="#999" />
            <input type="text" placeholder="Search products..." />
          </div>
          <button className="cart-btn">
            <ShoppingCart size={20} />
            Cart
          </button>
        </div>
      </div>
      <div className="banner">
        <h1>Groceries in Minutes</h1>
        <p>Fresh products delivered fast</p>
      </div>
    </>
  )
}

export default Home
