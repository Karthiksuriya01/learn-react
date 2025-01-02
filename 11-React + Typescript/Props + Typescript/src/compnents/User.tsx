// import React from 'react';


// const User = (props: {name:string; age:number; isStudent:boolean}) => {
//   return (
//     <div>
//         <h1>Name : {props.name}</h1>
//         <p>age: {props.age}</p>
//         <p>is student : {props.isStudent}</p>
//     </div>
//   );
// }


//destructuring

// const User = ({name,age,isStudent}:{name:string;age:number;isStudent:boolean}) => {
//   return (
//     <div>
        // <h1>Name : {name}</h1>
        // <p>age: {age}</p>
        // <p>isStudent : {isStudent}</p>
//     </div>
//   );
// }

//another way


// type UseShape = {
//     name : string;
//     age : number;
//     isStudent : boolean;
// }

interface UseShape {
    name : string;
    age : number;
    isStudent : boolean;
}
const User = (props : UseShape) => {
  return (
    <div>
      <h1>Name : {props.name}</h1>
        <p>age: {props.age}</p>
        <p>isStudent : {props.isStudent}</p>
    </div>
  );
}

export default User;



