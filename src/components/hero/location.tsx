import React from 'react'
import styles from './location.less'
import Link from 'umi/link';


interface IProps {
  loaction: string,
}

const LoactionCom: React.FC<IProps> = (props) => {
  const { loaction } = props
  return (
    <Link to="/city/choose">
      <div className={styles.loction}>
        <span className="icon-location"></span>
        {loaction}
      </div>
    </Link>
  )
}

export default LoactionCom