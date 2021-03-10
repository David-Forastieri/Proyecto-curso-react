import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

  const { quantity } = useContext(CartContext);

  return (
    <>
      <div>{quantity}</div>
      <Link to={`/cart`}><AiOutlineShoppingCart /></Link>
    </>
  )
}

export default CartWidget
