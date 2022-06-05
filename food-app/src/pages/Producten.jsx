import React, { useState } from 'react'
import Modal from '../components/Modal/Modal'
import { categorie } from '../constans'
import useFetch from '../hooks/useFetch';
import { Product } from './Product';
//import pizza from '../pizza.json'


 const Producten = () => {
  //const{slug}=useParams();
  //useFetch(<Product/> ${slug})
    const [modelActive, setModelActive ] = useState(false)
    return (
      <div>
   
          Producten
          <button className='open' onClick={()=> setModelActive(true)}>test</button>
          <Modal active={modelActive} setActive={setModelActive} />
      </div>
    )
}
export default Producten;