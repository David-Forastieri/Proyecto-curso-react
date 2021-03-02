import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';



const Cart = () => {

 
  const {cart, RemoveItem, ClearCart, price, priceTotal} = useContext (CartContext);


    return (
      <>      
        {cart.length === 0 ?
          <div>
            <h1>Carrito vacio</h1> 
            <Link to={`/`}><button>Continua tu compra</button></Link>
          </div>:
          <div>
            <h1>Este carrito tiene</h1>
            <button onClick={()=> ClearCart()}>Vaciar carrito</button>
            <br/>
            <h2>El precio total de los productos es: $ {priceTotal}</h2>
          </div>
        }
        <ul>
          {cart.map (elemento =>{
            return(               
              <li key= {elemento.id}>
                <img src={elemento.item.image}/>
                <h3>{elemento.item.name}</h3>
                <h3>cantidad : {elemento.quantity} </h3>
                <h3>valor:$ {elemento.item.price}</h3>
                <h4>Total:$ {price}</h4>
                <button onClick={()=> RemoveItem(elemento.id)} >Eliminar producto de lista</button>
                <br/> 
              </li>    
            ) } )
          }                  
        </ul>
      
      </>
    )
}

export default Cart;
