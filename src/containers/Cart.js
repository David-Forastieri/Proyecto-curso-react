import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';



const Cart = () => {

 
  const {cart} = useContext (CartContext);


    return (
      <>
          <h1>ESte carrito tiene</h1>
        {cart.map (elemento =>{
            return(
              <>
                <img src={elemento.product.item.image}/>
                <h3>{elemento.product.item.name}</h3>
                <h3>cantidad : {elemento.product.quantity} </h3>
              </>
                  
                ) } )
              }    
              
      </>
    )
}

export default Cart;
