import React from 'react';

export default function Input({
  labelValue,
  placeholder,
  name,
  type,
  classname,
  inputClassName,
  errorClassName,
  value,
  onChange,

  error,
}) {
  return (
    <>
      <label htmlFor={name}>
        {labelValue}
      </label>
      <div className={classname}>
        <input
          type={type}
          id={name}
          name={name}
          className={inputClassName}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <span className="lineinput-line-1" />
        <span className="lineinput-line-2" />
        <span className="lineinput-line-3" />
        <span className="lineinput-line-4" />
      </div>
      {error && <div className={errorClassName}>{error}</div>}
    </>
  );
}
