import React,{ useContext } from "react"
import Modal from "../UI/Modal"
import classes from "./Cart.module.css"
import cartContext from "../../Store/Cart-Context"

const Cart=(props)=>{
    let ctx=useContext(cartContext);
    let  cartItems=ctx.items;
        cartItems=cartItems.map((c)=>{return(<li key={c.id}>{c.name}"----"{c.amount}</li>)})
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