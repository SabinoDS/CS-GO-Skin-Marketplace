'use client';
import { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

export default function Estatistica() {
  const [armas, setArmas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getArmas() {
      const response = await fetch('http://localhost:3004/armas');
      const dados = await response.json();
      setArmas(dados);
      setIsLoading(false);
    }
    getArmas();
  }, []);

  const grupos = [];
  var total = 0;

  for (const arma of armas) {
    const indice = grupos.findIndex((grupo) => grupo.classe == arma.classe);
    if (indice == -1) {
      grupos.push({
        classe: arma.classe,
        quantidade: 1,
      });
    } else {
      grupos[indice].quantidade++;
    }
  }
  
  

  for (const arma of armas) {
    total += parseFloat(arma.preco);
  }

  const data = [['Classe', 'Quantidade']];
  grupos.map((grupo) => data.push([grupo.classe, grupo.quantidade]));

  const options = {
    title: 'Produtos por Classe',
    is3D: true,
  };

  return (
    <div className="container">
      <h2 className="mt-2">Estatística de Skins</h2>
      <div className="row">
        <div className="col-2">
          <div className="card">
            <div className="card-header">Skins Cadastradas</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <p>{armas.length}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-2">
          <div className="card">
            <div className="card-header">Total dos Skins</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item center">
                <p>R$ {total}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Chart
        chartType="ColumnChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
      />
    </div>
  );
}
