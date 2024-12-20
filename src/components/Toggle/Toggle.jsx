import React from 'react'
import './Toggle.css'
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import { themeContext } from '../../context'
import { useContext } from 'react';
const Toggle = () => {
   const theme= useContext(themeContext);
   const darkMode= theme.state.darkMode;
   const handleClick = () =>{
      theme.dispatch({type: 'toggle'})
   }
  return (
    
     <div className="toggle" onClick={handleClick}>
             <IoMoonOutline/>
             <FiSun/>
             <div className="t-button"  style={darkMode? {left:'2px'}: {right: '2px'}}>
             </div>
     </div>
   )
}

export default Toggle