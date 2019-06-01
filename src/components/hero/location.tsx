import React from 'react'
import styles from './location.less'


interface IProps {
  loaction: string,
}

const LoactionCom: React.FC<IProps> = (props) => {
  const { loaction } = props
  return (
    <div className={styles.loction}>
      <span className="icon-location"></span>
      {loaction}
    </div>
  )
}

export default LoactionCom