import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    if (localStorage.getItem('cart') !== null) {
      setCart(JSON.parse(localStorage.getItem('cart')))
      QuantityItems(JSON.parse(localStorage.getItem('cart')))
    }
  }, [])

  //FUNCION AGREGAR PRODUCTOS AL CARRITO
  const AddItem = (product) => {
    if (IsInCart(product.id) === false) {
      let newCart = [...cart, product]
      setCart(newCart)
      LocalStorage(newCart)

      //SUMA CANTIDAD DE ITEMS EN EL CART
      setQuantity(parseInt(quantity + product.quantity))

    } else {
      NewQuantityProduct(product)
    }
  }

  //FUNCION SI EL PRODUCTO SE ENCUENTRA REPETIDO
  const NewQuantityProduct = (id) => {
    let lista = cart.filter(product => product.id !== id.id)
    let newLista = [...lista, id]
    setCart(newLista)
    LocalStorage(newLista)
    cart.length === 1 ? setQuantity(id.quantity) :
      QuantityItems(newLista)
  }

  //FUNCION PARA CAMBIAR CANTIDAD DE ITEMS
  const QuantityItems = (newLista) => {
    let itemInCart = newLista.map(e => e)
    setQuantity(itemInCart.reduce((a, b) => a + b.quantity, 0))
  }

  // FUNCION PARA DETECTAR SI UN ITEM YA ESTA INGRESADO EN EL CARRITO DE COMPRAS
  const IsInCart = (id) => {
    return cart.some(e => e.id === id)
  }

  // FUNCION PARA REMOVER UN SOLO ITEM   
  const RemoveItem = (id) => {
    let list = cart.filter(product => product.id !== id)
    setCart(list)
    LocalStorage(list)
    QuantityItems(list)

  }

  //ELIMINA TODOS LOS PRODUCTOS DEL CART 
  const ClearCart = () => {
    setCart([])
    LocalStorage(null)
    setQuantity(0)
  }

  //FUNCION QUE DEVUELVE EL PRECIO TOTAL DE PRODUCTOS EN EL CART
  const priceTotal = cart.reduce((a, b) => {
    return a + (b.quantity * b.item.price)
  }, 0)

  //FUNCION GUARDAR CART EN LOCAL STORAGE
  const LocalStorage = (producto) => {
    producto === null || producto === [] ? localStorage.clear('cart') :
      localStorage.setItem('cart', JSON.stringify(producto))
  }

  return <CartContext.Provider value={{ cart, setCart, AddItem, RemoveItem, ClearCart, quantity, priceTotal, LocalStorage }}>
    {children}
  </CartContext.Provider>
}


