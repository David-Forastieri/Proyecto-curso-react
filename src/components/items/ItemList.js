
import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import './item.css';

const ItemList = ({productos}) => {
    return (
      <>
          <ul>
            {productos.map (elemento =>{
              return(
                <li key={elemento.id} className='item'>
                  <Link to={`/detalle/${elemento.id}`}>
                    <Item  producto={elemento} />            
                  </Link>
                </li>
                ) } )
              }    
          </ul>
      </>
    )
}

export default ItemList;
