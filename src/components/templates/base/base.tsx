import React from 'react'
import { HeaderApp } from '@/components/organisms/header'
import styles from './base.module.scss'

interface IBaseProps {
  children: JSX.Element | JSX.Element[];
}

export const Base = ({children}: IBaseProps) => {
  return (
    <div className={styles['base']}>
      <HeaderApp />
      <div className={styles['base__container']}>
        {children}
      </div>
    </div>
  )
}
