import React, { useState } from 'react';

const ProntuarioList = ({ data }) => {
  return (
    <div>
      {Object.keys(data).map(prontuario => (
        <Prontuario key={prontuario} prontuario={prontuario} evolucoes={data[prontuario].evolucoes} />
      ))}
    </div>
  );
};

const Prontuario = ({ prontuario, evolucoes }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-6 bg-blue-300 border-2 border-black rounded-lg prontuario">
      <h2 onClick={() => setIsOpen(!isOpen)}>Prontuário: {prontuario}</h2>
      {isOpen && (
        <div className="evolucoes">
          {evolucoes.map((evolucao, index) => (
            <Evolucao key={index} evolucao={evolucao} />
          ))}
        </div>
      )}
    </div>
  );
};

const Evolucao = ({ evolucao }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-h-full p-6 bg-indigo-200 border-2 border-black rounded-lg evolucao">
      <p><strong>Internação:</strong> {evolucao.n_internacao}</p>
      <p onClick={() => setIsOpen(!isOpen)}><strong>Data/Hora:</strong> {evolucao.dthr_internacao}</p>
      <p><strong>Código:</strong> {evolucao.codigo}</p>
      {isOpen && (
        <div className="entradas">
          {evolucao.entradas.map((entrada, index) => (
            <Entrada key={index} entrada={entrada} />
          ))}
        </div>
      )}
    </div>
  );
};

const Entrada = ({ entrada }) => {
  const backgroundColor = entrada.tipo === "nutricao" ? "#FFFF99" : "#FFFFFF";
  return (
    <p className="break-words whitespace-pre-wrap max-h-full p-6 bg-white border-2 border-black rounded-lg mb-2" style={{ backgroundColor }}><strong>{'>>'}</strong> {entrada.texto}</p>
  );
};

export default ProntuarioList;
