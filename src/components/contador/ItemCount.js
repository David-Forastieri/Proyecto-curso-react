
import React, {useState} from 'react';
import './style.css';

const ItemCount = ({stock, initial, onAdd}) => {

        const [contador, setContador] = useState (initial);

        const Agregar = () =>{
            if(contador < stock ) {
                setContador(contador +1);
            }
        }
        
        const Restar = () =>{
            if(contador > 1 ) {
                setContador(contador -1);
            }
        }
        
    return (
        <>
            <div className='row contador'>
                <button onClick = {Restar} > - </button>

                <div className='number'><p>{contador}</p></div>

                <button onClick = {Agregar} > + </button>
            </div>
            <div className='row justify-content-center'>
                <button onClick={()=> {onAdd(contador)}} >Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount ;
