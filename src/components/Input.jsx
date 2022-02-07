import React from 'react';

const Input = (props) => {
    const {id, className, type,label, error} = props

  return <div className={className}>
      <label htmlFor={id}>{label}</label>
      <div>
        <input type={type} id={id} name={id}/>
        <p style={{
          fontSize:"0.5rem", 
          fontWeight:"bold", 
          color:"red", 
          marginBottom:"0.1rem 0 0.5rem 0"
          }}>
            {error}
        </p>
      </div>
  </div>;
};

export default Input;
