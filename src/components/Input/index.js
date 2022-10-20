import React from 'react'

export default function Input({type, value, name, onChange }) {
  return <input type={type} name={name} value={value} onChange={onChange} />
}
