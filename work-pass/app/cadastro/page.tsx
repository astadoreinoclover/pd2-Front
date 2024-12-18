// "use client";
// import React, { useState } from "react";
// import { CNPJInput } from "../Componentes/inputs/cnpjInput";
// import { CPFInput } from "../Componentes/inputs/cpfInputs";
// import { TelefoneInput } from "../Componentes/inputs/celularInputs";
// import { NascimentoInput } from "../Componentes/inputs/dataNascimentoInputs";
// import "./style.css";

// export default function Cadastro() {
//   const [currentStep, setCurrentStep] = useState<number>(1);
//   const [empresa, setEmpresa] = useState({ nome: "", cnpj: "", plano: "" });
//   const [responsavel, setResponsavel] = useState({
//     nome: "",
//     nascimento: "",
//     cpf: "",
//     telefone: "",
//     email: "",
//   });
//   const [senha, setSenha] = useState({ senha: "", confirmacao: "" });
//   const [selectedPlanInfo, setSelectedPlanInfo] = useState<string | null>(null);

//   const handleNextStep = (): void => setCurrentStep((prev) => prev + 1);
//   const handlePreviousStep = (): void => setCurrentStep((prev) => prev - 1);

//   const planos = [
//     { id: "1", nome: "Plano Básico", descricao: "Ideal para pequenas empresas", valor: "10,90" },
//     { id: "2", nome: "Plano Padrão", descricao: "Inclui mais funcionalidades", valor: "10,90" },
//     { id: "3", nome: "Plano Avançado", descricao: "Para grandes negócios", valor: "10,90" },
//     { id: "4", nome: "Plano Premium", descricao: "Recursos completos", valor: "10,90" },
//   ];

//   return (
//     <>
//         <div className="background"></div>
//         <div className="background-container">
//         <div className="form-container">
//             <h2 className="form-title">Cadastro - Etapa {currentStep} de 4</h2>
//             <div className="progress-bar">
//             <div style={{ width: `${(currentStep / 4) * 100}%` }} />
//             </div>

//             {currentStep === 1 && (
//             <div>
//                 <h3 className="titulo">Dados da Empresa</h3>
//                 <div className="form-group">
//                 <label htmlFor="nome-empresa">Nome da Empresa</label>
//                 <input
//                     type="text"
//                     id="nome-empresa"
//                     placeholder="Digite o nome da empresa"
//                     value={empresa.nome}
//                     onChange={(e) =>
//                     setEmpresa((prev) => ({ ...prev, nome: e.target.value }))
//                     }
//                     required
//                 />
//                 </div>
//                 <div className="form-group">
//                 <CNPJInput
//                     value={empresa.cnpj}
//                     onChange={(value) => setEmpresa((prev) => ({ ...prev, cnpj: value }))}
//                 />
//                 </div>
//             </div>
//             )}

//             {currentStep === 2 && (
//             <div>
//             <h3 className="titulo">Escolha um Plano</h3>
//             <div className="planos-container">
//               {planos.map((plano) => (
//                 <div key={plano.id} className="card">
//                   <div className="card-header">
//                     <input
//                       type="checkbox"
//                       checked={empresa.plano === plano.nome}
//                       onChange={() =>
//                         setEmpresa((prev) => ({
//                           ...prev,
//                           plano: prev.plano === plano.nome ? "" : plano.nome,
//                         }))
//                       }
//                     />
//                   </div>
//                   <div className="card-body">
//                     <h5>{plano.nome}</h5>
//                     <span>R$ {plano.valor}</span>
//                     <button
//                       type="button"
//                       onClick={() => setSelectedPlanInfo(plano.descricao)}
//                     >
//                       Saiba Mais
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//             )}

//             {currentStep === 3 && (
//             <div>
//                 <h3 className="titulo">Dados do Responsável</h3>
//                 <div className="form-group">
//                 <label htmlFor="nome-responsavel">Nome Completo</label>
//                 <input
//                     type="text"
//                     id="nome-responsavel"
//                     placeholder="Digite o nome"
//                     value={responsavel.nome}
//                     onChange={(e) =>
//                     setResponsavel((prev) => ({ ...prev, nome: e.target.value }))
//                     }
//                     required
//                 />
//                 </div>
//                 <div className="form-group">
//                 <NascimentoInput
//                     value={responsavel.nascimento}
//                     onChange={(value) =>
//                     setResponsavel((prev) => ({ ...prev, nascimento: value }))
//                     }
//                 />
//                 </div>
//                 <div className="form-group">
//                 <CPFInput
//                     value={responsavel.cpf}
//                     onChange={(value) =>
//                     setResponsavel((prev) => ({ ...prev, cpf: value }))
//                     }
//                 />
//                 </div>
//                 <div className="form-group">
//                 <TelefoneInput
//                     value={responsavel.telefone}
//                     onChange={(value) =>
//                     setResponsavel((prev) => ({ ...prev, telefone: value }))
//                     }
//                 />
//                 </div>
//                 <div className="form-group">
//                 <label htmlFor="email">E-mail</label>
//                 <input
//                     type="email"
//                     id="email"
//                     placeholder="Digite o e-mail"
//                     value={responsavel.email}
//                     onChange={(e) =>
//                     setResponsavel((prev) => ({ ...prev, email: e.target.value }))
//                     }
//                     required
//                 />
//                 </div>
//             </div>
//             )}

//             {currentStep === 4 && (
//             <div>
//                 <h3 className="titulo">Definição de Senha</h3>
//                 <div className="form-group">
//                 <label htmlFor="senha">Senha</label>
//                 <input
//                     type="password"
//                     id="senha"
//                     placeholder="Digite sua senha"
//                     value={senha.senha}
//                     onChange={(e) =>
//                     setSenha((prev) => ({ ...prev, senha: e.target.value }))
//                     }
//                     required
//                 />
//                 </div>
//                 <div className="form-group">
//                 <label htmlFor="confirmacao">Confirmação de Senha</label>
//                 <input
//                     type="password"
//                     id="confirmacao"
//                     placeholder="Confirme sua senha"
//                     value={senha.confirmacao}
//                     onChange={(e) =>
//                     setSenha((prev) => ({
//                         ...prev,
//                         confirmacao: e.target.value,
//                     }))
//                     }
//                     required
//                 />
//                 </div>
//             </div>
//             )}

//             <div className="buttons">
//                 {currentStep > 1 && (
//                     <button type="button" className="back-button" onClick={handlePreviousStep}>
//                         Voltar
//                     </button>
//                 )}
//                 {currentStep < 4 ? (
//                     <button type="button" className="next-button" onClick={handleNextStep}>
//                         Próximo
//                     </button>
//                 ) : (
//                     <button type="submit" className="submit-button" onClick={() => console.log("Cadastro Finalizado")}>
//                         Finalizar Cadastro
//                     </button>
//                 )}
//             </div>
//         </div>

//         {selectedPlanInfo && (
//             <div className="popup">
//             <div className="popup-content">
//                 <p>{selectedPlanInfo}</p>
//                 <button onClick={() => setSelectedPlanInfo(null)}>Fechar</button>
//             </div>
//             </div>
//         )}
//         </div>
//     </>
// )
// }

"use client";
import React, { useState } from "react";
import { CNPJInput } from "../Componentes/inputs/cnpjInput";
import { CPFInput } from "../Componentes/inputs/cpfInputs";
import { TelefoneInput } from "../Componentes/inputs/celularInputs";
import { NascimentoInput } from "../Componentes/inputs/dataNascimentoInputs";
import "./style.css";

export default function Cadastro() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [empresa, setEmpresa] = useState({ nome: "", cnpj: "", plano: "" });
  const [responsavel, setResponsavel] = useState({
    nome: "",
    nascimento: "",
    cpf: "",
    telefone: "",
    email: "",
  });
  const [senha, setSenha] = useState({ senha: "", confirmacao: "" });
  const [selectedPlanInfo, setSelectedPlanInfo] = useState<string | null>(null);

  const handleNextStep = (): void => setCurrentStep((prev) => prev + 1);
  const handlePreviousStep = (): void => setCurrentStep((prev) => prev - 1);

  const planos = [
    { id: "1", nome: "Plano Básico", descricao: "Ideal para pequenas empresas", valor: "10,90" },
    { id: "2", nome: "Plano Padrão", descricao: "Inclui mais funcionalidades", valor: "10,90" },
    { id: "3", nome: "Plano Avançado", descricao: "Para grandes negócios", valor: "10,90" },
    { id: "4", nome: "Plano Premium", descricao: "Recursos completos", valor: "10,90" },
  ];

  return (
    <>
      <div className="background"></div>
      <div className="background-container">
        <div className="form-container">
          <h2 className="form-title">Cadastro - Etapa {currentStep} de 4</h2>
          <div className="progress-bar">
            <div style={{ width: `${(currentStep / 4) * 100}%` }} />
          </div>

          <div
            className={`form-step ${currentStep === 1 ? "active" : ""}`}
            key="step1"
          >
            {currentStep === 1 && (
              <div>
                <h3 className="titulo">Dados da Empresa</h3>
                <div className="form-group">
                  <label htmlFor="nome-empresa">Nome da Empresa</label>
                  <input
                    type="text"
                    id="nome-empresa"
                    placeholder="Digite o nome da empresa"
                    value={empresa.nome}
                    onChange={(e) =>
                      setEmpresa((prev) => ({ ...prev, nome: e.target.value }))
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <CNPJInput
                    value={empresa.cnpj}
                    onChange={(value) => setEmpresa((prev) => ({ ...prev, cnpj: value }))}
                  />
                </div>
              </div>
            )}
          </div>

          <div
            className={`form-step ${currentStep === 2 ? "active" : ""}`}
            key="step2"
          >
            {currentStep === 2 && (
              <div>
                <h3 className="titulo">Escolha um Plano</h3>
                <div className="planos-container">
                  {planos.map((plano) => (
                    <div key={plano.id} className="card">
                      <div className="card-header">
                        <input
                          type="checkbox"
                          checked={empresa.plano === plano.nome}
                          onChange={() =>
                            setEmpresa((prev) => ({
                              ...prev,
                              plano: prev.plano === plano.nome ? "" : plano.nome,
                            }))
                          }
                        />
                      </div>
                      <div className="card-body">
                        <h5>{plano.nome}</h5>
                        <span>R$ {plano.valor}</span>
                        <button
                          type="button"
                          onClick={() => setSelectedPlanInfo(plano.descricao)}
                        >
                          Saiba Mais
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className={`form-step ${currentStep === 3 ? "active" : ""}`}
            key="step3"
          >
            {currentStep === 3 && (
              <div>
                <h3 className="titulo">Dados do Responsável</h3>
                <div className="form-group">
                  <label htmlFor="nome-responsavel">Nome Completo</label>
                  <input
                    type="text"
                    id="nome-responsavel"
                    placeholder="Digite o nome"
                    value={responsavel.nome}
                    onChange={(e) =>
                      setResponsavel((prev) => ({ ...prev, nome: e.target.value }))
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <NascimentoInput
                    value={responsavel.nascimento}
                    onChange={(value) =>
                      setResponsavel((prev) => ({ ...prev, nascimento: value }))
                    }
                  />
                </div>
                <div className="form-group">
                  <CPFInput
                    value={responsavel.cpf}
                    onChange={(value) =>
                      setResponsavel((prev) => ({ ...prev, cpf: value }))
                    }
                  />
                </div>
                <div className="form-group">
                  <TelefoneInput
                    value={responsavel.telefone}
                    onChange={(value) =>
                      setResponsavel((prev) => ({ ...prev, telefone: value }))
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Digite o e-mail"
                    value={responsavel.email}
                    onChange={(e) =>
                      setResponsavel((prev) => ({ ...prev, email: e.target.value }))
                    }
                    required
                  />
                </div>
              </div>
            )}
          </div>

          <div
            className={`form-step ${currentStep === 4 ? "active" : ""}`}
            key="step4"
          >
            {currentStep === 4 && (
              <div>
                <h3 className="titulo">Definição de Senha</h3>
                <div className="form-group">
                  <label htmlFor="senha">Senha</label>
                  <input
                    type="password"
                    id="senha"
                    placeholder="Digite sua senha"
                    value={senha.senha}
                    onChange={(e) =>
                      setSenha((prev) => ({ ...prev, senha: e.target.value }))
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmacao">Confirmação de Senha</label>
                  <input
                    type="password"
                    id="confirmacao"
                    placeholder="Confirme sua senha"
                    value={senha.confirmacao}
                    onChange={(e) =>
                      setSenha((prev) => ({ ...prev, confirmacao: e.target.value }))
                    }
                    required
                  />
                </div>
              </div>
            )}
          </div>

          <div className="buttons">
            {currentStep > 1 && (
              <button type="button" className="back-button" onClick={handlePreviousStep}>
                Voltar
              </button>
            )}
            {currentStep < 4 ? (
              <button type="button" className="next-button" onClick={handleNextStep}>
                Próximo
              </button>
            ) : (
              <button type="submit" className="submit-button" onClick={() => console.log("Cadastro Finalizado")}>
                Finalizar Cadastro
              </button>
            )}
          </div>
        </div>

        {selectedPlanInfo && (
          <div className="popup">
            <div className="popup-content">
              <p>{selectedPlanInfo}</p>
              <button onClick={() => setSelectedPlanInfo(null)}>Fechar</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
