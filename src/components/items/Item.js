
import React from 'react'
import './item.css';

const Item = ({producto}) => {
    return (
      <>
        <div className='container row-cols-lg-10'>
          <div className='card card-list'>
            <div className='imgProduct'><img src={producto.image}/></div>
            <p>{producto.title}</p>
            <p>${producto.price}</p>
            <p>stock:{producto.stock}unds</p>
          </div>
        </div>            
      </>
    )
}

export default Item;
