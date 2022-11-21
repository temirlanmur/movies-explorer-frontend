import './Auth.css';

export default function AuthTextInput({
  name,
  type,
  placeholder,
  required,
  value,
  onChange,
  errorText,
}) {
  return (
    <>
      <input
        name={name}
        className="auth__input"
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
      <span className="auth__error-text">{ errorText }</span>
    </>
  );
}
