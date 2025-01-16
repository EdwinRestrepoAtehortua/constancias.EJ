import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CertificadosLaborales from "./components/CertificadosLaborales";
import CartasLaborales from "./components/CartasLaborales";
import PDF from "./components/Pdf";
//import "./styles/AppStyles.css"; // Importar los estilos externos*/}
import "./App.css";
const App = () => {
  return (
    <Router>
      {/* Barra de navegación */}
      <nav className="navbar">
        <ul className="navList">
          <li>
            <Link to="/" className="navItem">
              Certificados 
            </Link>
          </li>
          <li>
            <Link to="/cartas-laborales" className="navItem">
              Cartas Laborales
            </Link>
          </li>
         {/*} <li>
            <Link to="/pdf" className="navItem">
              PDF
            </Link>
          </li>*/}
        </ul>
      </nav>

      {/* Definición de rutas */}
      <Routes>
        <Route path="/" element={<CertificadosLaborales />} />
        <Route path="/cartas-laborales" element={<CartasLaborales />} />
        <Route path="/pdf" element={<PDF />} />
      </Routes>
    </Router>
  );
};

export default App;
