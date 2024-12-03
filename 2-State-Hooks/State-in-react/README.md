#State in React
- State is a way to "store and manage" data that can change over time and affects how the componet renders. we define state using the useState Hook, which allows you to set an initial value and provides a way to update that state.

-- useState() 
    - it allows us to "track state" in a functional component. State generally refers to data or properties that need to be tracking in our application 
    Syntax :- 
            const [data(initial value), changData] = useState()

    Note : import {useState } from "react";
           Array destructuring is used