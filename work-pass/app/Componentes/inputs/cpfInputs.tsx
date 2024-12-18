import React from "react";

interface CPFInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const CPFInput: React.FC<CPFInputProps> = ({ value, onChange }) => {
  const applyMask = (value: string) => {
    const rawValue = value.replace(/\D/g, ""); // Remove caracteres não numéricos
    return rawValue
      .replace(/^(\d{3})(\d)/, "$1.$2")
      .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4")
      .slice(0, 14); // Limita ao tamanho máximo do CPF
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(applyMask(e.target.value));
  };

  return (
    <div className="form-group">
      <label>CPF</label>
      <input
        type="text"
        placeholder="000.000.000-00"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
