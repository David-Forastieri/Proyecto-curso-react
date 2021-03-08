
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/items/ItemList';
import { getFirestore } from '../firebase';
import spinner from '../spinner.png';
import './container.css';


const Categorias = () => {

  const [categoryProduc, setCategoryProduc] = useState([]);
  const [loading, setLoading] = useState(false);

  const { idTipo } = useParams();
  console.log(idTipo);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore()
    const itemCollection = db.collection('PRODUCTOS')

    const category = itemCollection.where('category', '==', idTipo)

    category.get().then((value) => {
      setCategoryProduc(value.docs.map(e => (e.data())))
      setLoading(false)
    })

  }, [idTipo, setCategoryProduc]);

  if (loading) {
    return <div className='spinner'><img src={spinner} /></div>
  }


  return (
    <>
      <ItemList productos={categoryProduc} />
    </>
  )
}

export default Categorias;

