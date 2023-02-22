import Link from 'next/link';
import Todos from '../components/Todos';
function Todo() {
  return (
    <div>
        <h5> Todo </h5>  
        <Todos />
        
        <div>
            <h2><Link href="/"> Back to user list</Link></h2>
        </div>
    </div>
  )
}


export default Todo