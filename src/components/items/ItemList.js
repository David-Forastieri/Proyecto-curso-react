
import React from 'react';
import Item from './Item';

const ItemList = ({productos}) => {
    return (
      <>
        {productos.map ((elemento, index) =>{
          return(
            <Item key={index} producto={elemento} />            
            ) } )
        };    
      </>
    )
}

export default ItemList;
