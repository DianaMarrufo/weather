import React from 'react'
import { Base } from '@/components/templates/base'
import { FormApp } from '@/components/organisms/form'
import { ResultsApp } from '../../components/organisms/results/results';
import styles from './home.module.scss'

const HomePage = () => {
  return (
    <Base>
      <div className={styles['home']}>
        <div className={styles['home__form']}>
          <FormApp />
        </div> 
        <div className={styles['home__results']}>
          <ResultsApp />
        </div> 
      </div>
    </Base>
  )
}

export default HomePage