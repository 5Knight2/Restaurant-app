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
                setTotalAmount((amount)=>{
                    return (amount+c.price*item.amount)})
                   
             c.amount=c.amount+item.amount;}
             return c;
        })
        if(flag==true)return [...prevState]
        else
            {
                setTotalAmount((amount)=>{
                    
                    return (amount+item.price*item.amount)})
                return [...prevState,item]
            
            }})
        

    }
    const removeItemFromCartHandler=(id)=>{
        setItems((prevState)=>{
           return prevState.map((c)=>{if( c.id==id && c.amount>0){c.amount=c.amount-1
            setTotalAmount((amount)=>{return amount-c.price})}
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