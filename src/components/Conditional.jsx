import React from 'react'
import Product from './Product'
import Check from './Check'

export default function Conditional({user,nicname,setNicname,handleSubmit,item,setItem,price,setPrice,creaProduct,product,removeItem,buyProduct,likeProduct}) {
  return (
    <div>
        
        {
          user ? <Product name={item} setItem={setItem} price={price} setPrice={setPrice} creaProduct={creaProduct} product={product} removeItem={removeItem} buyProduct={buyProduct} likeProduct={likeProduct}/> 
               : <Check handleSubmit={handleSubmit} nicname={nicname} setNicname={setNicname}/> 
        }

    </div>
  )
}


