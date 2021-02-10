
import React from 'react';
import ItemCount from '../contador/ItemCount';
import './item.css';

const ItemDetail = ({detalle, onAdd}) => {
  console.log(detalle)
    return (
        <>
          <div className='container'>
            <div className='card'>
              <h2>{detalle.name}</h2>
              <div className='row justify-content-center cols-lg-12 card-body'>
                <img src={detalle.image}/>
                <h3>${detalle.price}</h3>
                <p>{detalle.description}</p>
                <p>stock:{detalle.stock}unds.</p>
                <p>Envios a todo el pais.</p>
                <ItemCount stock={detalle.stock} initial={1} onAdd={onAdd}/>
              </div>
            </div>
          </div>          
        </>
    )
}

export default ItemDetail;
    