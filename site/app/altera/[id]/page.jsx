'use client'
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'

export default function Alteracao() {
  const params = useParams()
  const { register, handleSubmit, reset } = useForm()

  useEffect(() => {
    async function getSkin() {
      const response = await fetch("http://localhost:3004/armas/" + params.id)
      const dado = await response.json()
      reset({
        item: dado.item,
        nome: dado.nome,
        preco: dado.preco,
        data: dado.data,
        classe: dado.classe,
        qualidade: dado.qualidade,
        stattrak: dado.stattrak,
        colecao: dado.colecao,
        capa: dado.capa,
        descricao: dado.descricao,
      })
    }
    getSkin()
  }, [])

  const [classes, setClasses] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getClasses() {
      const response = await fetch("http://localhost:3004/classes")
      const dados = await response.json()
      setClasses(dados)
      setIsLoading(false)
    }
    getClasses()
  }, [])

  async function alteraDados(data) {
    const arma = await fetch("http://localhost:3004/armas/" + params.id,
      {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ ...data })
      },
    )
    if (arma.status == 200) {
      toast.success("Ok! Arma alterada com sucesso")
    } else {
      // alert("Erro...")
      toast.error("Erro... Não foi possível concluir a alteração")
    }
  }

  return (
    <div className="container">
      <h2 className="mt-2">Alteração de Skins</h2>
      <form onSubmit={handleSubmit(alteraDados)}>
        <div className="row">
          <div className="col-sm-6">
            <label htmlFor="item" className="form-label">Item</label>
            <input type="text" className="form-control" id="item" {...register("item")} required />
          </div>
          <div className="col-sm-4">
            <label htmlFor="nome" className="form-label">Nome</label>
            <input type="text" className="form-control" id="nome" {...register("nome")} required />
          </div>
          <div className="col-sm-2">
            <label htmlFor="preco" className="form-label">Preço R$</label>
            <input type="number" step="0.10" className="form-control" id="preco" {...register("preco")} required />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-sm-2">
            <label htmlFor="data" className="form-label">Data Anuncio:</label>
            <input type="date" className="form-control" id="data" {...register("data")} required />
          </div>
          <div className="col-sm-4">
            <label htmlFor="classe" className="form-label">Classe</label>
            <select id="classe" className="form-select" {...register("classe")} required>
              {classes.map((classe) => (
                <option value={`${classe.tipo}`}>{classe.tipo}</option>
              ))}
            </select>
          </div>
          <div className="col-sm-4">
            <label htmlFor="qualidade" className="form-label">Qualidade</label>
            <input type="text" className="form-control" id="qualidade" {...register("qualidade")} required />
          </div>
          <div className="col-sm-2">
            <p>StatTrak:</p>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox"
                id="stattrak"
                {...register("stattrak")} />
              <label className="form-check-label" htmlFor="stattrak">StatTrak</label>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-sm-6">
            <label htmlFor="colecao" className="form-label">Coleção</label>
            <input type="text" className="form-control" id="colecao" {...register("colecao")} required />
          </div>
          <div className="col-sm-6">
            <label htmlFor="capa" className="form-label">Foto da Skin</label>
            <input type="url" className="form-control" id="capa" {...register("capa")} required />
          </div>
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="descricao" className="form-label">Descrição</label>
          <textarea className="form-control" id="descricao" rows="3" {...register("descricao")} required></textarea>
        </div>

        <input type="submit" value="Alterar" className="btn btn-success me-3" />
        <input type="button" value="Limpar" className="btn btn-danger"
          onClick={() => reset()} />

      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
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
  )
}