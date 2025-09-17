import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import vector1 from '../../img/Vector1.png';
import vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import codechef from '../../img/codechef.png';
import leetcode from '../../img/leetcode.png';
import { themeContext } from '../../context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  const transition = { duration: 2, type: 'spring' };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro" id="">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? 'white' : '' }}>Hi I Am </span>
          <span>Harsh Gupta </span>
          <span>
           <h1> A Fullstack Developer and Competitive Programmer with experience 
            in building scalable web applications (MERN, PostgreSQL) 
            and solving 900+ DSA problems across CodeChef, LeetCode, 
            and Codeforces.</h1>
          </span>
        </div>
        <a href="https://www.freelancer.in/u/harsh31072003" target="_blank" rel="noopener noreferrer">
        <button className="button i-button" >Hire me</button>
          </a>
        <div className="i-icons">
          <a href="https://github.com/hg9336099029" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/harsh-gupta-0886b1250/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://www.codechef.com/users/hg9336099029" target="_blank" rel="noopener noreferrer">
            <img src={codechef} alt="codechef" />
          </a>
          <a href="https://leetcode.com/u/HARSH2OO3/" target="_blank" rel="noopener noreferrer">
            <img src={leetcode} alt="leetcode" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: '-36%' }}
          whileInView={{ left: '-24%' }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: '-4%', left: '74%' }}
          whileInView={{ left: '68%' }}
          transition={transition}
          style={{ top: '-4%', left: '68%' }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>

        <motion.div
          initial={{ top: '18rem', left: '9rem' }}
          whileInView={{ left: '0rem' }}
          transition={transition}
          style={{ top: '18rem', left: '1rem' }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1="Best Designs" txt="Awards" />
        </motion.div>

        <div className="blur" style={{ background: 'rgb(238 210 255)' }}></div>
        <div
          className="blur"
          style={{background: '#C1F5FF',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
