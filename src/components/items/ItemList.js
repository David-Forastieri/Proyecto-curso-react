
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../contador/ItemCount';
import Item from './Item';
import './item.css';

const ItemList = ({productos}) => {

  const [contador, setContador] = useState (1);
  const [carrito, setCarrito]= useState (false)


  const agregar = () =>{
    if(contador < 12 ) {
        setContador(contador +1);
    }else{
        alert('no se pueden agregar mas productos')
    }
  }

  const restar = () =>{
      if(contador > 1 ) {
          setContador(contador -1);
      }
  }

  const onAdd = () =>{
    alert ('Se agregaron ' + (contador) + ' productos a tu carrito de compras');
    setCarrito(true);
  };


    return (
      <>
        <div className='container-fluid container-mark'>
          <ul className='row justify-content-betwen'>
            {productos.map (elemento =>{
              return(
                <li key={elemento.id} className='item col-md-4'>
                  <Link to={`/detalle/${elemento.id}`}>
                    <Item  producto={elemento} />            
                  </Link>
                  { carrito ? <Link to={`/cart`}><button> Terminar compra </button></Link> :
                  <ItemCount restar={restar} agregar={agregar} contador={contador} onAdd={onAdd} />
                  }
                  </li>
              ) } )
            }    
          </ul>
        </div>
      </>
    )
}

export default ItemList;
