import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API_FOOD_URL } from '../api';
import { categorie } from '../constans'
import useFetch from '../hooks/useFetch';



export const Product = () => {
   const {categorie} = useParams();
   const [products,productError,productLoading] = useFetch(`https://raw.githubusercontent.com/Niki284/Foodkiosk/main/food-app/docs/${categorie}.json`)
   
  return (
    <div>
     <ul>
       <li>
       <p>{products.API_FOOD_URL}</p>
       </li>
       </ul> 
      Product
    </div>
  )
}
