import React from "react";

interface CNPJInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const CNPJInput: React.FC<CNPJInputProps> = ({ value, onChange }) => {
  const applyMask = (value: string) => {
    const rawValue = value.replace(/\D/g, "");
    return rawValue
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3/$4")
      .replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/, "$1.$2.$3/$4-$5")
      .slice(0, 18);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(applyMask(e.target.value));
  };

  return (
    <div className="form-group">
      <label>CNPJ</label>
      <input
        type="text"
        placeholder="00.000.000/0000-00"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
