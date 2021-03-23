
import React from 'react';
import './item.css';

const ItemDetail = ({ detalle }) => {
  return (
    <>
      <div className='container container-mark'>
        <div className='card'>
          <h2>{detalle.title}</h2>
          <div className='row justify-content-center cols-lg-12 card-body'>
            <div className='col-lg-4'>
              <img src={detalle.image} />
            </div>
            <div className='col-lg-4'>
              <h3>${detalle.price}</h3>
              <p>{detalle.description}</p>
              <p>stock:{detalle.stock}unds.</p>
              <p>Envios a todo el pais.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default ItemDetail;
