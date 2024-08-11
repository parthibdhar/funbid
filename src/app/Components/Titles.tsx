'use client'
import React from 'react'

type TitleProps = {
    title: string,
    Icon: any
}
const Titles:React.FC<TitleProps> = ({title, Icon}) => {
  return (
    <div className='w-full flex sm:gap-8 gap-4 items-center'>
        <Icon className='sm:w-6 sm:h-6 h-6 w-6 text-text' />
        <h2 className="sm:text-xl  font-bold text-lg">{title}</h2>
    </div>
  )
}

export default Titles