import React, { useState } from 'react'
import './components.css';

import { BsCircleFill } from "react-icons/bs";
import { TbDeviceAnalytics } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5"
import { MdOutlineAnalytics } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi";
import { VscGraphScatter } from "react-icons/vsc";
import { IoHome } from "react-icons/io5";

const Sidebar = () => {

    const [currentlink,setCurrentlink] = useState(1);

  return (
    <div className='sidebar-main'>
        <div className='sidebar-top'>
            <div className='sidebar-brand'>
                <BsCircleFill className='sidebar-color1'/>
                <BsCircleFill className='sidebar-color2'/>
                <BsCircleFill className='sidebar-color3'/>   
            </div>
            <div className='sidebar-link'>
                <ul>
                    <li className={currentlink === 1 ? "active" : "none"}
                    onClick={()=>setCurrentlink(1)} >
                        <a href='a'>
                            <IoHome className='sidebar-home'/>
                        </a>
                    </li>
                    <li className={currentlink === 2 ? "active" : "none"}
                    onClick={()=>setCurrentlink(2)} >
                        <a href='a'>
                            <TbDeviceAnalytics className='sidebar-home'/>
                        </a>
                    </li>
                    <li className={currentlink === 3 ? "active" : "none"}
                    onClick={()=>setCurrentlink(3)} >
                        <a href='a'>
                            <IoDocumentTextOutline className='sidebar-home'/>
                        </a>
                    </li>
                    <li className={currentlink === 4 ? "active" : "none"}
                    onClick={()=>setCurrentlink(4)} >
                        <a href='a'>
                            <MdOutlineAnalytics className='sidebar-homespan'/>
                            <span>2</span>
                        </a>
                    </li>
                    <li className={currentlink === 5 ? "active" : "none"}
                    onClick={()=>setCurrentlink(5)} >
                        <a href='a'>
                            <GiTrophyCup className='sidebar-home'/>
                        </a>
                    </li>
                    <li className={currentlink === 6 ? "active" : "none"}
                    onClick={()=>setCurrentlink(6)} >
                        <a href='a'>
                            <VscGraphScatter className='sidebar-home'/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Sidebar
