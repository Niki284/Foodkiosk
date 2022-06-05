/*import React, { Component } from 'react'

export default class Test extends Component {
    constructor(){
        super()
        this.state= {
        error: null,
        isLoading:false,
        items: []
       
       };  
    }
    componentDidMount() {
           fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink")
           .then(res => res.json)
           .then(
               (result) => {
                   this.setState({
                       isLoading:true,
                       items:  result.drinks
                   });
               },
               (error) => {
                   this.setState({
                       isLoading:true,
                       error
                   })
               }
           )
       }
       render() {
           const { error , isLoading, items} =this.state;
           if (error) {
               return <p>Error {error.message}</p>
           } else if(!isLoading) {
               return <p>Loading...</p>
           } else {
               return  (
                   <ul>
                       {items?.map(item => {
                           <li key={item.name}>
                               {item.strDrink}
                               <img src={item.strDrinkThumb} alt="" />
                           </li>
                       })}
                   </ul>
               )
           }
       }
 
}
*/