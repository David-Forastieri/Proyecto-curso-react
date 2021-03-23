import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";

import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

import './style.css'

const CartWidget = () => {

  const { quantity } = useContext(CartContext);

  return (
    <>
      <div className='number-cart'>{quantity}</div>
      <div className='logo-cart'>
        <Link to={`/cart`}><AiOutlineShoppingCart /></Link>
      </div>
    </>
  )
}

export default CartWidget
