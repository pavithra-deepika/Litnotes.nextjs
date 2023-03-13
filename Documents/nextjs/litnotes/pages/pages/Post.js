import Link from 'next/link';
import Posts from '../components/Posts';
import { Button } from '@mui/material';

function Todo() {
  return (
    <div>
        <h1> Posts </h1>  
        <Posts />
        <br></br>
        
        <div>
        <Button  variant="contained" ><Link href="/"> Back to user list</Link></Button>
        </div>
    </div>
  )
}


export default Todo