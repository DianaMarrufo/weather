import React from 'react'
import styles from './header.module.scss'
import { ReLogo } from 'public/svg'

export const HeaderApp = () => {
  return (
    <div className={styles['header']}>
      <div className={styles['header__container']}>
        <ReLogo />
      </div>
    </div>
  )
}
