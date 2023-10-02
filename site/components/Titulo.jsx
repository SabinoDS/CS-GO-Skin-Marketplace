import Link from 'next/link';

export default function Titulo() {
  return (
    <nav className="navbar navbar-expand-lg bg-black ">
      <div className="container ">
        <Link className="navbar-brand" href="/">
          <img
            src="../luva.png"
            alt="Logo"
            width="72"
            height="50"
            className="d-inline-block align-text-top"
          />
          <h2 className="float-end mt-2 ms-2 text-light">
            Sabino Skins : Controle de Skins
          </h2>
        </Link>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link text-light" href="/cadastro">
              Cadastro
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" href="/listagem">
              Listagem
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" href="/estatistica">
              Estatistica
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
