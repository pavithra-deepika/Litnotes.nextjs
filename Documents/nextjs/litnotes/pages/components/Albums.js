import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Grid } from '@mui/material';

function Albums() {
  const router = useRouter();
  const dataId = router.query;
  
  const [albums, setAlbums] =  useState([])
  async function fetchAlbum() {
    const data=await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${dataId.id}`) 
    const todoData = await data.json();
    setAlbums(todoData)
  }
  useEffect(() => {

    fetchAlbum()
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

      {albums?.map((album)=>
                  <Grid item xs={12} sm={6} md={3} >

       <Card sx={{ minWidth: 275 }}>
       <CardContent>
       <Typography sx={{ fontSize: 14 }} color="text.secondary">
           {album.title}   
       </Typography>
       <Typography sx={{ fontSize: 14 }} color="text.secondary">
           {album.userId}  
       </Typography>
       </CardContent>
   </Card>
      </Grid>

)}
</Grid>
           
    </div>
  )
}

export default Albums
