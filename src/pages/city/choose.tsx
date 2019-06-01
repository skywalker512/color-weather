import React from 'react'
import Link from 'umi/link';

import styles from './choose.less'

export default function () {
  return (
    <div className={styles.content}>
      <div className={styles.text}><Link to='/?city=101040100'>重庆</Link></div>
      <div className={styles.text}><Link to='/?city=101010100'>北京</Link></div>
      <div className={styles.text}><Link to='/?city=101030100'>天津</Link></div>
      <div className={styles.text}><Link to='/?city=101040100'>重庆</Link></div>
      <div className={styles.text}><Link to='/?city=101010100'>北京</Link></div>
      <div className={styles.text}><Link to='/?city=101030100'>天津</Link></div>
      <div className={styles.text}><Link to='/?city=101010100'>北京</Link></div>
      <div className={styles.text}><Link to='/?city=101030100'>天津</Link></div>
      <div className={styles.text}><Link to='/?city=101010100'>北京</Link></div>
      <div className={styles.text}><Link to='/?city=101030100'>天津</Link></div>
      <div className={styles.text}><Link to='/?city=101010100'>北京</Link></div>
      <div className={styles.text}><Link to='/?city=101030100'>天津</Link></div>
      <div className={styles.text}><Link to='/?city=101010100'>北京</Link></div>
      <div className={styles.text}><Link to='/?city=101030100'>天津</Link></div>
      <div className={styles.text}><Link to='/?city=101030100'>天津</Link></div>
    </div>
  )
}
