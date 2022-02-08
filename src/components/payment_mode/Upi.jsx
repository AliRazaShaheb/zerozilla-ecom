import React from 'react';

const Upi = ({setFormValues, formValues}) => {
  return (
  <>
  <div className='name'>
    <label htmlFor="upinum">VPA:</label>
    <input type="text" id='upinum' name="upinum" required
      onChange={(e)=>setFormValues({...formValues,upinum:e.target.value})}
    />
  </div>
  <div className='name'>
    <label htmlFor="remarks">Remarks:</label>
    <input type="text" id='remarks' name="remarks" required
      onChange={(e)=>setFormValues({...formValues,remarks:e.target.value})}
    />
  </div>
</>
)
  
};

export default Upi;
