
import classes from './MealItem.module.css'
import React from 'react'
import MealForm from "./MealForm"
const MealItem=(props)=>{
    return(
        
            <li key={props.id} className={classes.meal}>
                <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{"₹"+props.price.toFixed(2)}</div>
            </div>
            <div>
            <MealForm></MealForm>
            </div>
            </li>
            
           
    
    )
}
export default MealItem;