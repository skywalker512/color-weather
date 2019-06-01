import React, { Fragment } from 'react'
import LoactionCom from '../hero/location'

import { IWeather } from '../../interfaces/weather'

import styles from './index.less'
import NowWeather from '../hero/now';
import TomorrowWeather from '../tomorrow/item';
import Hour from '../hour';
import Charts from '../charts';


interface IProps {
  weathers: IWeather[],
  loading: boolean
}

const MainWeather: React.FC<IProps> = ({ loading, weathers }) => {
  const weather = weathers[0]
  if (loading) {
    return <div>加载</div>
  } else {
    return (
      <Fragment>
        <section className={styles.hero}>
          <LoactionCom loaction={weather.city} />
          <NowWeather weatherData={weather.data[0]} />
        </section>
        <section className={styles.tomorrow}>
          <TomorrowWeather weatherData={weather.data[0]} text="今天" />
          <TomorrowWeather weatherData={weather.data[1]} text="明天" />
        </section>
        <section className={styles.touch}>
          <Hour hours={weather.data[0].hours} />
        </section>
        <section className={styles.touch}>
          <Charts weatherDatas={weather.data} />
        </section>
      </Fragment>

    )
  }
}

export default MainWeather