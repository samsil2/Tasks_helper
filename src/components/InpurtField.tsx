import React, { useRef } from 'react';
import './style.css';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField =({todo, setTodo, handleAdd}: Props)=>{
    const inputRef = useRef<HTMLInputElement>(null);
    
    return(
        <form className='input' onSubmit={(e) => {
            handleAdd(e);

            // shift the focus from input box after pressing enter
            inputRef.current?.blur();
          }}>

            <input ref={inputRef} type='input' value={todo} onChange={(e)=> setTodo(e.target.value)
            }
            placeholder='Enter your task' className='input_box'/>
            <button type='submit' className='input_submit'>Add</button>

        </form>
    )
}
export default InputField

