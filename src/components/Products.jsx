import React from "react";
import products from "@/data/products"; // Asegúrate de que la ruta sea correcta

const Products = () => {
  return (
    <section id="productos" className="mx-auto">
      <div className="container px-5 mx-auto lg:px-24">
        <div className="flex flex-col w-full mb-4 text-left lg:text-center">
          <h1 className="mb-8 text-2xl Avenir font-semibold text-black">
            Cantidad de productos
          </h1>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          data-aos="fade-down"
        >
          {products.map((product) => (
            <div key={product.nombre} className="p-4 bg-gray-100 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">{product.nombre}</h2>
              <div className="flex items-center justify-center">
                <img
                  src={product.imagen}
                  alt={product.nombre}
                  className="object-center w-full h-48 mb-4"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
