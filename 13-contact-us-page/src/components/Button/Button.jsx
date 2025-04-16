import React from 'react'
import styles from "./Button.module.css";
const Button = ({text,icon}) => {
  return (
    <button className={styles.primary_btn}>{text}{icon}</button>
  )
}

export default Button