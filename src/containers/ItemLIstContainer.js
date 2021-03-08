
import React, { useState, useEffect } from 'react';
import ItemList from '../components/items/ItemList';
import { getFirestore } from '../firebase';
import spinner from '../spinner.png';
import './container.css';

//Api de mercado libre
//https://api.mercadolibre.com/products/search?status=active&site_id=MLA&q=Samsung&limit=5000

const ItemLIstContainer = ({ greeting }) => {

  const [itemProducto, setItemProducto] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const db = getFirestore()
    const itemCollection = db.collection('PRODUCTOS')
    itemCollection.get().then((value) => {
      setItemProducto(value.docs.map(e => (e.data())))
      setLoading(false)
    })

  }, [])

  if (loading) {
    return <div className='spinner'><img src={spinner} /></div>
  }


  return (
    <>
      <h1> {greeting} </h1>
      <ItemList productos={itemProducto} />
    </>
  )
}

export default ItemLIstContainer
