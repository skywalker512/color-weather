import React from 'react'

import { IWeatherData } from '@/interfaces/weather'

import styles from './index.less'
import WeatherIcon from '../weatherIcon';

interface IProps {
  weatherDatas: IWeatherData[]
}
const Day: React.FC<IProps> = ({ weatherDatas }) => {
  return (
    <div className={styles.content}>
      {weatherDatas.map((item, index) => (
        <div key={item.day} className={styles.item}>
          {
            index === 0
              ? <div className={styles.greytext}>今天</div>
              : index === 1
                ? <div className={styles.greytext}>明天</div>
                : <div className={styles.greytext}>{item.week}</div>
          }
          <div className={styles.greytext}>{item.date.split('-')[1]}/{item.date.split('-')[2]}</div>
          <div className={styles.blacktext}>{item.wea_day}</div>
          <WeatherIcon code={item.wea_day_img} />
          <div className={styles.bottomicon}>
            <WeatherIcon code={item.wea_night_img} />
          </div>
          <div className={styles.blacktext}>{item.wea_night}</div>
          <div className={styles.greytext}>{item.win[0]}</div>
          <div className={styles.greytext}>{item.win_speed}</div>
        </div>
      ))}
    </div>
  )
}

export default Day