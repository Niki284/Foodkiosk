import './App.css';
import {Home} from './pages/Home';
import { Product } from './pages/Product';
import Products from './pages/Products'
import {Routes, Route, Link, Router, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Betaal from './pages/Betaal'
import BaseLayout from './layouts/BaseLayout';





function App() {
  
  const location = useLocation()
  return (
    <div>
        <AnimatePresence>
              <Routes location={location} key={location.pathname}>
        <Route path="/" element={<BaseLayout/>}>
          <Route index element={<Home />}/>
          <Route path="products" element={<Products />}/>
          <Route path="products/:categorie" element={<Product />}/>
          <Route path="afrekennen" element={<Betaal />}/>
        </Route>
      </Routes>
        </AnimatePresence>
      
    </div>
  );
}

export default App;
