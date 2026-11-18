import { useState } from 'react';

export default function PasswordField({
  label = 'Password',
  value,
  onChange,
  autoComplete = 'current-password',
  required = false,
  minLength,
  placeholder,
}) {
  const [visible, setVisible] = useState(false);

  return (
    <label className="password-field">
      {label}
      <span className="password-wrap">
        <input
          type={visible ? 'text' : 'password'}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          required={required}
          minLength={minLength}
          placeholder={placeholder}
        />
        <button
          type="button"
          className="eye-btn"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? 'Hide password' : 'Show password'}
          title={visible ? 'Hide password' : 'Show password'}
        >
          {visible ? (
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 6c-5 0-9.3 3.1-11 7.5 1.7 4.4 6 7.5 11 7.5s9.3-3.1 11-7.5C21.3 9.1 17 6 12 6zm0 12.5c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"
              />
              <path
                fill="currentColor"
                d="M3.2 3.2 20.8 20.8l-1.4 1.4L1.8 4.6z"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 5c-5 0-9.3 3.1-11 7.5C2.7 16.9 7 20 12 20s9.3-3.1 11-7.5C21.3 8.1 17 5 12 5zm0 12.5c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"
              />
            </svg>
          )}
        </button>
      </span>
    </label>
  );
}
