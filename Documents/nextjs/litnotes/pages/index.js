import Head from 'next/head'
import react, { useEffect } from 'react'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useState } from 'react'
import UserList from './components/UserList'
// import styles from '../styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [users, SetUsers] = useState([])
    async function fetchUser() {
      const data=await fetch("https://jsonplaceholder.typicode.com/users");
      const userData = await data.json();
      console.log(userData)
      SetUsers(userData)
    }
    
    useEffect(()=>{
      fetchUser()
    },[])

  return (
    <div>
              <UserList users={users} />      

    </div>

  )
}
