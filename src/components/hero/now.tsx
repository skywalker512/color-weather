import React from 'react'

import { IWeatherData } from '../../interfaces/weather'

import styles from './now.less'

interface IProps {
  weatherData: IWeatherData
}
const NowWeather: React.FC<IProps> = ({ weatherData }) => {
  return (
    <div className={styles.content}>
      <div className={styles.temp}>{weatherData.tem}</div>
      <div className={styles.cloud}>{weatherData.wea}</div>
    </div>
  )
}

export default NowWeather