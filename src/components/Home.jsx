import React from "react";
import county from "@/assets/home/hcounty.png";
import Image from "next/image";

const Home = () => {
  return (
    <section id="home">
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
          <Image className="w-80 md:ml-1 ml-24" alt="iPhone-12" src={county} />
        </div>
      </div>
    </section>
  );
};

export default Home;
