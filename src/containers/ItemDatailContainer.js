
import React, { useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import ItemCount from '../components/contador/ItemCount';
import ItemDetail from '../components/items/ItemDetail';
import ProductList from '../components/ProductsList/ProductList';
import spinner from '../spinner.png';
import './container.css';

const ItemDatailContainer = () => {

  const [contador, setContador] = useState (1);

  const agregar = () =>{
    if(contador < detalle.stock ) {
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
    
    const [detalle, setDetalle] = useState([]);
    const [loading, setLoading] = useState(false);
    const [carrito, setCarrito]= useState (false)

    
    const {id} = useParams();
    console.log(id);

    useEffect (() =>{
      const detalleProducto = new Promise ((resolve, reject) => {
        setTimeout(() => resolve (ProductList), 1000);
        });
        setLoading(true);

        detalleProducto.then((e) =>{
          let productoDetalle= (e).find(element => element.id.toString() === id);   
            setDetalle(productoDetalle)
            setLoading(false)
        });

      }, [id, setDetalle] );
        
      if(loading){
        return <div className='spinner'><img src={spinner} /></div>
      }

    return (
        <>
            <div className='card'>
              <ItemDetail detalle={detalle} />

              { carrito ? <Link to={`/cart`}><button> Terminar compra </button></Link> :
                <ItemCount restar={restar} agregar={agregar} contador={contador} onAdd={onAdd} />  
              }  
            </div>
        </>
    )
}

export default ItemDatailContainer ;
