
import classes from './MealItem.module.css'
import React from 'react'
const MealItem=(props)=>{
    return(
        <React.Fragment>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{props.price}</div>
            </React.Fragment>
    )
}
export default MealItem;