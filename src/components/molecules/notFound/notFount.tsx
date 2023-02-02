import React from 'react'
import Image from 'next/image'
import styles from './notfound.module.scss'
import { ErrorCode } from '../../../store/commonTypes';

export const NotFount = () => {
  return (
    <div className={styles['nofound']}>
      <div className={styles['nofound__message']}>
        {ErrorCode.E_UNOTFOUND}
      </div>
      <Image
        src="/no-results.svg"
        alt="no results"
        width={300}
        height={300}
      />
    </div>
  )
}
