import React from 'react';

// Custom Input Component
function Input({
    type = 'text',
    value = '',
    onChange,
    placeholder = '',
    isRequired = false,
    label,
}) {
  return (
    <div>
      <fieldset className='border-2 border-tertiary rounded-md px-2'>
        <legend className='pl-2 pr-5 text-primary text-sm font-medium aria-required'>
          {label}
          {isRequired && <span className='text-required'>*</span>}
        </legend>
        <input
          type={type} 
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="px-2 pb-2 outline-none text-text placeholder:text-placeholder"
        />
      </fieldset>
    </div>
  )
}

export default Input;
