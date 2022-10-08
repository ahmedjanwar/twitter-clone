import React from 'react'
import {
    Home,
    Bell,
    Hashtag,
    Bookmark,
    Collection,
    DotsCircleHorizontal,
    Mail,
    User,
} from "heroicons-react"
import SidebarRow from './SidebarRow'

function Sidbar() {
  return (

    <div className='flex flex-col col-span-2 items-center px-4 md:items-start'>
      <img 
      className='h-10 w-10 m-4' 
      src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="" />
    <SidebarRow Icon={Home} title="Home"/>
    <SidebarRow Icon={Hashtag} title="Explore"/>
    <SidebarRow Icon={Bell} title="Notification"/>
    <SidebarRow Icon={Mail} title="Messages"/>
    <SidebarRow Icon={Bookmark} title="Bookmark"/>
    <SidebarRow Icon={Collection} title="Lists"/>
    <SidebarRow Icon={User} title="Sign In"/>
   <SidebarRow Icon={DotsCircleHorizontal} title="More"/> 
    </div>

  )
}

export default Sidbar