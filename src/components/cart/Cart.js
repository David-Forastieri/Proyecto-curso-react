import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ModalComponent from '../Modal';
import './cart.css'

const Cart = () => {

  const [modal, setModal] = useState(false)

  const { cart, RemoveItem, ClearCart, priceTotal } = useContext(CartContext);

  return (
    <>
      <div className='container'>
        {cart.length === 0 ?
          <div>
            <h1>Carrito vacio</h1>
            <Link to={`/`}><button className='button-cart'>Continua tu compra</button></Link>
          </div> :
          <div className='container-fluid'>
            <h1>Productos en tu carrito de compras</h1>
            <div>
              {cart.length > 0 ? <button className='button-cart' onClick={() => { setModal(true) }}>Finalizar compra </button> :
                null}
            </div>
            <ul>
              {cart.map(elemento => {
                return (
                  <li key={elemento.id}>
                    <div className='card card-cart'>
                      <div className='row cols-lg-12'>
                        <div className='col-lg-8'>
                          <img src={elemento.item.image} />
                          <h3>{elemento.item.title}</h3>
                          <h3>cantidad : {elemento.quantity} </h3>
                          <h3>valor: $ {elemento.item.price} <small>c/u</small></h3>
                        </div>
                        <div className='col-lg-4'>
                          <h4>Total:$ {elemento.quantity * elemento.item.price}</h4>
                        </div>
                        <div>
                          <button onClick={() => RemoveItem(elemento.id)} >Eliminar producto de lista</button>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              })
              }
            </ul>
            <div className='h2-cart'>
              <h2>El precio total de los productos es: $ {priceTotal}</h2>
            </div>
            <button className='button-cart' onClick={() => ClearCart()}>Vaciar carrito</button>
          </div>
        }
      </div>
      <ModalComponent setModal={setModal} modal={modal} />
    </>
  )
}

export default Cart;
