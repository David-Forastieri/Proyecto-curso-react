
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/items/ItemList';
import ProductList from '../components/ProductsList/ProductList';
import spinner from '../spinner.png';
import './container.css';


const Categorias = () => {

    const [categoryProduc, setCategoryProduc] = useState ([]);
    const [loading, setLoading] = useState (false);

    const {idTipo} = useParams();
    console.log(idTipo);

      useEffect(() => {          
        const category = new Promise ((resolve, reject) => {
          setTimeout( () => resolve (ProductList), 1000);     
          });
          setLoading(true);
             
          category.then((e) =>{
            let productoCategory = (e).filter(element => element.categoria === idTipo); 
              setCategoryProduc(productoCategory)
              setLoading(false)             
            });

        }, [idTipo, setCategoryProduc]);

        if(loading){
          return <div className='spinner'><img src={spinner} /></div>
        }
    

    return (
        <> 
          <ItemList productos={categoryProduc} />
        </>
    )
}

export default Categorias;

