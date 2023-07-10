import React from 'react';
import { primary_color } from '../../utils/colors';

export default function IconButton({ Icon, title, onClick ,size,height,h,w}) {
  
  const design ='';

  return (
      <button 
       style={{backgroundColor:primary_color,height:height}}
       className={ `flex flex-col items-center justify-center space-y-2 
       text-white font-bold py-2 px-4 rounded w-${w}  h-${h} m-1`}
         onClick={onClick}>
         <Icon size={size} /> 
        <span>{title}</span>
      </button>
  );
}
