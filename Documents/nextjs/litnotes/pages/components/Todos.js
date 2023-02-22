import React from 'react'

function Todos() {

  async function fetchTodo() {
    const data=await fetch('https://jsonplaceholder.typicode.com/todos?id=`${key.id}`')
    const userData = await data.json();
    console.log(userData)
  }



  return (
    <div>Todos</div>
  )
}

export default Todos
