
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
        setLoading(true);        
        const category = new Promise ((resolve, reject) => {
        setTimeout( () =>
          resolve (ProductList), 1000);
          });
             

            category.then((e) =>{
              let productoCategory = (e).filter(element => {
                if(element.categoria === idTipo){
                    return element
                  };
                    setCategoryProduc(element)
                    setLoading(false)}
                )
                console.log(productoCategory);
                console.log(setCategoryProduc)
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

