import React from 'react'

import { IWeatheHours } from '@/interfaces/weather'

import styles from './index.less'
import WeatherIcon from '../weatherIcon';

interface IProps {
  hours: IWeatheHours[]
}
const Hour: React.FC<IProps> = ({ hours }) => {
  return (
    <div className={styles.content}>
      {hours.map(item => (
        <div className={styles.item} key={item.hours}>
          <div className={styles.txttime}>{item.hours.replace(/时/, '')}:00</div>
          <div className={styles.icon}>
            <WeatherIcon code={item.wea_img} />
          </div>
          <div className={styles.txttmp}>{item.tem}°</div>
        </div>
      ))}
    </div>
  )
}

export default Hour