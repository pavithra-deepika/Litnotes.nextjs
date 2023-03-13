import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function Todos() {
  const router = useRouter();
  const dataId = router.query;
  
  const [todos, setTodos] =  useState([])
  async function fetchTodo() {
    const data=await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${dataId.id}`) 
    const todoData = await data.json();
    console.log(todoData)
    setTodos(todoData)
  }
  useEffect(() => {

    fetchTodo()
  },[]
  )

  return (
    <div>
      <div>

      {todos?.map((todo)=>
       <Card sx={{ minWidth: 275 }}>
       <CardContent>
       <Typography sx={{ fontSize: 14 }} color="text.secondary">
           {todo.title}   
       </Typography>
       <Typography sx={{ fontSize: 14 }} color="text.secondary">
           {todo.userId}  
       </Typography>
       </CardContent>
   </Card>
)}
         </div>
           
    </div>
  )
}

export default Todos
