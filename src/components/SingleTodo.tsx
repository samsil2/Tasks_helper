import React from 'react'
import { Todo } from '../models/models';

type Props = {
    todo:Todo;
    todos:Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo,todos,setTodos}:Props) => {
  return (
    <div>
      
    </div>
  )
}

export default SingleTodo
