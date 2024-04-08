import classes from './MealForm.module.css'
import Input from '../../UI/Input';
const MealForm=()=>{
    
    return (
        <form className={classes.form}>
           <Input label="Amount" input={{id:"amount",type:'number' ,min:0,step:1,defaultValue:0}}></Input>
            <button >+Add</button>
        </form>
    )
}
export default MealForm;