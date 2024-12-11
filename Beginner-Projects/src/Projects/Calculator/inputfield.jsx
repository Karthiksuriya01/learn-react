import React from 'react';

const Inputfield = ({ value }) => {
  return (
    <div>
      <input type="text" value={value} readOnly/>
    </div>
  );
}

export default Inputfield;
