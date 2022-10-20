import React from 'react'
import PropTypes from 'prop-types'

export default function Input({type, value, name, onChange }) {
  return <input type={type} name={name} value={value} onChange={onChange} />
}

// Input.defaultProps = { 
//     name: 'name',
// }

Input.propTypes = { 
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
