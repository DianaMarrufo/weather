import React from 'react'
import styles from './spinner.module.scss'

export const SpinnerApp = () => {
  return (
    <div className={styles['spinner']}>
      <div className={styles['spinner__loading']}></div>
    </div>
  )
}
