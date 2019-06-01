import React from 'react'

import styles from './item.less'

interface IProps {
  code: string,
  width?: string,
  className?: any
}
const WeatherIcon: React.FC<IProps> = ({ code, width, className }) => {
  const uri = require(`@/assets/img/weather/${code}.svg`)
  const style = {
    height: '1.8em',
    width: '1.8em'
  }
  return (
    <img src={uri} alt="" style={style} className={className || ''}/>
  )
}

export default WeatherIcon