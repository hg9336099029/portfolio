import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import weatherapp from '../../img/weatherapp.png';
import survey from '../../img/survey.png';
import snakeslither from '../../img/snake slither.png';
import socialgo from '../../img/socialgo.png';
import musicapp from '../../img/musicapp.png';
import scc from '../../img/scc.png';
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
          <a href="https://github.com/hg9336099029/Survey.application">
            <img src={survey} alt="Weather App" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/hg9336099029/social_media_content.analyzer">
          <img src={scc} alt="Snake Slither" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/hg9336099029/weather_app/tree/main/weather%20app">
            <img src={weatherapp} alt="Weather App" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/hg9336099029/slither-game">
          <img src={snakeslither} alt="Snake Slither" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/hg9336099029/project-">
          <img src={socialgo} alt="SocialGo App" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
          <img src={musicapp} alt="Music App" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
