import React from "react";
import ituango18Image from "../assets/images/consorcio ccc ituango 2018.jpg";
import ituango21Image from "../assets/images/consorcio ccc ituango 2021.jpg";
import mar1Image from "../assets/images/consorcio mar 1.jpg";
import coopevianImage from "../assets/images/coopevian.jpg";
import "./CartasLaborales.css"; // Importar los estilos

const CartasLaborales = () => {
  const courses = [
    {
      title: "Consorcio ccc ituango (2018)",
      image: ituango18Image,
    },
    {
      title: "Consorcio mar 1",
      image: mar1Image,
    },
    {
      title: "Coopevian",
      image: coopevianImage,
    },
    {
      title: "Consorcio ccc ituango (2022)",
      image: ituango21Image,
    },
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
        <h1 className="certificados-title">Cartas Laborales</h1>
        <h2 className="certificados-subtitle">Edwin de Jesús Restrepo Atehortúa</h2>

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

export default CartasLaborales;
