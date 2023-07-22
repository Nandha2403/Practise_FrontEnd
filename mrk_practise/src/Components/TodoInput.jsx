import { Box, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodos } from '../Redux/todos/actions'

const TodoInput = () => {
  const [title,setTitle]=useState("")
    const dispatch = useDispatch()

  const handleAdd=()=>{
    const todoData={
      title,
      status:false
    }
    dispatch(addTodos(todoData))
  }

  return (
    <Box w={"30%"} m={'auto'} mt={'4rem'}>
      <Box display={'flex'} gap={'4px'}>
      <Input border={'1px solid silver'} type='text' value={title} onChange={(e)=> setTitle(e.target.value)} />
      <Button colorScheme='teal' onClick={handleAdd}>Add</Button>
      </Box>
    </Box>
  )
}

export default TodoInput