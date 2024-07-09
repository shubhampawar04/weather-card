import React from 'react'
import "./WeatherCard.css"
import ImgCloudy from "./cloudy .png"
import ImgSunny from "./sunny.png"
import ImgRainy from "./rainy.png"
import ImgSnowy from "./snowy.png"

function WeatherCard({tempature, weather ,city}) {
  const WEATHER_ICONS = {
    "cloudy" :  ImgCloudy ,
    "sunny" :   ImgSunny,
    "rainy" :   ImgRainy,
    "snowy" :   ImgSnowy

  }

  const WEATHER_BG_CLASSES =  {
    "cloudy" : "bg-cloudy",
    "sunny" : "bg-sunny",
    "rainy" : "bg-rainy",
    "snowy" : "bg-snowy"
  }
  

  return (
    <div>
      
      <div className={`weather-card ${WEATHER_BG_CLASSES[weather]}`}>
        <img src={WEATHER_ICONS[weather]} className='weather-icon'/>
       <span className='weather'>{weather}</span>
        <span className='city'>{city}</span>
        <span className='tempature'> {tempature}°C</span>
        
      </div>
    </div>
  )
}

export default WeatherCard