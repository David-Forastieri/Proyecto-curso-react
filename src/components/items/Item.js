
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../contador/ItemCount';
import './item.css';

const Item = ({ producto }) => {

  const [carrito, setCarrito] = useState(false)
  const [contador, setContador] = useState(1);

  const { AddItem } = useContext(CartContext)

  const onAdd = () => {
    AddItem({ id: (producto.id), item: (producto), quantity: (contador) });
    setCarrito(true);
  };

  const agregar = () => {
    if (contador < producto.stock) {
      setContador(contador + 1);
    } else {
      alert('no se pueden agregar mas productos')
    }
  }

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  }


  return (
    <>
      <div className='container row-cols-lg-10'>
        <div className='card card-list'>
          <Link to={`/detalle/${producto.id}`}><div className='imgProduct'><img src={producto.image} /></div></Link>
          <p>{producto.title}</p>
          <p>${producto.price}</p>
          <p>stock:{producto.stock}unds</p>
        </div>
      </div>
      <div>
        {carrito ? <Link to={`/cart`}><button> Ir al carrito </button></Link> :
          <ItemCount restar={restar} agregar={agregar} contador={contador} onAdd={onAdd} />
        }
      </div>
    </>
  )
}

export default Item;
