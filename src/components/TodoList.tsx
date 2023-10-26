import React from 'react'
import './style.css';
import { Todo } from '../models/models';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  
}

const TodoList:React.FC<Props> = ({todos,
  setTodos}:Props) => {
  return (
    <div className='todos'>
      {todos.map((todo)=>(
        <li>{todo.todo}</li> //task showing
      ))}

      
    </div>
  )
}

export default TodoList
