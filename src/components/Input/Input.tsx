import React from 'react'
import styles from './Input.css'

import IntlCurrencyInput from 'react-intl-currency-input'

const defaultConfig = {
  locale: 'pt-BR',
  formats: {
    number: {
      BRL: {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
    }
  }
}

const Input = (props: any) => {
  return (
    <IntlCurrencyInput
      className={styles.Input}
      currency='BRL'
      config={defaultConfig}
      {...props}
    />
  )
}

export default Input
