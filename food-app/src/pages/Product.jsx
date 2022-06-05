import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API_FOOD_URL } from '../api';
import { categorie } from '../constans'



export const Product = () => {
    categorie.map(categorie=> <Link to={categorie.slug}>
        {categorie.name}
    </Link> )
   const params = useParams();

   useEffect(() => {
    fetch(API_FOOD_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
   }, [])
   
  return (

    <div>Product</div>
  )
}
