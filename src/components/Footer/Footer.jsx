import React from 'react'
import './Footer.css'
import { FaGithub } from "react-icons/fa"
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

import Wave from '../../img/wave.png'
const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:'100%'}} />
        <div className="f-content">
            <span>Hg9336099029@gmail.com</span>
            <div className="f-icons">
              <a href="https://www.instagram.com/your-instagram-profile/">
                 <FaInstagram color='white' size='3rem'/>
              </a>
               <a href="https://github.com/hg9336099029">
                <FaGithub color='white' size='3rem'/>
               </a>
                <a href="https://www.linkedin.com/in/harsh-gupta-0886b1250/">
                  <CiLinkedin color='white' size='3rem'/>
                </a>
                
            </div>
        </div> 
    </div>
  )
}

export default Footer