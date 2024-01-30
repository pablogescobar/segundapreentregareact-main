import React from 'react'
import { useParams } from 'react-router-dom'

const ProductCategory = () => {
    const {categoria} = useParams()
    console.log(categoria)
  return (
    <div>{categoria}</div>
  )
}

export default ProductCategory