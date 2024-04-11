import { useState } from 'react'
import CartContext from './Cart-Context'

const CartProvider=(props)=>{

    const [items,setItems]=useState([]);
    const [totalAmount,setTotalAmount]=useState(0);

    const addItemCartHandler=(item)=>{
        setItems((prevState)=>{
            console.log(prevState)
            let flag=false;
             prevState.map((c)=>{if(c.id==item.id){
                flag=true;
                if(c.amount==undefined)
                c={...c,amount:1}

             c.amount=c.amount+item.amount;}
             return c;
        })
        if(flag==true)return [...prevState]
        else
            return [...prevState,item]})
        setTotalAmount((amount)=>{return amount+item.price})
console.log(cartContext.totalAmount)
    }
    const removeItemFromCartHandler=(id)=>{
        setItems((prevState)=>{
           return prevState.map((c)=>{if( c.id==id && c.amount>0)c.amount=c.amount-1
        return c})
        })
    }

    const cartContext={
        items:items,
        totalAmount:totalAmount,
        addItem:addItemCartHandler,
        removeItem:removeItemFromCartHandler}

    return(<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>)
}

export default CartProvider