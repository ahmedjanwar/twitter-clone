import React, { useState } from 'react'
import {
    Calendar,
    EmojiHappy,
    LocationMarker,
    Photograph,
    SearchCircle,
}from "heroicons-react"



function TweetBox() {

    const [input,setInput] = useState<string>('')

  return (
    <div className='flex space-x-2 p-5'>
        <img 
        className='h-12 w-12 rounded-full object-cover mt-4'
        src="https://img.icons8.com/color/48/000000/test-account.png" 
        alt="" />

        <div className='flex flex-1 items-center pl-2 p-3'>
            <form className='flex flex-1 flex-col'>
                <input type="text" 
                        value={input}
                        onChange={(e) =>setInput(e.target.value)}
                        placeholder="what's happning?" 
                        className='h-24 w-full outline-none placeholder:text-xl'/>
                <div className='flex ite'>

                    <div className='flex space-x-2 text-twitter flex-1'>
                        {/**Icons */}
                        <Photograph className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150'/>
                        <SearchCircle className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150'/>
                        <EmojiHappy className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150'/>
                        <Calendar className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150'/>
                        <LocationMarker className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150'/>
                    </div>
                    {/**Post Button */}
                    <button 
                    disabled = {!input} 
                    className='bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40'>
                        
                        Tweet</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default TweetBox