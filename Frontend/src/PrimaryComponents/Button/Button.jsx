import React from 'react'

const Button = ({text, style, onClick, loading}) => {
  return (
    <div>
        <button onClick={onClick} className={style}>{ loading? "Loading..." : text}</button>
    </div>
  )
}

export default Button
