import React from "react";

interface TelefoneInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const TelefoneInput: React.FC<TelefoneInputProps> = ({ value, onChange }) => {
  const applyMask = (value: string) => {
    const rawValue = value.replace(/\D/g, ""); // Remove caracteres não numéricos
    return rawValue
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/^(\(\d{2}\)) (\d{5})(\d)/, "$1 $2-$3")
      .slice(0, 15); // Limita ao tamanho máximo do telefone
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(applyMask(e.target.value));
  };

  return (
    <div className="form-group">
      <label>Telefone</label>
      <input
        type="text"
        placeholder="(00) 00000-0000"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
