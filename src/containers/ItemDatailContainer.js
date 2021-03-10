
import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import ItemCount from '../components/contador/ItemCount';
import ItemDetail from '../components/items/ItemDetail';
import { getFirestore } from '../firebase';
import { CartContext } from '../context/CartContext';
import spinner from '../spinner.png';
import './container.css';

const ItemDatailContainer = () => {

  const [contador, setContador] = useState(1);
  const [detalle, setDetalle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [carrito, setCarrito] = useState(false)

  const agregar = () => {
    if (contador < detalle.stock) {
      setContador(contador + 1);
    } else {
      alert('no se pueden agregar mas productos')
    }
  }

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  }

  const onAdd = () => {
    AddItem({ id: (id), item: (detalle), quantity: (contador) });
    setCarrito(true);
  };

  const { AddItem } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    const db = getFirestore()
    const itemCollection = db.collection('PRODUCTOS')
    const item = itemCollection.doc(id)
    item.get().then((value) => {
      setDetalle(value.data())
      setLoading(false)
    });
  }, [id, setDetalle]);

  if (loading) {
    return <div className='spinner'><img src={spinner} /></div>
  }

  return (
    <>
      {detalle !== undefined ?
        <div className='card'>
          <ItemDetail detalle={detalle} />
          {carrito ? <Link to={`/cart`}><button>ir al carrito</button></Link>
            : <ItemCount restar={restar} agregar={agregar} contador={contador} onAdd={onAdd} />
          }
        </div> :
        <h1>NO SE ENCONTRO PRODUCTO EN LISTA</h1>
      }
    </>
  )


}

export default ItemDatailContainer;
