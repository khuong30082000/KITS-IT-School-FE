// export const RedButton = () => {
//   return <h1>Hello Red button</h1>;
// };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Button.module.css';
//react class co tinh nang merstate khong can luu lai state cu (prev => thay doi thuoc tinh can thay doi)
export class RedButton extends Component {
  render() {
    const classes = clsx(styles.button, {
      [styles.primary]: this.props.primary,
    });
    const { type: typeInput, ...rest } = this.props;
    return <input {...rest} type={typeInput} className={classes} />;
  }
}

RedButton.propTypes = {
  placeholder: PropTypes.string.isRequired,
  //   onChange: PropTypes.func.isRequired,
  //   ...
};
