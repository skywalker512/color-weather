import React from 'react'

import { IWeatherNow } from '../../interfaces/weather'

import styles from './index.less'

interface IProps {
  now: IWeatherNow
}
const NowWeather: React.FC<IProps> = ({ now }) => {
  return (
    <div className={styles.content}>
      <div className=""></div>
    </div>
  )
}

export default NowWeather