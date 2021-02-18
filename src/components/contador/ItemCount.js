
import React from 'react';
import './contador.css';

const ItemCount = ({contador, restar, agregar, onAdd}) => { 
          
    return (
        <>
          <div className='container'>
            <div className='row contador'>
                <button onClick ={()=> {restar()}} > - </button>

                <div className='number'><p>{contador}</p></div>

 
                <button onClick ={()=> {agregar()}} > + </button>
                

            </div>
            <div className='row justify-content-center'>
                <button onClick={()=> {onAdd(contador)}} >Agregar al carrito</button>
            </div>
          </div>
        </>
    )
}

export default ItemCount ;
