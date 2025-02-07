import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <nav className="block w-full max-w-screen-xl px-6 py-3 mx-auto text-black bg-blue-400 border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
        <div className="flex items-center justify-between text-blue-gray-900">
          <a
            href="#"
            className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
          >
            Autorepuesto Ricky{" "}
          </a>
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                <a
                  href="#home"
                  className="flex items-center transition-colors hover:text-blue-500"
                >
                  Home
                </a>
              </li>
              <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                <a
                  href="#productos"
                  className="flex items-center transition-colors hover:text-blue-500"
                >
                  Productos
                </a>
              </li>
              <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                <a
                  href="#contacto"
                  className="flex items-center transition-colors hover:text-blue-500"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <button
            onClick={toggleMenu}
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-6 h-6"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21L3 3M3 21l18-18"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                )}
              </svg>
            </span>
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden">
            <ul className="flex flex-col gap-2 my-2">
            <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                <a
                  href="#home"
                  className="flex items-center transition-colors hover:text-blue-500"
                >
                  Home
                </a>
              </li>
              <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                <a
                  href="#productos"
                  className="flex items-center transition-colors hover:text-blue-500"
                >
                  Productos
                </a>
              </li>
              <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                <a
                  href="#contacto"
                  className="flex items-center transition-colors hover:text-blue-500"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};
export default Navbar;
