import React from "react";
import image from "../Meals/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"

const Header=(props)=>{

    return(<React.Fragment>
    <header className={classes.header}>
        <h1>React Meals </h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
    </header> 
     <div className={classes['main-image']}>
     <img src={image}></img>
  </div> </React.Fragment>)
}

export default Header;