import React, { useState } from 'react'

const Input = props => {
  const { type, placeholder } = props
  const key = Date.now()
  const [isFocus, setIsFocus] = useState(false)
  
  return (
    <div className='flex flex-col relative rounded-md input'>
        <label className={`absolute ml-3 pointer-events-none text-gray-500 transition-all rounded duration-300 ease-in-out ${isFocus ? '-my-5 text-xs bg-orange-400 text-red-50 px-2' : ''}`} htmlFor={key}>{placeholder}</label>
        <input className='' type={type} id={key} onFocus={() => setIsFocus(true)} onBlur={(e) => !e.target.value && setIsFocus(false)}/>
    </div>
  )
}

export default Input