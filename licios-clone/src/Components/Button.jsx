import React from 'react'

const Button = ({children}) => {
  return (
    <div>
        <button className='button'>{children}</button>
    </div>
  )
}

export default Button