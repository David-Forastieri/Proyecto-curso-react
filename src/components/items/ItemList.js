
import React from 'react';
import Item from './Item';
import './item.css';

const ItemList = ({ productos }) => {




  return (
    <>
      <div className='container-fluid container-mark'>
        <ul className='row justify-content-betwen'>
          {productos.map(e => {
            return (
              <li key={e.id} className='item col-md-4'>

                <Item producto={e} />


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
