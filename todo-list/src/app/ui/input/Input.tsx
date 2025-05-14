import React, { ChangeEventHandler } from 'react'

interface inputProps {
    value?: string
    className: string;
    type: string;
    placeholder?: string
    onChange: ChangeEventHandler
}

const Input: React.FC<inputProps> = ({value, className, type, placeholder,onChange }) => {
  return (
    <input value={value} onChange={onChange} className={className} type={type} placeholder={placeholder} />
  )
}

export default Input   