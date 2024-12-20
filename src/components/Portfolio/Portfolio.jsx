import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import weatherapp from '../../img/weatherapp.png';
import snakeslither from '../../img/snake slither.png';
import socialgo from '../../img/socialgo.png';
import musicapp from '../../img/musicapp.png';
import { themeContext } from "../../context";
import { useContext } from "react";
const Portfolio = () => {

    const theme= useContext(themeContext);
    const darkMode= theme.state.darkMode;

return (
    <div className="portfolio" id="Portfolio">
      {/* Heading */}
      <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* Slider */}
      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'
      >
        <SwiperSlide>
          <img src={weatherapp} alt="Weather App" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={snakeslither} alt="Snake Slither" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={socialgo} alt="SocialGo App" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={musicapp} alt="Music App" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
