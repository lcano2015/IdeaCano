/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../../static/logo.png";

const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-md navbar-dark mb-4 colorNavBar">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </a>

          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto-right mb-2 mb-md-0">
              <li class="nav-item estilo ">
                <a aria-current="page" href="#">
                  Inicio
                </a>
              </li>
            </ul>

            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Vehiculos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Electronica
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Libros
                </a>
              </li>
            </ul>
            <div class="d-flex estilo">
              <a class="btn-round" href="#">
                Login
              </a>
            </div>
          </div>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
