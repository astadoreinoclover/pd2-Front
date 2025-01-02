import React, { useState } from 'react';

type PasswordDefinitionProps = {
  senha: {
    senha: string;
    confirmacao: string;
  };
  setSenha: React.Dispatch<React.SetStateAction<{
    senha: string;
    confirmacao: string;
  }>>;
};

export const PasswordDefinition: React.FC<PasswordDefinitionProps> = ({ senha, setSenha }) => {
  const [requisitos, setRequisitos] = useState({
    maiuscula: false,
    minuscula: false,
    numero: false,
    caractereEspecial: false,
  });
  const [senhasIguais, setSenhasIguais] = useState(false);
  const [tamanho, setTamanho] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isPasswordVisibleConf, setIsPasswordVisibleConf] = useState<boolean>(false);

  const validarRequisitos = (senha: string) => {
    const maiuscula = /[A-Z]/.test(senha);
    const minuscula = /[a-z]/.test(senha);
    const numero = /\d/.test(senha);
    const caractereEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha);

    setRequisitos({
      maiuscula,
      minuscula,
      numero,
      caractereEspecial,
    });

    setTamanho(senha.length >= 8);

    return maiuscula && minuscula && numero && caractereEspecial;
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSenha((prev) => ({ ...prev, senha: value }));
    if (validarRequisitos(value)) {
      validarSenhas(value, senha.confirmacao);
    } else {
      setSenhasIguais(false);
    }
  };

  const handleConfirmacaoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSenha((prev) => ({ ...prev, confirmacao: value }));
    if (validarRequisitos(senha.senha)) {
      validarSenhas(senha.senha, value);
    } else {
      setSenhasIguais(false);
    }
  };

  const validarSenhas = (senha: string, confirmacao: string) => {
    setSenhasIguais(senha === confirmacao);
  };

  const togglePasswordVisibility = (): void => {
    setIsPasswordVisible((prev) => !prev);
  };

  const togglePasswordVisibilityConf = (): void => {
    setIsPasswordVisibleConf((prev) => !prev);
  };

  return (
    <div>
      <h3 className="titulo">Definição de Senha</h3>
      <div className="form-group">
        <label htmlFor="senha">Senha</label>
        <div className="password-container">
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="senha"
            placeholder="Digite sua senha"
            value={senha.senha}
            onChange={handlePasswordChange}
            required
          />
          <button
            type="button"
            className="eye-icon"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? "👁️" : "🙈"}
          </button>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="confirmacao">Confirmação de Senha</label>
        <div className="password-container">
          <input
            type={isPasswordVisibleConf ? "text" : "password"}
            id="confirmacao"
            placeholder="Confirme sua senha"
            value={senha.confirmacao}
            onChange={handleConfirmacaoChange}
            required
          />
          <button
            type="button"
            className="eye-icon"
            onClick={togglePasswordVisibilityConf}
          >
            {isPasswordVisibleConf ? "👁️" : "🙈"}
          </button>
        </div>
      </div>
      <div className="password-requisitos">
        <ul>
          <li>
            <input type="checkbox" checked={tamanho} readOnly />
            <span>Conter pelo menos 8 caracteres</span>
          </li>
          <li>
            <input type="checkbox" checked={senhasIguais} readOnly />
            <span>As senhas são iguais</span>
          </li>
          <li>
            <input type="checkbox" checked={requisitos.maiuscula} readOnly />
            <span>Pelo menos uma letra maiúscula</span>
          </li>
          <li>
            <input type="checkbox" checked={requisitos.minuscula} readOnly />
            <span>Pelo menos uma letra minúscula</span>
          </li>
          <li>
            <input type="checkbox" checked={requisitos.numero} readOnly />
            <span>Pelo menos um número</span>
          </li>
          <li>
            <input type="checkbox" checked={requisitos.caractereEspecial} readOnly />
            <span>Pelo menos um caractere especial</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
