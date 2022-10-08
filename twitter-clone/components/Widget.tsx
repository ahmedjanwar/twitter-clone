import React from 'react'
import {Search} from'heroicons-react'
import { TwitterTimelineEmbed} from 'react-twitter-embed';

function Widget() {
  return (
    <div className='mt-2 px-2 col-span-2 hidden lg:inline'>
        {/** Search */}
        <div className='flex items-center space-x-2 bg-gray-300 p-3 rounded-full mt-2 '>
            <Search className='text-gray-600 h-6 w-6'/>
            <input 
            type="text" 
            placeholder='Search Twitter'
            className='flex-1 bg-transparent outline-none' />
        </div>
            {/* twitter feed embeded*/}
            <TwitterTimelineEmbed
            sourceType="profile"
            screenName="DrTedros"
            options={{height: 1000}}
            />

    </div>
  )
}

export default Widget