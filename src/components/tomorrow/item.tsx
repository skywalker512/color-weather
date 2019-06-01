import React from 'react'

import { IWeatherData } from '../../interfaces/weather'

import styles from './item.less'
import WeatherIcon from '../weatherIcon';

interface IProps {
  weatherData: IWeatherData,
  text: string
}
const TomorrowWeather: React.FC<IProps> = ({ weatherData, text }) => {
  return (
    <div className={styles.content}>
      <div className={styles.top} >
        <p className={styles.day}>{text}</p>
        <p className={styles.temperature}>{weatherData.tem1}/{weatherData.tem2}°</p>
      </div>
      <div className={styles.bottom}>
        <p className={styles.weather}>{weatherData.wea}</p>
        <WeatherIcon code={weatherData.wea_img} />
      </div>
    </div>
  )
}

export default TomorrowWeather