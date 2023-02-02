import { ErrorMessage, useField } from 'formik'
import styles from './input.module.scss'
import cn from "classnames";

interface IInputProps {
  label?: string;
  name: string;
  [x:string]: any;
}

export const InputApp = ({ label, ...props }: IInputProps) => {

  const [field, meta] = useField(props);

  return (
    <div className={styles['form-input']}>
      <input className={ meta.error && meta.touched ? cn(styles['form-input__input'], styles['form-input__input--error']) : styles['form-input__input']}
        { ...field } { ...props } 
        type = {props.type}
      />
      <label className={ meta.value && meta.value.length > 0 && styles['form-input__input-label']} htmlFor={ props.id || props.name } > { label } </label>
      <ErrorMessage
        name={props.name}
        component='span'
        className={styles['form-input__error']}
      />
    </div>
  );
};
