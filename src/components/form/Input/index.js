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
  blocClassName,
  error,
  validate,
  errorMessage,
}) {
  if (type === 'text') {
    return (
      <div className={blocClassName}>
        <label htmlFor={name}>
          {labelValue}
        </label>
        <div className={classname}>
          <input
            key={name}
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
      </div>
    );
  }
  if (type === 'number') {
    return (
      <div className={blocClassName}>
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
            min={validate && validate.min}
          />
          <span className="lineinput-line-1" />
          <span className="lineinput-line-2" />
          <span className="lineinput-line-3" />
          <span className="lineinput-line-4" />
        </div>
        {error && <div className={errorClassName}>{errorMessage}</div>}
      </div>
    );
  }
}
