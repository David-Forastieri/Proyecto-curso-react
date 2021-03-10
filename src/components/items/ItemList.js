
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../contador/ItemCount';
import Item from './Item';
import './item.css';

const ItemList = ({ productos }) => {

  const [contador, setContador] = useState(1);
  const [carrito, setCarrito] = useState(false)

  const { AddItem } = useContext(CartContext)

  const onAdd = () => {
    AddItem({ id: (5), item: (productos), quantity: (contador) });
    setCarrito(true);
  };

  const agregar = () => {
    if (contador < 12) {
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
      <div className='container-fluid container-mark'>
        <ul className='row justify-content-betwen'>
          {productos.map(e => {
            return (
              <li key={e.id} className='item col-md-4'>
                <Link to={`/detalle/${e.id}`}>
                  <Item producto={e} />
                </Link>
                { carrito ? <Link to={`/cart`}><button> Ir al carrito </button></Link> :
                  <ItemCount restar={restar} agregar={agregar} contador={contador} onAdd={onAdd} />
                }
              </li>
            )
          })
          }
        </ul>
      </div>
    </>
  )
}

export default ItemList;
