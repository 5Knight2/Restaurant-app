import React,{ useContext } from "react"
import Modal from "../UI/Modal"
import classes from "./Cart.module.css"
import cartContext from "../../Store/Cart-Context"

const Cart=(props)=>{
    let ctx=useContext(cartContext);

    const decreseAmount=(e)=>{
        ctx.removeItem(e.target.id)
    }
    const increaseAmount=(e)=>{
        ctx.addItem({id:e.target.id,amount:1})
    }

    let  cartItems=ctx.items;
        cartItems=cartItems.map((c)=>{return(
        <li key={c.id} >{c.name}"
        <div >
        <div className={classes.price}>{"₹"+c.price.toFixed(2)} </div>
       
       
        <span className={classes.badge}>x{c.amount}</span> 
        <button id={c.id} className={classes["button--count"]} onClick={decreseAmount} >-</button>
        <button id={c.id} className={classes["button--count"]} onClick={increaseAmount}>+</button>
        
        </div>
        </li>)})
console.log(ctx.totalAmount)
        
    return(
        <Modal onClick={props.onCloseCart}>
            <ul className={classes['cart-items']}>
            {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{ctx.totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onCloseCart}>Close</button>
                <button className={classes["button"]}>Order</button>
            </div>

        </Modal>
    )
}

export default Cart;