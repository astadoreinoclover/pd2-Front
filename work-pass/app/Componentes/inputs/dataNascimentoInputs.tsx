import React from "react";

interface NascimentoInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const NascimentoInput: React.FC<NascimentoInputProps> = ({ value, onChange }) => {
  const applyMask = (value: string) => {
    const rawValue = value.replace(/\D/g, ""); // Remove caracteres não numéricos
    return rawValue
      .replace(/^(\d{2})(\d)/, "$1/$2")
      .replace(/^(\d{2})\/(\d{2})(\d)/, "$1/$2/$3")
      .slice(0, 10); // Limita ao tamanho máximo da data
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(applyMask(e.target.value));
  };

  return (
    <div className="form-group">
      <label>Data de Nascimento</label>
      <input
        type="text"
        placeholder="DD/MM/AAAA"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
