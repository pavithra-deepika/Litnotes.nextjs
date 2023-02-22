import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
import Link from 'next/link';


export default function User({user,key}) {

  return (
    <div>
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                {user?.username}     
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                {user?.name}     
            </Typography>
            </CardContent>
            <CardActions>
              <Link href={ { pathname: "/pages/Todo", id : {key}}}>
                <button type="button" size="small">Todo </button>
              </Link>
              </CardActions>
        </Card>
    </div>
  )
}
