import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API_FOOD_URL } from '../api';
import { categorie } from '../constans'
import useFetch from '../hooks/useFetch';



export const Product = () => {
   const {categorie} = useParams();
   const [products,productError,productLoading] = useFetch(`https://raw.githubusercontent.com/Niki284/Foodkiosk/main/food-app/docs/${categorie}.json`)
   console.log(products);
  return (
    <div>
     
     <ul>
       
       {productLoading && <p>Loading...</p>}
      {productError && <p>Something went wrong...</p>}
      {products && (
        <>
          
           {products["pizza's","pitta","data"].map((product)=> (
             <li>{product.name},<img src={product.picture} alt="" />
             </li>
          ))}
          
        </>
      )}
      
       </ul> 
    </div>
  )
}
