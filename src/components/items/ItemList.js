
import React from 'react';
import Item from './Item';
import './item.css';

const ItemList = ({productos}) => {
    return (
      <>
        <ul>
          {productos.map ((elemento, index) =>{
            return(
              <li className='row item'>
                <Item key={index} producto={elemento} />            
              </li>
              ) } )
            }    
        </ul>
      </>
    )
}

export default ItemList;
