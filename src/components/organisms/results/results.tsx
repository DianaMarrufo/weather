import React from 'react'
import styles from './results.module.scss'
import { useAppDispatch, useAppSelector } from '../../../hooks/useApp';
import { useEffect } from 'react';
import { reset, getWeather } from '@/store/home/homeSlice';
import { Card } from '@/components/molecules/card/card';
import { SpinnerApp } from '@/components/atoms/spinner';
import { NotFount } from '@/components/molecules/notFound';

export const ResultsApp = () => {

  const dispatch = useAppDispatch()

  const { cities, weather, isSearching, isError, message } = useAppSelector(
    (state) => state.home
  )

  useEffect(() => {
    const dataWeather = { 
      lat: cities?.lat ?? '', 
      long: cities?.long ?? ''
    }
    cities && dispatch(getWeather(dataWeather))
    return () => {
      dispatch(reset())
    }
  }, [dispatch, cities])

  return (
    <div className={styles['results']}>
      {
        cities && weather ?
        <>
          <h2 className={styles['results__title']}>La prevision del tiempo por día en {cities?.display}</h2>
          <div className={styles['results__cards']}>
            {
              weather.daily.map((item) => (
                <Card key={item.dt.toString()} data={item} />
              ))
            }
          </div>
        </> : isSearching ? <SpinnerApp /> : isError ? <NotFount /> : null
      }
    </div>
  )
}
