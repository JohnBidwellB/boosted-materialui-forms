import React, { useState, useEffect } from 'react'
// import { checkValidations } from '../helpers/form.helpers'
// import { formatValue } from '../helpers/formatters.helpers'
import {
  MuiPickersUtilsProvider,
  DatePicker,
  KeyboardDatePicker
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import esLocale from 'date-fns/locale/es'

const DateField = ({ value, config, onChange, error }) => {
  //   const [locale, setLocate] = useState('es')
  const [date, setDate] = useState({
    value: value ? value : new Date(),
    config: {
      autoOk: true,
      variant: 'inline',
      inputVariant: 'outlined',
      format: 'dd/MM/yyyy',
      InputAdornmentProps: {
        position: 'start'
      },
      error: Boolean(error),
      helperText: error,
      ...config
    }
  })

  const handleChange = (date) => {
    setDate((prevData) => ({ ...prevData, value: date }))
    if (onChange) onChange(date)
  }

  useEffect(() => {
    setDate((prevData) => ({
      ...prevData,
      config: {
        ...prevData.config,
        error: Boolean(error),
        helperText: Boolean(error) ? error : config.helperText
      }
    }))
  }, [error])

  return (
    <MuiPickersUtilsProvider
      utils={DateFnsUtils}
      //   libInstance={moment}
      locale={esLocale}
    >
      <KeyboardDatePicker
        {...date.config}
        value={date.value}
        onChange={(date) => handleChange(date)}
      />
    </MuiPickersUtilsProvider>
  )
}

export default DateField
