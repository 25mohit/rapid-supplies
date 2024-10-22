import React from 'react'
import { useSelector } from 'react-redux'
import {HashLoader} from 'react-spinners'

const Loader = () => {
  const isLoading = useSelector(state => state.setting)
  
  if(!isLoading.loadingState){
    return
  }

  return (
    <div className='loader z-50 fixed top-0 left-0 w-screen h-screen flex items-center justify-center'>
      <HashLoader size={60} color='rgb(226, 226, 59)'/>
    </div>
  )
}

export default Loader