import React from 'react'
import './components.css';
import Notification from './Notification'
import Card from './Card'
import Activity from './Activity'
import Payment from './Payment'


const RightSidebar = () => {
  return (
    <div className='rightsidebar-main'>
        <div className='rightsidebar-grid'>
            <Notification/>
            <Card/>
            <Activity/>
            <Payment/>
        
        </div>
      
    </div>
  )
}

export default RightSidebar
