
import React from 'react'
import './style.css';

const Item = ({producto}) => {
    return (
      <>
      <div className='container row-cols-lg-4'>
        <div className='card'>
          <h3 className='card-body'>{producto.name}</h3>
          <div className='imgProduct'><img src={producto.image}/></div>
          <p>{producto.description}</p>
          <p>${producto.price}</p>
          <p>stock:{producto.stock}unds</p>
        </div>
      </div>
            
      </>
    )
}

export default Item;
