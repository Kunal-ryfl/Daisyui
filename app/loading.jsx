import React from 'react'

const loading = () => {
  return (
    <div className=' dark:bg-black bg-white flex items-center  justify-center h-screen w-screen'>
    <progress className="progress progress-primary w-56"></progress>
    </div>
  )
}

export default loading