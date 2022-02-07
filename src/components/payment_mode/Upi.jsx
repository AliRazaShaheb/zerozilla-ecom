import React from 'react';

const Upi = () => {
  return (
  <>
  <div className='name'>
    <label htmlFor="upinum">VPA:</label>
    <input type="text" id='upinum' name="upinum" required/>
  </div>
  <div className='name'>
    <label htmlFor="remarks">Remarks:</label>
    <input type="text" id='remarks' name="remarks" required/>
  </div>
</>
)
  
};

export default Upi;
