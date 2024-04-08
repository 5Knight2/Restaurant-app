
import classes from './MealItem.module.css'
import React from 'react'
const MealItem=(props)=>{
    return(
        <section>
            <li key={props.id}>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{props.price}</div>
            </li>
        </section>
    )
}
export default MealItem;