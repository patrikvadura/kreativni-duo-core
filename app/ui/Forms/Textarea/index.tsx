import React from 'react'
import classes from './index.module.scss'

interface TextareaProps {
  name: string
  placeholder?: string
  label?: string
  required?: boolean
  value?: string
  rows?: number
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const Textarea: React.FC<TextareaProps> = ({
  name,
  placeholder,
  label,
  required,
  value,
  rows = 3,
  onChange,
}) => {
  return (
    <>
      {label && (
        <label htmlFor={name} className={classes.label}>
          {label}
        </label>
      )}
      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        id={name}
        rows={rows}
        onChange={onChange}
        className={classes.textarea}
      />
    </>
  )
}
