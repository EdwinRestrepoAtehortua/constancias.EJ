import React from "react";
import phpImage from "../assets/images/desarrollo_aplicaciones_php.jpg";
import mysqlImage from "../assets/images/mysql.jpg";
import javascriptImage from "../assets/images/javascript.jpg";
import pythonImage from "../assets/images/python.jpg";
import actaImage from "../assets/images/acta de grado.jpg";
import excelImage from "../assets/images/excel.jpg";
import tecnicoImage from "../assets/images/tecnico.jpg";
import interpretacionImage from "../assets/images/interpretacion.jpg";
import construccionImage from "../assets/images/construccion.jpg";
import "./CertificadosLaborales.css"; // Importamos los estilos

const CertificadosLaborales = () => {
  const courses = [
    { title: "Desarrollo de Aplicaciones Web con PHP", image: phpImage },
    { title: "Construcción de Bases de Datos con MySQL", image: mysqlImage },
    {
      title: "Desarrollo de aplicaciones web en tiempo real con JavaScript y Node.js",
      image: javascriptImage,
    },
    { title: "Variables y estructuras de control en Python", image: pythonImage },
    { title: "Manejo de herramientas Microsoft Office 2016: Excel", image: excelImage },
    { title: "Acta de grado", image: actaImage },
    { title: "Técnico en construcción", image: tecnicoImage },
    { title: "Interpretación de planos", image: interpretacionImage },
    { title: "Construcción básica", image: construccionImage },
  ];

  const handleClick = (imagePath) => {
    if (imagePath) {
      window.open(imagePath, "_blank");
    } else {
      alert("La imagen no está disponible.");
    }
  };

  return (
    <div className="certificados-container">
      <div className="certificados-content">
        <h1 className="certificados-title">CERTIFICADOS</h1>
        <h2 className="certificados-subtitle">Edwin de Jesús Restrepo Atehortúa</h2>

        <h3 className="certificados-section-title">Cursos</h3>
        <ul className="certificados-list">
          {courses.map((course, index) => (
            <li
              key={index}
              className="certificados-item"
              onClick={() => handleClick(course.image)}
            >
              <h4 className="certificados-course-title">{course.title}</h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CertificadosLaborales;
