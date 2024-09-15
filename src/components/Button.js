import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='w-16 h-auto p-2 m-2'>
            {name}
        </button>
    </div>
  )
}

export default Button