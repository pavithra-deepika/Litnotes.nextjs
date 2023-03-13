import { Button } from '@mui/material';
import Link from 'next/link';
import Todos from '../components/Todos';
function Todo() {
  return (
    <div>
        <h1> Todo </h1>  
        <Todos />
        <br></br>
        <div>
            <Button variant="contained"><Link href="/"> Back to user list</Link></Button>
        </div>
    </div>
  )
}


export default Todo