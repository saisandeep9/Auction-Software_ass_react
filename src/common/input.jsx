import React from "react";

const Input = ({
  id,
  type,
  label,
  value,
  placeholder,
  className,
  onChange,
  autoFocus,
  obligatory = false,
  error,
}) => {
  const styleAsterisk = { color: "red" };
  return (
    <div className="form-group m-2">
      <label htmlFor={id}>{label}</label>
      {obligatory && <span style={styleAsterisk}>*</span>}
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
        autoFocus={autoFocus ? true : false}
      />

      {/* If error is not null or truthy then return div */}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
