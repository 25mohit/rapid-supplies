import { useEffect, useState } from 'react'

const Input = props => {
  const { type, placeholder, error } = props
  const [key] = useState(function uniqueId(){
    let val = ''
    for(let i=1;i<=6;i++){
      val += Math.ceil(Math.random()*6)
    }
    return val
  })

  const [isFocus, setIsFocus] = useState(false)
  
  return (
    <div className='flex flex-col relative rounded-md input'>
        <label className={`absolute ml-3 pointer-events-none text-gray-500 transition-all rounded duration-300 ease-in-out ${(isFocus || error?.length) ? '-my-5 text-xs bg-orange-300 text-red-50 px-2' : ''} ${error?.length ? 'bg-red-600' : ''}`} htmlFor={key}>{error?.length ? error : placeholder}</label>
        <input className='' type={type} id={key} onFocus={() => setIsFocus(true)} onBlur={(e) => !e.target.value && setIsFocus(false)}/>
    </div>
  )
}

export default Input