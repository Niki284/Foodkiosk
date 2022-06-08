
import { Link } from 'react-router-dom'
import {categorie} from '../constans'
import "../components/categorie.css"
const Home = () => {
  return (

    <div className='categorie'>
      <ul className='categorie--list'>
      {categorie.map((e)=>{
        const img = require(`../assets/img/${e.img}`);
        return <li className='categorie--link'><img className='categorie--img' src={img} alt=""/><a href={e.slug}>{e.name}</a></li>})}
      </ul>
     
      
     
    </div>
  )
}
export {Home}