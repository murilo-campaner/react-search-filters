/* eslint-disable import/first */
import React from 'react'

// import styles from '../styles.module.css'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

import { DateRangePicker, SingleDatePicker } from 'react-dates'

import PickerStyles from './DatePicker.css'

import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet'
import aphroditeInterface from 'react-with-styles-interface-aphrodite'
import theme from './theme'

ThemedStyleSheet.registerInterface(aphroditeInterface)
ThemedStyleSheet.registerTheme({
  reactDates: {
    ...theme.reactDates
  }
})

export type DatePickerProps = {
  id: 'string'
  type: 'date' | 'date-range'
} & any

const DatePicker = ({ type, id, ...props }: DatePickerProps) => {
  return (
    <div className={PickerStyles.DatePicker}>
      {type === 'date-range' ? (
        <DateRangePicker
          startDateId={`${id}_start_date`} // PropTypes.string.isRequired,
          endDateId={`${id}_end_date`} // PropTypes.string.isRequired,
          onDatesChange={console.log} // PropTypes.func.isRequired,
          onFocusChange={() => {}} // PropTypes.func.isRequired,
          focusedInput='startDate'
          hideKeyboardShortcutsPanel
          {...props}
        />
      ) : (
        <SingleDatePicker
          onDateChange={console.log} // PropTypes.func.isRequired
          onFocusChange={console.log} // PropTypes.func.isRequired
          id={`${id}_date_picker`} // PropTypes.string.isRequired,
          focused
          hideKeyboardShortcutsPanel
          {...props}
        />
      )}
    </div>
  )
}

export default DatePicker
