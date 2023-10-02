import 'bootstrap-icons/font/bootstrap-icons.css';
import Swal from 'sweetalert2'

export default function ItemLista(props) {

  function confirmaExclusao(id, nome) {
    // if (confirm(`Confirma Exclusão da Skin "${item}"?`)) {
    //   props.exclui(id)
    // }
    Swal.fire({
      title: `Confirma Exclusão da Skins "${nome}"?`,
      text: "Esta operação não poderá ser desfeita",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim. Excluir!'
    }).then((result) => {
      if (result.isConfirmed) {
        props.exclui(id)
        Swal.fire(
          'Excluído!',
          'Skin excluída com sucesso',
          'success'
        )
      }
    })
  }

  return (
    <tr>
      <td>
        <img src={props.armas.capa} alt={`Capa de ${props.armas.nome}`} width={80} />
      </td>
      <td className={props.armas.stattrak ? "fw-bold" : ""}>{props.armas.item}</td>
      <td className={props.armas.stattrak ? "fw-bold" : ""}>{props.armas.nome}</td>
      <td className={props.armas.stattrak ? "fw-bold" : ""}>{props.armas.classe}</td>
      <td className={props.armas.stattrak ? "fw-bold" : ""}>{props.armas.preco}</td>
      <td>
        <i className="bi bi-x-circle text-danger" style={{ fontSize: 24, cursor: 'pointer' }}
          onClick={() => confirmaExclusao(props.armas.id, props.armas.nome)}
          title="Excluir"
        ></i>
        <i className="bi bi-pencil-square text-warning ms-2" style={{ fontSize: 24, cursor: 'pointer' }}
          onClick={props.altera}
          title="Alterar"
        ></i>
        <i className="bi bi-search text-success ms-2" style={{ fontSize: 24, cursor: 'pointer' }}
          onClick={props.consulta}
          title="Consultar"
        ></i>
        <i className="bi bi-house-check text-primary ms-2" style={{ fontSize: 24, cursor: 'pointer' }}
          onClick={props.destaca}
          title="Destacar"
        ></i>
      </td>
    </tr>
  )
}