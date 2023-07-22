import { Box, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteTodo, UpdateTodos, getTodos } from '../Redux/todos/actions'

const TodoList = () => {

  const [ren,setRen]=useState(false)
  const {isLoading,todos}= useSelector((store)=> store.TodoReducer)
  const dispatch = useDispatch()

  const handleToggle =(id,status)=>{
    dispatch(UpdateTodos(id,!status))
    setRen(!ren)
  }
  const handleDelete =(id)=>{
    dispatch(DeleteTodo(id))
    dispatch(getTodos)

  }

  useEffect(()=>{
    dispatch(getTodos)
  },[ren])
  return (
    <Box>
      <TodoInput />
      {isLoading && <h2>Loading...</h2>}
      { todos.map((todo)=>(
        <Box key={todo.id} display={'flex'} justifyContent={'center'} gap={'10px'} mt={'2rem'}>
          <h2>{todo.title}</h2>
          <h3>{todo.status? "Completed":"Pending"}</h3>
          <Button onClick={()=> handleToggle(todo.id,todo.status)}>Toggle</Button>
          <Button onClick={()=> handleDelete(todo.id)}>Delete</Button>
        </Box>
      ))}
    </Box>
  )
}

export default TodoList