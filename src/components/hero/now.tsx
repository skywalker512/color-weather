import React from 'react'

import { IWeatherNow } from '../../interfaces/weather'

import styles from './now.less'

interface IProps {
  now: IWeatherNow
}
const NowWeather: React.FC<IProps> = ({ now }) => {
  return (
    <div className={styles.content}>
      <div className={styles.temp}>{now.tmp}</div>
      <div className={styles.cloud}>{now.cond_txt}</div>
    </div>
  )
}

export default NowWeather