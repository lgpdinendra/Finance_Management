import React from 'react'
import './components.css'
import { SlCalender } from "react-icons/sl";
import { CiBellOn } from "react-icons/ci";
import {AiOutlineCaretDown} from "react-icons/ai"

const Notification = () => {
  return (
    <div className='notification-nav'>
        <div className='notification-notification'>
            <SlCalender className='icon-calender'/>
            <CiBellOn className='icon-belll'/>
            <div className='notification-image'>
                
                <AiOutlineCaretDown/>
            </div>

        </div>
      
    </div>
  )
}

export default Notification
