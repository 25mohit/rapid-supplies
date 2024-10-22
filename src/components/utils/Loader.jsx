import React from 'react'
import {HashLoader} from 'react-spinners'

const Loader = () => {
  return (
    <div className='loader fixed top-0 left-0 w-screen h-screen flex items-center justify-center'>
        <HashLoader size={60} color='rgb(226, 226, 59)'/>
    </div>
  )
}

export default Loader