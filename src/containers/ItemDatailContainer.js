
import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemCount from '../components/contador/ItemCount';
import ItemDetail from '../components/items/ItemDetail';
import ProductList from '../components/ProductsList/ProductList';
import spinner from '../spinner.png';
import './container.css';

const ItemDatailContainer = () => {

    
    const onAdd = (contador) =>{
       alert ('Se agregaron ' + (contador) + ' productos a tu carrito de compras');
    };
    
    const [detalle, setDetalle] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const {id} = useParams();
    console.log(id);

    useEffect (() =>{
        const detalleProducto = new Promise ((resolve, reject) => {
            setTimeout(() => resolve (ProductList), 1000); setLoading(true);
        });
           

        detalleProducto.then((e) =>{
           let productoDetalle= (e).find(element => {
              if(element.id.toString() === id){
                  return element
              };
               setDetalle(element)
               setLoading(false)}
           )
           console.log(productoDetalle)
    });


        }, [id, setDetalle] );
    
        
    if(loading){
       return <div className='spinner'><img src={spinner} /></div>
    }

    return (
        <>
            <div className='card'>
               <ItemDetail detalle={detalle} /> 
               <ItemCount stock={detalle.stock} initial={1} onAdd={onAdd} />  
               <h1>esta es la {id}</h1>
            </div>
        </>
    )
}

export default ItemDatailContainer ;
