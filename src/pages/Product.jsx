import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import API from '../api';
import { categorie } from '../constans'
import useFetch from '../hooks/useFetch';



export const Product = () => {
   const {categorie} = useParams();
   const [products,productError,productLoading] = useFetch(API[categorie])
   const img = require(`../assets/img/${products.picture}.png`)
   console.log(products);
  return (
    <div>
     
     <ul>
       
       {productLoading && <p>Loading...</p>}
      {productError && <p>Something went wrong...</p>}
      {products && (
        <>
          
           {products["pizza's"].map((product)=> (
             <li>{product.name},<img src={img} alt={product.picture} />
             </li>
          ))}
          
        </>
      )}
      
       </ul> 
    </div>
  )
}
