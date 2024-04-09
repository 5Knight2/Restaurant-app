import CartContext from './Cart-Context'

const CartProvider=(props)=>{

    const addItemCartHandler=(item)=>{

    }
    const removeItemFromCartHandler=(id)=>{
        
    }

    const cartContext={
        items:[],
        totalAmount:1,
        addItem:addItemCartHandler,
        removeItem:removeItemFromCartHandler}

    return(<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>)
}

export default CartProvider