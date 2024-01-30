import React from 'react'
import ItemList from './ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
const ItemListContainer = ({greeting}) => {
  const {categoriaId} = useParams ()
  console.log(categoriaId)

  const productos = [
    {id: 1, titulo: "Producto A", descripcion: "descripcion de Producto A", precio: 1000},
    {id: 2, titulo: "Producto B", descripcion: "descripcion de Producto B", precio: 2000},
    {id: 3, titulo: "Producto C", descripcion: "descripcion de Producto C", precio: 3000}
  ]

  const mostrarProdcutos = new Promise((resolve, reject) =>{
    if (productos.length > 0){
      setTimeout(()=> {
        resolve(productos)
      }, 3000)
    } else {
      reject("No se obtuvieron productos")
    }
  })
  mostrarProdcutos
    .then((resultado) => {
      console.log(resultado)
    })
    .catch((error) => {
      console.log(error)
    })
    
    const productosFiltrados = productos.filter((producto) => producto.categoria == categoriaId)
    console.log(productosFiltrados)


  return (
    <div className='container'>
      {
      categoriaId ? <ItemList productos={productosFiltrados}/> : <ItemList key={productos.id} productos={productos}/> 
      } 
    </div>
  )
}

export default ItemListContainer