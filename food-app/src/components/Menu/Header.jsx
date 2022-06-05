import React from 'react'
import { NavLink } from 'react-router-dom';
import ROUTES from '../../routes';
import './Header.css';


function Header() {
  return (
   
      <div>
        <ul>
          {
           Object.keys(ROUTES).map(route => (
            <li key={route}>
               <NavLink 
               state={( {isActive})=> {
                 return {
                   background:isActive ? 'green' : "red",
                 };
                  
               }}
               to={ROUTES[route]}>
                  {route}
              </NavLink>
            </li>
            ))};
       </ul>
      </div>
       
  );
};

export {Header} ;