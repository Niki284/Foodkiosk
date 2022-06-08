import './App.css';
import {Routes, Route, Link, Router} from 'react-router-dom';
import {Home} from './pages/Home';
import { Product } from './pages/Product';
import Products from './pages/Products'
import BaseLayout from './layouts/BaseLayout';





function App() {
  /*
  const data = 
  [
    {path:"/", name: 'Home', element:<Home/>},
    {path:"/detail", name: 'Detail', element:<Detailpage/>},
    <Header links = {data}/>
  ]
  */
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<BaseLayout/>}>
          <Route index element={<Home />}/>
          <Route path="products" element={<Products />}/>
          <Route path="product:categorie" element={<Product />}/>
        </Route>
          
         
        {/*data.map(e=><Route key = {e.path} path = {e.path} element = {e.element}/>)*/}
        {/* <Route path="/"  element={<Home />} />
        <Route path="/about"  element={<About />} />
        <Route path="/projecten" element={<Projecten />} /> */}
      </Routes>
    </div>
  );
}

export default App;
