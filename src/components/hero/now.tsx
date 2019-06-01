import React from 'react'

import { IWeatherData } from '../../interfaces/weather'

import styles from './now.less'
import WindHumidity from './windHumidity';

interface IProps {
  weatherData: IWeatherData
}
const NowWeather: React.FC<IProps> = ({ weatherData }) => {
  return (
    <div className={styles.content}>
      <div className={styles.temp}>{weatherData.tem}</div>
      <div className={styles.cloud}>{weatherData.wea}</div>
      <WindHumidity weatherData={weatherData} />
    </div>
  )
}

export default NowWeather