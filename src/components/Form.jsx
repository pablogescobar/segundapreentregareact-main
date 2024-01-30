import React from 'react'
import { useState } from 'react'
import { Input, Button, Text } from '@chakra-ui/react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import Cart from './Cart'

const Form = () => {

  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [orderId, setOrderId] = useState("")


  const db = getFirestore()

  const handleSubmit = (e) => {
    e.preventDefault()
    addDoc(orderCollection, order).then(({id})=>
    setOrderId(id))
    setNombre("")
    setEmail("")
  }
  
    const order = {
      cliente: {nombre, email},
      items: Cart,
    }
    
  const orderCollection = collection(db, "orden")

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <Input placeholder='Nombre y Apellido' type='text' onChange={(e)=> setNombre (e.target.value)} value={nombre}/>
        <Input placeholder='Correo Electrónico' type='email' onChange={(e)=> setEmail (e.target.value)}value={email}/>
        <Button colorScheme='linkedin' type ="submit">Enviar</Button>
      </form>
      <Text>
        {orderId}
      </Text>
    </div>
  )
}

export default Form