import React from 'react';
import { primary_color } from '../../utils/colors';

export default function IconButton({ Icon, title, onClick ,size,height,h,w,direction}) {
  
  const design ='';

  return (
      <button 
       style={{backgroundColor:primary_color,height:height}}
       className={ `flex flex-${direction} items-center justify-center  
       text-white font-bold py-2 px-4 rounded w-${w} gap-1  h-${h} m-1`}
         onClick={onClick}>
         <Icon size={size} /> 
        <span>{title}</span>
      </button>
  );
}
