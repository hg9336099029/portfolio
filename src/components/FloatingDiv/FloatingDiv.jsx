import React from 'react'
import './FloatingDiv.css'
import { themeContext } from '../../context';
import { useContext } from 'react';
function FloatingDiv({image,txt1,txt2}) {
    const theme= useContext(themeContext);
    const darkMode= theme.state.darkMode;
  return (
    <div className="floatingdiv">
        <img src={image} alt=""  style={{ color:darkMode? 'white': ''}}/>
        <span>
            {txt1}
            <br />
            {txt2}
        </span>
    </div>
  )
}

export default FloatingDiv