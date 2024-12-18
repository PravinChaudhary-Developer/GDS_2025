import React from 'react'

const Title = ({title , discription}) => {
  return (
    <section>
      <p className='text-center text-4xl text-gray-900 font-semibold'>{title}</p>
      <div className='grid justify-center p-4'>
        <div className='w-20 bg-sky-600 h-1'></div>
      </div>
      <p className='text-center text-gray-600 text-[13pt]'>{discription}</p>
    </section>
  )
}

export default Title