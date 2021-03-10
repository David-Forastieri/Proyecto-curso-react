import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(0)

  const AddItem = (product) => {
    if (IsInCart(product.id) === false) {
      setCart([...cart, product])
    } else {
      alert('producto en lista.')
    }
    //SUMA CANTIDAD DE ITEMS EN EL CART
    setQuantity(parseInt(quantity + product.quantity))
  }

  //RESTA CANTIDAD DE ITEMS EN EL CART
  const cambiarCart = (list) => {
    let itemsCart = list.map(e => e.quantity)
    setQuantity(itemsCart.reduce((a, b) => {
      return a + b
    }, 0))
  }

  // FUNCION PARA DETECTAR SI UN ITEM YA ESTA INGRESADO EN EL CARRITO DE COMPRAS
  const IsInCart = (id) => {
    return cart.some(e => e.id === id)
  }

  // FUNCION PARA REMOVER UN SOLO ITEM   
  const RemoveItem = (id) => {
    let list = cart.filter(product => product.id !== id)
    setCart(list)
    cambiarCart(list)
  }

  //ELIMINA TODOS LOS PRODUCTOS DEL CART 
  const ClearCart = () => {
    setCart([])
    setQuantity(0)
  }

  //FUNCION QUE DEVUELVE EL PRECIO TOTAL DE PRODUCTOS EN EL CART
  const priceTotal = cart.reduce((a, b) => {
    return a + (b.quantity * b.item.price)
  }, 0)

  return <CartContext.Provider value={{ cart, AddItem, RemoveItem, ClearCart, quantity, priceTotal }}>
    {children}
  </CartContext.Provider>
}


