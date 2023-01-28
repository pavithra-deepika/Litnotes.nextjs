import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Route, Routes, unstable_HistoryRouter, useHistory, useNavigate } from 'react-router-dom';
// import { Outlet, Link } from "react-router-dom";


export default function User({user}) {

    // const navigate = useNavigate();

    // const navigateTodo = () => {
    //     navigate('/Todo');}
  return (
    <div>
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
            {/* <Typography sx={{ fontSize: 14 }} color="text.secondary">
                {user?.username}     
            </Typography> */}
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                {user?.name}     
            </Typography>
            </CardContent>
            <CardActions>
            {/* <Button size="small">Post</Button> */}
            {/* <Button size="small">Comment</Button>  */}
            <button type="button" onClick={() => router.push('/Todo')}>
      Todo
    </button>
              </CardActions>
        </Card>
        {/* <Routes>
          <Route path="/Todo" element={<Home />} />
        </Routes> */}
    </div>
  )
}
// function Home() {
//     return <Todo/>;
//   }
