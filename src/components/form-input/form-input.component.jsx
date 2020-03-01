import React from 'react'
import './form-input.styles.scss'

export default function FormInput({ handleChange, label, ...otherProps }) {
  const labelClass = `${otherProps.value.length ? 'shrink' : ''} form-input-label`;
  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherProps} />
      {
        label ?
          (<label className={labelClass}>{label}</label>) : null
      }
    </div>
  )
}
