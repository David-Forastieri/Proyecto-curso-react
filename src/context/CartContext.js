import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(0)

  //FUNCION AGREGAR PRODUCTOS AL CARRITO
  const AddItem = (product) => {
    if (IsInCart(product.id) === false) {
      setCart([...cart, product])

      //SUMA CANTIDAD DE ITEMS EN EL CART
      setQuantity(parseInt(quantity + product.quantity))

    } else {
      Nueva(product)
    }
  }

  //FUNCION SI ALGUNO REPETIDO CAMBIAR CANTIDAD
  const Nueva = (id) => {
    let lista = cart.filter(product => product.id !== id.id)
    setCart([...lista, id])
    LocalStorage()
    cart.length === 1 ? setQuantity(id.quantity) :
      NuevoContador()
  }

  const NuevoContador = () => {
    console.log(cart)
    let itemInCart = cart.map(e => e.quantity)
    console.log(itemInCart)
    setQuantity(itemInCart.reduce((a, b) => {
      return (a + b)
    }, 0))
  }

  // console.log(cart)
  /* let xxx = cart.map(e => e.quantity)
  console.log(xxx)
  setQuantity(xxx.reduce((a, b) => a + b)) */

  /* //RESTA CANTIDAD DE ITEMS EN EL CART
  const cambiarCart = (list) => {
    let itemsCart = list.map(e => e.quantity)
    setQuantity(itemsCart.reduce((a, b) => {
      return a + b
    }, 0))
  } */

  // FUNCION PARA DETECTAR SI UN ITEM YA ESTA INGRESADO EN EL CARRITO DE COMPRAS
  const IsInCart = (id) => {
    return cart.some(e => e.id === id)
  }

  // FUNCION PARA REMOVER UN SOLO ITEM   
  const RemoveItem = (id) => {
    let list = cart.filter(product => product.id !== id)
    setCart(list)
    LocalStorage()
    NuevoContador()
    //cambiarCart(list)
  }

  //ELIMINA TODOS LOS PRODUCTOS DEL CART 
  const ClearCart = () => {
    setCart([])
    LocalStorage()
    setQuantity(0)
  }

  //FUNCION QUE DEVUELVE EL PRECIO TOTAL DE PRODUCTOS EN EL CART
  const priceTotal = cart.reduce((a, b) => {
    return a + (b.quantity * b.item.price)
  }, 0)

  //FUNCION GUARDAR CART EN LOCAL STORAGE
  const LocalStorage = () => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  return <CartContext.Provider value={{ cart, AddItem, RemoveItem, ClearCart, quantity, priceTotal }}>
    {children}
  </CartContext.Provider>
}


