import Modal from "../UI/Modal"
import classes from "./Cart.module.css"

const Cart=(props)=>{
    let  cartItems=[{id:1,name:"Paneer tikka Masala", amount:"2",price:"500"}]
        cartItems=cartItems.map((c)=>{return(<li key={c.id}>{c.name}</li>)})

        
    return(
        <Modal onClick={props.onCloseCart}>
            <ul className={classes['cart-items']}>
            {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>1000.00</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onCloseCart}>Close</button>
                <button className={classes["button"]}>Order</button>
            </div>

        </Modal>
    )
}

export default Cart;