import React from 'react';

const Input = (props) => {
    const {className, setFormValues, formValues,     id, label, name, type, error} = props
  return <div className={className}>
      <label htmlFor={id}>{label}</label>
      <div>
        <input type={type} id={id} name={name} required
          onChange={(e)=>setFormValues({...formValues,[e.target.name]:e.target.value})}
        />
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
