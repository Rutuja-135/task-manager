import { useMemo, useState } from 'react';
import { getRememberedLogins } from './rememberedLogins';

export default function EmailSuggest({
  label = 'Email',
  role,
  value,
  onChange,
  required = false,
  placeholder,
  autoComplete = 'username',
}) {
  const [open, setOpen] = useState(false);
  const remembered = useMemo(() => getRememberedLogins(role), [role]);

  const suggestions = useMemo(() => {
    const q = String(value || '').trim().toLowerCase();
    if (!q) return remembered.slice(0, 6);
    return remembered
      .filter(
        (item) =>
          item.email.toLowerCase().includes(q) ||
          item.displayName.toLowerCase().includes(q),
      )
      .slice(0, 6);
  }, [remembered, value]);

  function pick(item) {
    onChange(item.email);
    setOpen(false);
  }

  return (
    <label className="email-suggest">
      {label}
      <div className="email-suggest-wrap">
        <input
          type="email"
          autoComplete={autoComplete}
          value={value}
          required={required}
          placeholder={placeholder || 'Start typing your email…'}
          onChange={(e) => {
            onChange(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => {
            // allow click on suggestion
            setTimeout(() => setOpen(false), 150);
          }}
        />
        {open && suggestions.length > 0 && (
          <ul className="email-suggest-list" role="listbox">
            {suggestions.map((item) => (
              <li key={`${item.role}-${item.email}`}>
                <button type="button" onMouseDown={() => pick(item)}>
                  <span className="suggest-name">{item.displayName}</span>
                  <span className="suggest-email">{item.email}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </label>
  );
}
