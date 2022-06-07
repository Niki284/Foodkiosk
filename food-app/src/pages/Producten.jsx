import React, { useState } from 'react'
import Modal from '../components/Modal/Modal'
import { categorie } from '../constans'
import useFetch from '../hooks/useFetch';
import { Product } from './Product';
import { API_FOOD_URL } from '../api';
//import pizza from '../pizza.json'


 const Producten = () => {

  const [data,error,loading] = useFetch(API_FOOD_URL)
     

    
    return (
      <div>
          
          Producten
          
      </div>
    )
}
export default Producten;