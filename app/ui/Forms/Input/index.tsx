import React from 'react'
import classes from './index.module.scss'

interface InputProps {
  type: string
  name: string
  placeholder?: string
  label?: string
  required?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = ({
  type,
  name,
  placeholder,
  label,
  required,
  value,
  onChange,
}) => {
  return (
    <div className={classes.main}>
      {label && (
        <label htmlFor={name} className={classes.label}>
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className={classes.input}
      />
    </div>
  )
}
