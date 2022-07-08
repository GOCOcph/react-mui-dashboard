/* eslint-disable import/prefer-default-export */
import * as React from 'react'
import { TextField } from '@mui/material'

import { InputProps } from '../../types/components-props'

// eslint-disable-next-line react/function-component-definition
export const Input: React.FC<InputProps> = ({
  label, value, setValue, fullWidth, required, disabled, error
}) => {

  const actuallyError = error && !!value && value.length > 0

  return (
    <TextField
      margin="normal"
      error={actuallyError}
      required={required}
      fullWidth={fullWidth}
      value={value}
      disabled={disabled}
      onChange={(e) => setValue(e.target.value)}
      id={label}
      label={label}
      name={label}
      autoFocus
    />
  )
}
