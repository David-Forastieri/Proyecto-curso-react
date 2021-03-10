import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { getFirestore } from '../../firebase';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button, Form, FormGroup, FormText } from 'reactstrap'
import { FormControl, FormLabel } from 'react-bootstrap';

const Cart = () => {

  const { cart, RemoveItem, ClearCart, priceTotal } = useContext(CartContext);

  const [modal, setModal] = useState(false)

  const formName = useRef('')
  const formPhono = useRef('')
  const formEmail = useRef('')
  const formComent = useRef('')

  const FinDeCompra = () => {
    let orders = ({ usuario: { name: formName.current.value, email: formEmail.current.value, tel: formPhono.current.value, comentario: formComent.current.value }, item: [...cart], total: priceTotal })

    const db = getFirestore()
    const InsertOrders = db.collection('ordenes')
    InsertOrders.add(orders).then((value) => {
      alert('El Numero de orden de su pedido es: ' + (value.id))
    })

    setModal(false)
    ClearCart()
  }

  return (
    <>
      {cart.length === 0 ?
        <div>
          <h1>Carrito vacio</h1>
          <Link to={`/`}><button>Continua tu compra</button></Link>
        </div> :
        <div>
          <h1>Este carrito tiene</h1>
          <button onClick={() => ClearCart()}>Vaciar carrito</button>
          <br />
          <h2>El precio total de los productos es: $ {priceTotal}</h2>
          <ul>
            {cart.map(elemento => {
              return (
                <li key={elemento.id}>
                  <img src={elemento.item.image} />
                  <h3>{elemento.item.name}</h3>
                  <h3>cantidad : {elemento.quantity} </h3>
                  <h3>valor:$ {elemento.item.price}</h3>
                  <h4>Total:$ {elemento.quantity * elemento.item.price}</h4>
                  <button onClick={() => RemoveItem(elemento.id)} >Eliminar producto de lista</button>
                  <br />
                </li>
              )
            })
            }
          </ul>
          <div>
            {cart.length > 0 ? <button onClick={() => { setModal(true) }}>Finalizar Checkout </button> :
              null}
          </div>
        </div>
      }
      <>
        <Modal isOpen={modal}>
          <ModalHeader closeButton>
            <h2>Complete los campos para realizar su pedido</h2>
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <FormLabel>Nombre</FormLabel>
                <FormControl type='text' ref={formName} placeholder='Nombre y Apellido'></FormControl>
              </FormGroup>
              <FormGroup>
                <FormLabel>Telefono</FormLabel>
                <FormControl type='text' ref={formPhono}></FormControl>
              </FormGroup>
              <FormGroup controlId="formBasicEmail">
                <FormLabel>Email</FormLabel>
                <FormControl type="email" ref={formEmail} placeholder="xxxxx@xxxx.xxx"></FormControl>
                <FormControl type="email" placeholder="xxxxx@xxxx.xxx"></FormControl>
                <FormText className='text-muted'>Por favor introduzca nuevamente su Email</FormText>
              </FormGroup>
              <FormGroup controlId="formBasicPassword">
                <FormLabel>Comentarios</FormLabel>
                <FormControl as='textarea' rows='{3}' ref={formComent} placeholder="Comentario extra" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={() => { setModal(false) }}>Cerrar ventana</Button>
            <Link to={`/`}><Button variant="primary" type="submit" onClick={() => { FinDeCompra() }}>Finalizar compra</Button></Link>
          </ModalFooter>
        </Modal>
      </>
    </>
  )
}

export default Cart;
