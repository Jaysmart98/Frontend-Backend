import React from 'react'

const Input = ({name, placeholder, onChange, style, type}) => {
  return (
    <div>
      <input name={name} placeholder={placeholder} onChange={onChange} className={style} type={type} />
    </div>
  )
}

export default Input
