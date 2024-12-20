import React from 'react'
import './Experience.css'
import {useContext} from 'react';
import { themeContext } from '../../context';
const Experience = () => {
 const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id="Experience">
    <div className="achievements">
      {/* darkmode */}
      <div className="circle" style={{color: darkMode?'var(--orange)':''}}>1+</div>
      <span style={{color: darkMode?'white':''}}>years </span>
      <span>Experirnce</span>
    </div>
    <div className="achievements">
    <div className="circle" style={{color: darkMode?'var(--orange)':''}}>7+</div>
      <span style={{color: darkMode?'white':''}}>completed </span>
      <span>  projects</span>
    </div>
    <div className="achievements">
    <div className="circle" style={{color: darkMode?'var(--orange)':''}}>1+</div>
      <span style={{color: darkMode?'white':''}}>companies</span>
      <span> work</span>
    </div>
</div>
  )
}

export default Experience