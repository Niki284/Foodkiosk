import React, { useState } from 'react'
import Modal from '../components/Modal/Modal'


 const Producten = () => {
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