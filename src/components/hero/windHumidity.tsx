import React, { useState, useEffect } from 'react'

import { IWeatherData } from '../../interfaces/weather'

import styles from './windHumidity.less'

interface IProps {
  weatherData: IWeatherData
}
const WindHumidity: React.FC<IProps> = ({ weatherData }) => {
  const [humidityHide, sethumidityHide] = useState(true)
  let timer: number
  useEffect(()=>{
    window.clearTimeout(timer)
    timer = window.setTimeout(()=>{
      sethumidityHide(!humidityHide)
    }, 3000)
    return () => {
      window.clearTimeout(timer)
    }
  })
  return (
    <div className={styles.content}>
      <div className={`${styles.text} ${humidityHide ? styles.hide : ''}`}>湿度 {weatherData.humidity}</div>
      <div className={`${styles.text} ${humidityHide ? '' : styles.hide}`}>{weatherData.win[0]}转{weatherData.win[1]}</div>
    </div>
  )
}

export default WindHumidity