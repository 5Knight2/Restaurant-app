import React from "react"
import classes from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"


const HeaderCartButton=(props)=>{
let count=0;
    return(
        <React.Fragment>
            <button className={classes.button} >
              <span className={classes.icon}><CartIcon></CartIcon></span>
              <span> Your Cart </span>
                <span className={classes.badge}>{count}</span></button>
        </React.Fragment>
    )
}

export default HeaderCartButton;