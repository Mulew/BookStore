import React from 'react'

const Spinner = () => {
  return (
    <div className='animate-pulse w-64 h-16 m-8 rounded-full bg-green-600 flex justify-center items-center'>
      <h1 className="font-bold text-white">Loading....</h1>
    </div>
  )
}

export default Spinner;
