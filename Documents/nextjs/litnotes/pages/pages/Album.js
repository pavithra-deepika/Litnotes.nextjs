import Link from "next/link";
import { Button } from "@mui/material";

import Albums from "../components/Albums";
function Todo() {
  return (
    <div>
      <h1> Albums </h1>
      <Albums />
      <br></br>
      <div>
        <Button variant="contained">
          <Link href="/"> Back to user list</Link>
        </Button>
      </div>
    </div>
  );
}

export default Todo;
