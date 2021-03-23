import React, { useContext } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader, Button, Form, FormGroup } from 'reactstrap'
import { FormControl, FormLabel } from 'react-bootstrap';
import { getFirestore } from '../firebase/index'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form'

const ModalComponent = ({ setModal, modal }) => {

  const { cart, ClearCart, priceTotal } = useContext(CartContext)

  const { register, errors, handleSubmit } = useForm()

  const OnSubmit = (data) => {

    const hoy = new Date();
    let hour = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds()
    let fecha = hoy.getDate() + '/' + (hoy.getMonth() + 1) + '/' + hoy.getFullYear() + '-' + hour

    let orders = ({ fecha: fecha, usuario: data, item: [...cart], total: priceTotal })

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
      <Modal isOpen={modal}>
        <ModalHeader closeButton>
          <h2>Complete los campos para realizar su pedido</h2>
        </ModalHeader>
        <Form onSubmit={handleSubmit(OnSubmit)}>
          <ModalBody>
            <FormGroup>
              <FormLabel>Nombre</FormLabel>
              <FormControl type='text' name='name' placeholder='Nombre y Apellido' ref={
                register({
                  required: { value: true, message: 'campo requerido' },
                  pattern: { value: /^[A-Za-z- ]+$/i, message: 'caractér invalido' }
                })
              }></FormControl>
              <span className='text-danger text-small d-block mb-2'>{errors.name && errors.name.message}
              </span>
            </FormGroup>
            <FormGroup>
              <FormLabel>Telefono</FormLabel>
              <FormControl type='text' name='tel' ref={register({
                required: { value: true, message: 'campo obligtorio' },
                pattern: { value: /^[0-9]+$/i, message: 'caractér invalido' },
                maxLength: { value: 20, message: 'demasiados caracteres' },
                minLength: { value: 8, message: 'pocos caracteres' }
              })
              }></FormControl>
              <span className='text-danger text-small d-block mb-2'>{errors.tel && errors.tel.message}
              </span>
            </FormGroup>
            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormControl type="email" name='email' placeholder="xxxxx@xxxx.xxx" ref={register({
                required: { value: true, message: 'campo obligtorio' },
              })
              }></FormControl>
              <span className='text-danger text-small d-block mb-2'>{errors.email && errors.email.message}</span>
            </FormGroup>
            <FormGroup>
              <FormLabel>Dirección de envio</FormLabel>
              <FormControl type='text' name='direccion' placeholder='Indique su dirección' ref={
                register({
                  required: { value: true, message: 'campo obligtorio' }
                })
              }></FormControl>
              <span className='text-danger text-small d-block mb-2'>{errors.direccion && errors.direccion.message}</span>
            </FormGroup>
            <FormGroup>
              <FormLabel>Comentarios</FormLabel>
              <FormControl as='textarea' rows='{3}' name='comentario' placeholder="Comentario extra" />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={() => { setModal(false) }}>Cerrar ventana</Button>
            <Button variant="primary" type='submit' >Finalizar compra</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  )
}

export default ModalComponent
