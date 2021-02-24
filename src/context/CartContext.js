import { createContext, useState } from 'react';

export  const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [ cart, setCart ] = useState ([])

  const AddItem = (product) =>{
    if (cart.indexOf(product.id) === -1 ){

      setCart([...cart, {product}])
    }else{
      alert('producto en lista')
    }
    
  }    

  
  
   // console.log(setCart);
   console.log(cart);
   console.log();


    return  <CartContext.Provider value={{cart, AddItem}}>
              {children}
            </CartContext.Provider>
}


