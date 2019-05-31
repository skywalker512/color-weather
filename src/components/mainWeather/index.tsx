import React from 'react'
import LoactionCom from '../location'

import { IWeather } from '../../interfaces/weather'

import styles from './index.less'

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
      <section className={styles.hero}>
        <LoactionCom loaction={weather.basic.location} />
        
      </section>
    )
  }
}

export default MainWeather