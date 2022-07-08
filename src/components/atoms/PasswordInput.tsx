/* eslint-disable import/prefer-default-export */
import * as React from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  IconButton, InputAdornment, TextField
} from '@mui/material'

import { InputProps } from '../../types/components-props'

// eslint-disable-next-line react/function-component-definition
export const PasswordInput: React.FC<InputProps> = ({
  label, value, setValue, fullWidth, required, disabled, error
}) => {

  const [showPassword, setShowPassword] = React.useState(false)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const actuallyError = error && !!value && value.length > 0

  return (
    <TextField
      margin="normal"
      id="outlined-adornment-password"
      fullWidth={fullWidth}
      type={showPassword ? 'text' : 'password'}
      value={value}
      label={label}
      variant="outlined"
      disabled={disabled}
      required={required}
      error={actuallyError}
      onChange={(e) => setValue(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />

  )
}
