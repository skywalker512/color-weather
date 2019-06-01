import React from 'react'

import { IWeatheIndex } from '@/interfaces/weather'

import styles from './index.less'
import WeatherIcon from '../weatherIcon';

interface IProps {
  indexs: IWeatheIndex[]
}
const Life: React.FC<IProps> = ({ indexs }) => {
  return (
    <div className={styles.content}>
      {indexs.map(item => (
        <div className={styles.item}>
          <div><WeatherIcon code={item.title}/></div>
          <div className={styles.level}>{item.level}</div>
          <div className={styles.title}>{item.title}</div>
        </div>
      ))}
    </div>
  )
}

export default Life