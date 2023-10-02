import Link from "next/link"

async function getArma(id) {
  const response = await fetch("http://localhost:3004/armas/"+id)
  const dado = await response.json()
  return dado
}

export default async function Consulta({params}) {

  const arma = await getArma(params.id)
  
  return (
    <div className="container">
      <h2 className="mt-2">Consulta de Skins</h2>
      <form>
        <div className="row">
          <div className="col-sm-4">
            <label htmlFor="item" className="form-label">Item</label>
            <input type="text" className="form-control" id="item" value={arma.item} readOnly />
          </div>
          <div className="col-sm-4">
            <label htmlFor="nome" className="form-label">Nome da Skin</label>
            <input type="text" className="form-control" id="nome" value={arma.nome} readOnly />
          </div>
          <div className="col-sm-2">
            <label htmlFor="classe" className="form-label">Classe</label>
            <input type="text" className="form-control" id="classe" value={arma.classe} readOnly />
          </div>
          <div className="col-sm-2">
            <label htmlFor="preco" className="form-label">Preço</label>
            <input type="number" step="0.10" className="form-control" id="preco" value={arma.preco} readOnly />
          </div>
        </div>

        <div className="row mt-3">
        <div className="col-sm-4">
            <label htmlFor="nome" className="form-label">Nome da Skin</label>
            <input type="text" className="form-control" id="nome" value={arma.nome} readOnly />
          </div>
          <div className="col-sm-4">
            <label htmlFor="data" className="form-label">Data Anuncio</label>
            <input type="date" className="form-control" id="data" value={arma.data} readOnly />
          </div>
          <div className="col-sm-2">
            <p>StatTrak:</p>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" 
                id="stattrak" 
                checked={arma.stattrak}
                readOnly
                />
              <label className="form-check-label" htmlFor="stattrak">Destaque</label>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-sm-6">
            <p className="form-label">Foto</p>
            <img src={arma.capa} alt={`Capa da Skin ${arma.capa}`} width={150} height={210} className="mx-auto d-block"/>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="descricao" className="form-label">Descrição</label>
          <textarea className="form-control" id="descricao" rows="3" value={arma.descricao} readOnly></textarea>
        </div>

        <Link className="btn btn-success float-end" href="/listagem">Voltar</Link>

      </form>
    </div>
  )
}