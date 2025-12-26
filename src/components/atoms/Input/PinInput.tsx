import React from 'react';

interface PinInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  label?: string;
  id?: string;
}

export const PinInput: React.FC<PinInputProps> = ({ value, onChange, error, label, id }) => {
  const uniqueId = React.useId();
  const inputId = id || `pin-input-${uniqueId}`;
  const errorId = `pin-error-${uniqueId}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 4);
    onChange(val);
  };

  return (
    <div className="form-control w-full">
      {label && (
        <label className="label" htmlFor={inputId}>
          <span className="label-text">{label}</span>
        </label>
      )}
      <input
        id={inputId}
        type="password"
        inputMode="numeric"
        autoComplete="one-time-code"
        pattern="[0-9]*"
        maxLength={4}
        value={value}
        onChange={handleChange}
        placeholder="Enter 4-digit PIN"
        className={`input input-bordered w-full text-center tracking-[1em] font-mono ${
          error ? 'input-error' : ''
        }`}
        required
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
      />
      {error && (
        <label className="label" id={errorId}>
          <span className="label-text-alt text-error">{error}</span>
        </label>
      )}
    </div>
  );
};
