import React from 'react';
import "./styles.css";


const InputField =()=>{
    return(
        <form className='input'>

            <input type='input' placeholder='Enter your task' className='inputbox'/>
            <button type='submit' className='input_submit'>Add</button>

        </form>
    )
}
export default InputField