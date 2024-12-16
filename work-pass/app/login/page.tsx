"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./style.css";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Por favor, insira um e-mail válido.");
      return;
    }
    setError("");
    console.log("E-mail:", email);
    console.log("Senha:", password);
  };

  const goToHome = (): void => {
    router.push("/");
  };

  const togglePasswordVisibility = (): void => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <>
      <div className="background"></div>
      <div className="background-container">
        <div className="form-container">
          <img src="/WP.png" alt="Logo da Empresa" className="logo" />
          <h2 className="form-title">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <div className="password-container">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  id="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="submit-button">
              Entrar
            </button>
            <button
              type="button"
              className="back-button"
              onClick={goToHome}
            >
              Voltar para a Home
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
