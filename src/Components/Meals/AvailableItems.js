import React from "react"
import classes from './AvailableItems.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'

const Items=[{id:1,name:"Paneer Tikka Masala", description:"Roasted panneer tikka(paties) fried in masala(indian curry)",price:500,
},{id:2,name:"Paneer Masala", description:"Roasted panneer fried in masala(indian curry)",price:400}]
const AvailableItems=()=>{

   const list= Items.map((c)=>{return (<MealItem key={c.id} name={c.name} description={c.description} price={c.price}></MealItem>
 )})

   return (<div className={classes.meals}>
   <Card> <ul>
        {list}
        
    </ul></Card>
   </div>)
}

export default AvailableItems;