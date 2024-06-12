import React from 'react';

function Header() {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="col">
            <a className="navbar-brand " style={{ marginLeft: 20 }} href="#">
              LOGO
            </a>
          </div>
          <div className="col-md-auto"></div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Calendário
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Processos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contatos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Mais
                </a>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="btn btn-outline-secondary btn-block"
            style={{ marginRight: 20 }}
          >
            Entrar
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Header;
