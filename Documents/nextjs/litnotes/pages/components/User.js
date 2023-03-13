import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActions, Grid } from '@mui/material';
import Link from 'next/link';


export default function User({user}) {

  return (
   
        <Card sx={{ minWidth: 275, bgcolor: 'background.paper',
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        minWidth: 400, }}>
            <CardContent style={{align:'center'}}>
            <Typography sx={{ fontSize: 14 , mb:2, ml:5}} variant="h6" color="black">
                User Name: {user?.username}     
            </Typography>
            <Typography sx={{ fontSize: 14 , ml:5}} variant="h6" color="black">
                Name: {user?.name}     
            </Typography>
            </CardContent>
            <CardActions>
              <Link href={ { pathname: "/pages/Todo", query:{id:user.id}}}>
                <Button type="button"  size="medium" >Todo </Button>
              </Link>
              <Link href={ { pathname: "/pages/Post", query:{id:user.id}}}>
                <Button type="button" size="medium">Post </Button>
              </Link>
              <Link href={ { pathname: "/pages/Album", query:{id:user.id}}}>
                <Button type="button" size="medium">Album </Button>
              </Link>
              </CardActions>
        </Card>
    
  )
}
