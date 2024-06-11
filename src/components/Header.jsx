import React from 'react';

function Header() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Teste
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link">Processos</a>
            </li>
            <li>
              <a>Processos</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
