import React, { forwardRef } from 'react'

function Select({
    options,
    label,
    className='',
    ...props
},ref) {
  return (
    <div className='w-full'>
        {label && <label htmlFor=""></label> }
        <select {...props} id={id} ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-ful ${className}`} >
                {options?.map((options) => (
                    <option key={options} value={options} >
                        {options}
                    </option>
                ))}
            </select> 
    </div>
  )
}

export default React.forwardRef(Select)
