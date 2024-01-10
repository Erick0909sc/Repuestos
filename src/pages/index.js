import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect } from "react";
import county from "@/assets/home/hcounty.png";
import Image from "next/image";
import products from "@/data/products"; // Asegúrate de tener la ruta correcta
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos CSS de AOS
import Link from "next/link";

const index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de las animaciones en milisegundos
      offset: 200, // Desplazamiento en píxeles desde el borde superior del elemento para activar la animación
    });
  }, []); // Asegúrate de ejecutar esto solo una vez después del montaje del componente
  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font mb-12 ">
        <div
          className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
          data-aos="fade-up"
        >
          <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
            <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
              Autorepuestos Ricky{" "}
            </h1>
            <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
              Tu Hyundai merece lo mejor, y aquí lo tienes todo: comodidad,
              calidad y variedad en un solo destino{" "}
            </p>
          </div>
          <div className="">
            <Image
              className="w-80 md:ml-1 ml-24"
              alt="iPhone-12"
              src={county}
            />
          </div>
        </div>
        <section className="mx-auto">
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
                <div
                  key={product.nombre}
                  className="p-4 bg-gray-100 rounded-lg"
                >
                  <h2 className="text-lg font-semibold mb-4">
                    {product.nombre}
                  </h2>
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
        <div className="grr max-w-7xl pt-20 mx-auto text-center">
          <h1 className="mb-8 text-6xl Avenir font-semibold text-gray-900">
            Consulta precios y garantiza la mejor calidad.{" "}
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <Link href="https://wa.link/saisp6">
            <button class="group hover:bg-green-600 relative bg-green-700 rounded text-neutral-50 duration-500 font-bold flex justify-start gap-2 items-center p-4 pr-8 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>

              <span class="border-l-2 px-2">Consulta</span>
            </button>
          </Link>

          <button class="cursor-pointer border border-gray-500 uppercase bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition">
            969534340
          </button>
        </div>
      </section>
    </>
  );
};

export default index;
