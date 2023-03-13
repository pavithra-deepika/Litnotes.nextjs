import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Grid } from '@mui/material';


function Posts() {
  const router = useRouter();
  const dataId = router.query;
  
  const [posts, setPosts] =  useState([])
  async function fetchPost() {
    const data=await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${dataId.id}`) 
    const postData = await data.json();
    setPosts(postData)
  }
  useEffect(() => {

    fetchPost()
  },[]
  )

  return (
    <div>
         <Grid
    container
    spacing={2}
    direction="row"
    justify="flex-start"
    alignItems="flex-start"
>

      {posts?.map((post)=>
            <Grid item xs={12} sm={6} md={3} >

       <Card sx={{ minWidth: 275 }}>
       <CardContent>
       <Typography sx={{ fontSize: 14 }} color="text.secondary">
           {post.title}   
       </Typography>
       <Typography sx={{ fontSize: 14 }} color="text.secondary">
           {post.userId}  
       </Typography>
       </CardContent>
   </Card>
   </Grid>

)}
           
         </Grid>
    </div>
  )
}


export default Posts
