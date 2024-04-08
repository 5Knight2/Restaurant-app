import React from "react";
import image from "../Meals/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"

const Header=()=>{

    return(<React.Fragment>
    <header className={classes.header}>
        <h1>React Meals </h1>
        <HeaderCartButton></HeaderCartButton>
    </header> 
     <div className={classes['main-image']}>
     <img src={image}></img>
  </div> </React.Fragment>)
}

export default Header;