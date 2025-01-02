// import React from 'react';
import Counterproject from './Projects/Counter-Project';
import Todoproject from './Projects/TOdo-Project';
import Main from './Projects/Calculator/main';
import Testimonial from './Projects/Testimonial';

const App = () => {
  return (
    <div>
      <Counterproject />
      <Todoproject />
      {/* <Meals /> */}
      <Main />
      <Testimonial />
    </div>
  );
}

export default App;
