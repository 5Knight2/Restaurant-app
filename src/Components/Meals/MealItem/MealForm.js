import classes from './MealForm.module.css'
import Input from '../../UI/Input';
import React,{ useContext,useRef } from 'react';
import cartContext from '../../../Store/Cart-Context';

const MealForm=(props)=>{
  const ctx=useContext(cartContext)

    const addItemClicked=(e)=>{
        e.preventDefault();
        const qty=+document.getElementById("amount_"+props.item.id).value
        ctx.addItem({...props.item,amount:qty})

    }
    return (
        <form className={classes.form}>
           <Input label="Amount" input={{id:"amount_"+props.item.id,type:'number' ,min:0,step:1,defaultValue:1}}></Input>
            <button onClick={addItemClicked}>+Add</button>
        </form>
    )
}
export default MealForm;