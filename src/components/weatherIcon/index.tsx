import React from 'react'

import styles from './item.less'

interface IProps {
  code: string,
  width?: string
}
const WeatherIcon: React.FC<IProps> = ({ code, width }) => {
  const uri = require(`@/assets/img/weather/${code}.png`)
  const style = {
    height: '1.8em',
    width: '1.8em'
  }
  return (
    <img src={uri} alt="" style={style} />
  )
}

export default WeatherIcon