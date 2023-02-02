import React from 'react'
import styles from './card.module.scss'
import { Daily } from '../../../store/home/homeTypes';
import Image from 'next/image';

interface ICardProps {
  data: Daily;
}

export const Card = ({data}: ICardProps) => {
  const a = new Date(data.dt * 1000);
  const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Deciembre']
  const days = ['Domingo', 'Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']
  const month = months[a.getMonth()];
  const day = days[a.getDay()];
  const date = a.getDate();

  return (
    <div className={styles['card']}>
      <div className={styles['card__day']}>{day}</div>
      <div className={styles['card__month']}>{month} {date}</div>
      <div className={styles['card__description']}>{data.weather[0].description}</div>
      <div className={styles['card__temp']}>
        <span className={styles['card__temp-max']}>{data.temp.max}</span>
        <span className={styles['card__temp-separator']}>/</span>
        <span className={styles['card__temp-min']}>{data.temp.min}</span>
      </div>
    </div>
  )
}
