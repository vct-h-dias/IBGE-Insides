import React from "react";
import Logo from "../../Components/Basic/Logo";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function togleContentMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className="fixed z-50 flex justify-between items-center w-screen bg-slate-100 py-5 px-10">
      <Logo />

      <div>
        <ul className="flex">
          <li className="mr-5">
            <a href="./#" className="text-slate-500 hover:text-black">
              Início
            </a>
          </li>
          <li className="mr-5">
            <button
              onClick={togleContentMenu}
              className="text-slate-500 hover:text-black"
            >
              Sobre
            </button>
            {isMenuOpen && (
              <div className="bg-white border shadow-lg absolute grid -translate-x-[20%]">
                <a href="./#finalidade" className="text-slate-500 hover:text-black border-b px-8 py-2 hover:bg-slate-100 duration-75">
                  Finalidade
                </a>
                <a href="./#funcionalidades" className="text-slate-500 hover:text-black border-b px-8 py-2 hover:bg-slate-100 duration-75">
                  Funcionalidades
                </a>
                <a href="./#tecnologias" className="text-slate-500 hover:text-black px-8 py-2 hover:bg-slate-100 duration-75">
                  Tecnologias
                </a>
              </div>
            )}
          </li>

          <li className="mr-5">
            <a href="./Estado" className="text-slate-500 hover:text-black">
              Filtro de dados
            </a>
          </li>
          <li className="mr-5">
            <a
              href="/Map"
              className="text-slate-200 bg-slate-800 px-3 py-2 rounded-sm hover:text-slate-50 hover:bg-black duration-75"
            >
              VER MAPA
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
