import React from "react";
import styles from "./button.module.scss";
import cn from "classnames";

interface IButtonProps {
  title: string;
  loading?: boolean;
  method?: () => any;
  active?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const ButtonApp = ({ title, loading, method, active, type }: IButtonProps) => {
  return (
    <div className={loading ? cn(styles['button'], styles['button--loading']) : styles['button']}>
      <button
        type={type ?? "button"}
        disabled={loading}
        onClick={method}
        className={active ? cn(styles['button-btn'], styles['button-btn--active']) : styles['button-btn']}
      >
        {title}
      </button>
    </div>
  );
};
