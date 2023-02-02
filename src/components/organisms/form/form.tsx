import React, { useState } from 'react'
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { InputApp } from '@/components/atoms/input'
import { ButtonApp } from '@/components/atoms/button'
import styles from './form.module.scss'
import { getCities } from '../../../store/home/homeSlice';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../../../hooks/useApp';

const formSchema = Yup.object({
  city: Yup.string()
  .required('Campo requerido')
  .min(3, ''),
})

export const FormApp = () => {

  const router = useRouter()
  const dispatch = useAppDispatch()

  const { isLoading, isError, isSuccess, message } = useAppSelector(
    (state) => state.home
  )

  return (
    <div className={styles['form']}>
      <h1>Con Reservamos planear tu viaje es aún más fácil</h1>
      <h3> Informate del pronóstico de los próximos 7 días </h3>
      <Formik
        initialValues={{ city: '' }}
        onSubmit={(values) => {
          dispatch(getCities(values.city))
        }}
        validationSchema={formSchema}
      >
        {(formik) => (
          <Form>
            <InputApp 
              label='Destino' 
              name='city'
              type='text' />
            <ButtonApp 
              title={ isLoading ? 'Cargando...' : 'Buscar' }
              loading={ isLoading }
              type="submit" 
              active={formik.isValid && formik.dirty} />
          </Form>
        )}
      </Formik>
    </div>
  )
}
