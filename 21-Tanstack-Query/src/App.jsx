import React from 'react';
import Without_T_Q from './components/withouttanstackquery';
import With_T_Q from './components/withtanstackquery';
import Deduplication from './components/deduplication';
import StaleTime from './components/staleTime';
import RefetchInterval from './components/RefetchInterval';
const App = () => {
  return (
    <div>
      {/* <Without_T_Q/> */}
      {/* <With_T_Q/> */}
      {/* ----Deduplication---- 
      <Deduplication/>
      <Deduplication/>
      <Deduplication/> */}
      {/* <StaleTime/> */}
      <RefetchInterval/>

    </div>
  );
}

export default App;
