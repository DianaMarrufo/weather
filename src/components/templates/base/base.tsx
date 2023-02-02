import React from 'react'
import { HeaderApp } from '@/components/organisms/header'
import styles from './base.module.scss'

export const Base = ({children}) => {
  return (
    <div className={styles['base']}>
      <HeaderApp />
      <div className={styles['base__container']}>
        {children}
      </div>
    </div>
  )
}
