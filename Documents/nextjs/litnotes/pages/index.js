import Head from 'next/head'
import react, { useEffect } from 'react'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useState } from 'react'
import UserList from './components/UserList'
import Todo from './pages/Todo'
import Todos from './components/Todos'
// import Todos from './components/UserList'
export default function Home() {
  const [users, SetUsers] = useState([])
    async function fetchUser() {
      const data=await fetch("https://jsonplaceholder.typicode.com/users");
      const userData = await data.json();
      // console.log(userData)
      SetUsers(userData)
    }
    
    useEffect(()=>{
      fetchUser()
    },[])

  return (
    <div>
      <div>
        <h1>Lit Notes Json Plceholder</h1>
      </div>
              <UserList users={users} /> 
              <Todos />     

    </div>

  )
}
