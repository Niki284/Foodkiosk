
import pizza from '../assets/img/Rectangle 7.png'
import cola from '../assets/img/Rectangle 11.png'
import pitta from '../assets/img/Rectangle 12.png'
import { Link } from 'react-router-dom'
const Home = () => {
  return (

    <div>
      <ul>
        <li><img src={pizza} alt="" /><a href="Pizza">Pizza</a></li>
        <li><img src={cola} alt="" /><a href="Drinks">Drinks</a></li>
        <li><img src={pitta} alt="" /><a href="pitta">Pitta</a></li>
      </ul>
     
      
     
    </div>
  )
}
export {Home}