import React from 'react'

const Input = ({name, placeholder, onChange, style, type, label="Email",}) => {
  
  return (
    <div style={{marginBottom:"15px"}}>
      <label style={{fontSize:"14px", fontWeight:"600"}}>{label}</label> 
      <input name={name} placeholder={placeholder} onChange={onChange} className={style} type={type} style={{fontSize:"0.8rem", padding:"13px"}} />
    </div>
  )
}

export default Input
