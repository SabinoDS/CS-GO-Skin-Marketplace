'use client'
import { useEffect, useState } from "react"
import ItemLista from "@/components/ItemLista"
import { useRouter } from "next/navigation"
import Pesquisa from "@/components/Pesquisa"
import Swal from 'sweetalert2'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function Listagem() {
  const [armas, setArmas] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const router = useRouter()

  useEffect(() => {
    async function getArmas() {
      const response = await fetch("http://localhost:3004/armas")
      const dados = await response.json()
      setArmas(dados)
      setIsLoading(false)
    }
    getArmas()
  }, [])

  async function excluiArmas(id) {
    const response = await fetch("http://localhost:3004/armas/" + id, {
      method: "DELETE"
    })
    const novosDados = armas.filter(arma => arma.id != id)
    setArmas(novosDados)
  }

  async function destacaArma(id, status_atual) {
    await fetch("http://localhost:3004/arma/" + id,
      {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ stattrak: !status_atual })
      })
    const indiceAlterado = armas.findIndex(arma => arma.id == id)
    const novosDados = [...armas]
    novosDados[indiceAlterado].stattrak = !status_atual
    setArmas(novosDados)
  }

  const listaArmas = armas.map(arma => (
    <ItemLista key={arma.id}
      armas={arma}
      exclui={() => excluiArmas(arma.id)}
      altera={() => router.push('altera/' + arma.id)}
      consulta={() => router.push('consulta/' + arma.id)}
      destaca={() => destacaArma(arma.id, arma.stattrak)}
    />
  ))



  async function filtraDados(data) {
    if (data.pesq.length < 2) {
      Swal.fire("Digite, no mínimo, 2 caracteres")
      return
    }

    const pesquisa = data.pesq.toUpperCase()

    const response = await fetch("http://localhost:3004/armas")
    const dados = await response.json()

    const novosDados = dados.filter(arma =>
      arma.nome.toUpperCase().includes(pesquisa) || arma.classe.toUpperCase().includes(pesquisa)
    )
    
    if (novosDados.length == 0) {
      Swal.fire("Não há skins com a palavra chave informada...")
      return
    }

    

    setArmas(novosDados)
  }



  async function ordenaNomeArma() {
    const response = await fetch("http://localhost:3004/armas")
    const dados = await response.json()
    const ordenados = dados.sort((a, b) => { var armaA = a.nome.toLowerCase();
      var armaB = b.nome.toLowerCase();
      if (armaA < armaB) {
        return -1;
      }
      if (armaA > armaB) {
        return 1;
      }
      return 0;
  
    })
    setArmas(ordenados)
  }
  
  async function ordenaTodasClasse() {
    const response = await fetch("http://localhost:3004/armas")
    const dados = await response.json()
    const ordenadosClasse = dados.sort((a, b) => { var armaA = a.classe.toLowerCase();
      var armaB = b.classe.toLowerCase();
      if (armaA < armaB) {
        return -1;
      }
      if (armaA > armaB) {
        return 1;
      }
      return 0;
  
    })
    setArmas(ordenadosClasse)
  }
  
  
  async function mostraTodos() {
    const response = await fetch("http://localhost:3004/armas")
    const dados = await response.json()
    setArmas(dados)
  }

  if (isLoading) {
    return (
      <div className="container">
        <h2>Listagem de Skins</h2>
        <h5>Aguarde... Carregando os dados</h5>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-sm-7">
          <h2 className="mt-2">Listagem de Skins</h2>
        </div>
        <div className="col-sm-5">
          <Pesquisa filtra={filtraDados} mostra={mostraTodos} />
        </div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Item</th>
            <th>Nome <i className="bi bi-arrow-down-short" style={{fontSize: 24, cursor: 'pointer'}}
            onClick={ordenaNomeArma}></i></th>
            <th>Classe<i className="bi bi-arrow-down-short" style={{fontSize: 24, cursor: 'pointer'}}
            onClick={ordenaTodasClasse}></i></th>
            <th>Valor</th>
            <th>Data Anuncio</th>
          </tr>
        </thead>
        <tbody>
          {listaArmas}
        </tbody>
      </table>
    </div>
  )
}