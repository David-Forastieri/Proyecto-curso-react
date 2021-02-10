
import React, { useState, useEffect} from 'react'
import ItemDetail from '../components/items/ItemDetail';
import spinner from '../spinner.png';
import './container.css';

const ItemDatailContainer = () => {

    const onAdd = (contador) =>{
        alert ('Se agregaron ' + (contador) + ' productos a tu carrito de compras');
        };

    const [detalle, setDetalle] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect (() =>{
        const detalleProducto = new Promise ((resolve, reject) => {
            setTimeout(() => 
            resolve (
                {id:1,
                    name:'Zapatillas Adidas',
                    image:'https://www.digitalsport.com.ar/files/products/5f751a3ad38d6-519907-500x500.jpg',
                    description:'Zapatilla marca Adidas, de estilo deportivo, recomendado para deportes tipo runnin y training. Producto 100% original, de origen Argentina.',
                    stock:9,
                    price:5000}
                    ), 4000);
            setLoading(true);
        });

        detalleProducto.then((e) =>{
            setDetalle (e);
            setLoading(false)});

    }, [])

    if(loading){
        return <div className='spinner'><img src={spinner} /></div>
      }

    return (
        <>
           <ItemDetail detalle={detalle} onAdd={onAdd}/> 
        </>
    )
}

export default ItemDatailContainer
