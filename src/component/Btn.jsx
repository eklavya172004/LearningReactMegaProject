import React from 'react'

function Btn({children,type='button',bgColor='bg-colour-600',textColor='white',className='',...props}) {
  return (
    <div>
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    </div>
  )
}

export default Btn
