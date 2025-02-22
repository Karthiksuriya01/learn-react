import { Suspense } from "react";
import FetchTodo from "./FetchTodo";
const App = () => {
  return (
    <Suspense>
      <FetchTodo />
    </Suspense>
  );
}

export default App;


// another whenever you want to use a hook,
// you have write that in a suspense Tag(<suspense> </suspense>)