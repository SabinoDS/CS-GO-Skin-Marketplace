'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';

export default function Cadastro() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      stattrak: true,
    },
  });

  const [classes, setClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getClasses() {
      const response = await fetch('http://localhost:3004/classes');
      const dados = await response.json();
      setClasses(dados);
      setIsLoading(false);
    }
    getClasses();
  }, []);

  async function enviaDados(data) {
    const arma = await fetch('http://localhost:3004/armas', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ ...data }),
    });
    if (arma.status == 201) {
      toast.success('Ok! Skin cadastrada com sucesso');
      reset();
    } else {
      toast.error('Erro... Não foi possível concluir o cadastro');
    }
  }

  return (
    <div className="container">
      <h2 className="mt-2">Cadastro de Skin</h2>
      <form onSubmit={handleSubmit(enviaDados)}>
        <div className="row">
          <div className="col-sm-4">
            <label htmlFor="item" className="form-label">
              Item
            </label>
            <input
              type="text"
              className="form-control"
              id="item"
              {...register("item")}
            />
          </div>
          <div className="col-sm-4">
            <label htmlFor="nome" className="form-label">
              Nome Skin
            </label>
            <input
              type="text"
              className="form-control"
              id="nome"
              {...register("nome")}
            />
          </div>

          <div className="col-sm-4">
            <label htmlFor="classe" className="form-label">
              Classes
            </label>
            <select id="classe" className="form-select" {...register('classe')}>
              {classes.map((classe) => (
                <option value={`${classe.tipo}`}>{classe.tipo}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="row mt-3">
        <div className="col-sm-6">
            <label htmlFor="qualidade" className="form-label">
              Qualidade
            </label>
            <input
              type="text"
              className="form-control"
              id="qualidade"
              {...register("qualidade")}
            />
          </div>
          <div className="col-sm-3">
            <label htmlFor="valor" className="form-label">
              Valor
            </label>
            <input
              type="number"
              className="form-control"
              id="preco"
              {...register('preco')}
            />
          </div>
          <div className="col-sm-2">
            <p>StatTrak:</p>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="stattrak"
                {...register('stattrak')}
              />
              <label className="form-check-label" htmlFor="stattrak">
                Destaque
              </label>
            </div>
          </div>
        </div>

        <div className="row mt-3">
        <div className="col-sm-4">
            <label htmlFor="colecao" className="form-label">
              Coleção
            </label>
            <input
              type="text"
              className="form-control"
              id="colecao"
              {...register("colecao")}
            />
          </div>
          <div className="col-sm-4">
            <label htmlFor="data" className="form-label">
              Data Anuncio
            </label>
            <input
              type="date"
              className="form-control"
              id="data"
              {...register('data')}
            />
          </div>
          <div className="col-sm-4">
            <label htmlFor="capa" className="form-label">
              Foto
            </label>
            <input
              type="url"
              className="form-control"
              id="capa"
              {...register('capa')}
            />
          </div>
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="descricao" className="form-label">
            Descrição
          </label>
          <textarea
            className="form-control"
            id="descricao"
            rows="3"
            {...register('descricao')}
          ></textarea>
        </div>

        <input type="submit" value="Enviar" className="btn btn-primary me-3" />
        <input
          type="button"
          value="Limpar"
          className="btn btn-danger"
          onClick={() => reset()}
        />
        <Link className="btn btn-success float-end" href="/listagem">Voltar</Link>

      </form>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
