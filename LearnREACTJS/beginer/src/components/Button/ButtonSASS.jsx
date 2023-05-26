import React, { Children } from 'react';
// import './ButtonSASS.scss';
import styles from './Button.module.css';
import clsx from 'clsx';

//rimraf delete node
//classnames
//clsx
export function ButtonSASS(props) {
  //   return <button className={`button ${props.className}`}>{props.children}</button>;
  //   return <button className={styles.button}>{props.children}</button>;
  //   return (
  //     <button className={`${styles.button} ${props.secondary ? styles.buttonSecondary : ''} `}>
  //       {props.children}
  //     </button>
  //   );
  //dung clsx
  //   return <button className={clsx(styles.button, styles.buttonSecondary)}>{props.children}</button>;
  //   return (
  //     <button className={clsx(styles.button, { [styles.buttonSecondary]: true })}>
  //       {props.children}
  //     </button>
  return <div>dasd</div>;
}
