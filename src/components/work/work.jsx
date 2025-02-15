import React, { useContext } from 'react';
import './work.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { themeContext } from '../../context';
import {motion} from 'framer-motion'
const Work = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="work" >
      {/* Left Side */}
      <div className="w-left">
        <span>Works for All these</span>
        <span>Brands & Clients</span>
        <br />
        <span style={{ color: darkMode ? 'white' : '' }}>
        Collaborated with a diverse range of renowned brands
          <br />
          and clients, delivering exceptional results tailored
          <br />
          to their unique needs and objectives.
          <br />
        </span>
        <a href="https://www.freelancer.in/u/harsh31072003">
          <button className="button s-button">Hire me</button>
        </a>
        <div className="blur s-blur" style={{ background: '#ABF1FF94' }}></div>
      </div>

      {/* Right Side */}
      <div className="w-right">
        <motion.div
         initial={{ rotate: 45 }}
         whileInView={{ rotate: 0 }}
         viewport={{ margin: "-40px" }}
         transition={{ duration: 3.5, type: "spring" }}
         className="w-mainCircle">
          
          <div className="w-secCircle">
            <img src={Upwork} alt="Upwork" />
          </div>

          <div className="w-secCircle">
            <img src={Fiverr} alt="Fiverr" />
          </div>

          <div className="w-secCircle">
            <img src={Amazon} alt="Amazon" />
          </div>

          <div className="w-secCircle">
            <img src={Shopify} alt="Shopify" />
          </div>

          <div className="w-secCircle">
            <img src={Facebook} alt="Facebook" />
          </div>

        </motion.div>
        {/* Background Circles */}
        <div className="w-backCircle blueCircle" ></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Work;
