import React from 'react'

import { IWeatherDailyForecast } from '../../interfaces/weather'

import styles from './item.less'
import WeatherIcon from '../weatherIcon';

interface IProps {
  dailyForecast: IWeatherDailyForecast,
  text: string
}
const TomorrowWeather: React.FC<IProps> = ({ dailyForecast, text }) => {
  return (
    <div className={styles.content}>
      <div className={styles.top} >
        <p className={styles.day}>{text}</p>
        <p className={styles.temperature}>{dailyForecast.tmp_max}/{dailyForecast.tmp_min}°</p>
      </div>
      <div className={styles.bottom}>
        <p className={styles.weather}>{dailyForecast.cond_txt_d}转{dailyForecast.cond_txt_n}</p>
        <WeatherIcon code={dailyForecast.cond_code_d} />
      </div>
    </div>
  )
}

export default TomorrowWeather