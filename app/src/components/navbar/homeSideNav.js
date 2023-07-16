import React from 'react'
import logo from '../../assets/logo_normal.png';
import { secondary_color } from '../../utils/colors';

export default function HomeSideNav() {
  return (
   <div className='h-auto w-auto '  style={{backgroundColor:secondary_color}}>
       <img src={logo} className='mt-20'/>
   </div>
  )
}

