import React from 'react'

const Form = props => {
  return (
    <form className='form bg-white flex flex-col rounded-md shadow-xl gap-6'>
      <header className='flex mb-2'>
        <div>
          <h2 className='text-xl select-none'>{props.form}</h2>
        </div>
      </header>
      <section className='flex flex-col gap-4'>
        {props.children}
      </section>
    </form>
  )
}

export default Form