import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';



const Cart = () => {

 
  const {cart, RemoveItem} = useContext (CartContext);


    return (
      <>
        <h1>Este carrito tiene</h1>
          <ul>
            {cart.map (elemento =>{
              return(               
                  <li key= {elemento.product.id}>
                    <img src={elemento.product.item.image}/>
                    <h3>{elemento.product.item.name}</h3>
                    <h3>cantidad : {elemento.product.quantity} </h3>
                    <button onClick={()=> RemoveItem(elemento.product.id)} >eliminar elemento</button>
                    <br/> 
                  </li>    
              ) } )
            }                  
          </ul>
      </>
    )
}

export default Cart;
