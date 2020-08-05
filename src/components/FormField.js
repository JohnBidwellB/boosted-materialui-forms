import React from 'react'
import PropTypes from 'prop-types'
import Textfield from './Textfield'
import DateField from './DateField'

/**
 * FormField component with MaterialUI
 */

export default function FormField({
  element,
  change,
  value,
  config,
  validations,
  formatters,
  options,
  error,
  onChange
}) {
  switch (element) {
    case 'input':
      return (
        <Textfield
          element={element}
          config={config}
          validations={validations}
          formatters={formatters}
          value={value}
          change={change}
          error={error}
          onChange={onChange}
        />
      )
    case 'select':
      return (
        <Textfield
          config={config}
          validations={validations}
          formatters={formatters}
          value={value}
          options={options}
          element='select'
          error={error}
          change={change}
          onChange={onChange}
        />
      )
    case 'multiselect':
      return (
        <Textfield
          config={config}
          validations={validations}
          formatters={formatters}
          value={value}
          change={change}
          options={options}
          element={element}
          error={error}
          onChange={onChange}
        />
      )
    case 'date':
      return (
        <DateField
          value={value}
          config={config}
          onChange={onChange}
          error={error}
          // validations={validations}
        />
      )
    default:
      return (
        <Textfield
          config={config}
          validations={validations}
          formatters={formatters}
          value={value}
          change={change}
          error={error}
          onChange={onChange}
        />
      )
  }
  // return (
  //   <Field
  //     element={element}
  //     config={config}
  //     validations={validations}
  //     formatters={formatters}
  //     value={value}
  //     change={change}
  //     options={options}
  //     error={error}
  //     onChange={onChange}
  //   />
  // )
}

FormField.defaultProps = {
  element: 'input',
  change: null,
  value: null,
  config: {
    color: 'primary',
    margin: 'normal',
    size: 'small',
    type: 'text',
    variant: 'outlined'
  },
  validations: null,
  formatters: null,
  error: false,
  onChange: null
}

FormField.propTypes = {
  /**
   * Type of input to display.
   */
  element: PropTypes.oneOf(['input', 'select', 'multiselect', 'date']),
  /**
   * Function to control FormField value and validations.
   */
  change: PropTypes.func,
  /**
   * Function to control FormField value and validations.
   */
  onChange: PropTypes.func,
  /**
   * When using controlled component, is has input value.
   */
  value: PropTypes.node,
  /**
   * MaterialUI TextField config.
   */
  config: PropTypes.object,
  /**
   * Validate input.
   */
  validations: PropTypes.object,
  /**
   * Format input.
   */
  formatters: PropTypes.object,
  /**
   * Options when selected element is enabled.
   */
  options: PropTypes.array,
  /**
   * Error message
   */
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
}
