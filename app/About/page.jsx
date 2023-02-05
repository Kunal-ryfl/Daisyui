import React from 'react'

const page = () => {
  return (
    <div className='dark:bg-slate-900 px-2 py-5  bg-cyan-800 '>
  <h1 className=' text-white'>About</h1>
  <div className=' grid  grid-rows-2 grid-cols-3  gap-4'>
  <div  className='border-2 row-span-2'>1</div>
  <div className='border-2 col-span-2 '>2</div>
  <div className='border-2 '>3</div>
  <div className='border-2 '>3</div>
  
  </div>
  </div>
  )
}

export default page