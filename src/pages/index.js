import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect } from "react";

// Asegúrate de tener la ruta correcta
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos CSS de AOS

import Home from "@/components/Home";
import Contacto from "@/components/Contacto";
import Products from "@/components/Products";

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de las animaciones en milisegundos
      offset: 200, // Desplazamiento en píxeles desde el borde superior del elemento para activar la animación
    });
  }, []); // Asegúrate de ejecutar esto solo una vez después del montaje del componente
  return (
    <div>
      <Navbar />
      <Home />
      <Products />
      <Contacto />
    </div>
  );
};

export default Index;
