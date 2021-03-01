import { createContext, useState } from 'react';

export  const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [ cart, setCart ] = useState ([])

  const AddItem = (product) =>{
    if(IsInCart(product.id) === -1){
      setCart([...cart, {product}])
    }
    
  }    

 // FUNCION PARA DETECTAR SI U ITEM YA ESTA INGRESADO EN EL CARRITO DE COMPRAS
  const IsInCart = (id) =>{
    console.log(cart.findIndex(e => e.id === id))   
      return cart.findIndex(e => e.product.id === id) 
    }
   
 // FUNCION PARA REMOVER UN SOLO ITEM   
  const RemoveItem = (id) =>{
    let list = cart.filter(product => product.id !== id )
   setCart(list)

}


    return  <CartContext.Provider value={{cart, AddItem, RemoveItem}}>
              {children}
            </CartContext.Provider>
}


