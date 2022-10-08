import React, { SVGProps } from 'react'

interface Props{
    Icon:(Props: SVGProps<SVGElement>)=> JSX.Element
    title: string
}

function SidebarRow({Icon,title}: Props) {
  return (
    <div className='group cursor-pointer flex max-w-fit items-center space-x-2 px-4 py-3 rounded-full transition-all duration-200 hover:bg-gray-300'>
        <Icon className='h-6 w-6'/>
        <p className='group-hover:text-twitter hidden md:inline-flex lg:text-xl'>{title}</p>
    </div>
  )
}

export default SidebarRow