import React from "react";

// import component:
import Drawer from "react-modern-drawer";

//import styles:
import "react-modern-drawer/dist/index.css";

// import icons:
import AddIcon from "@mui/icons-material/Add";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import CloseIcon from "@mui/icons-material/Close";

function Drawerbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button
        onClick={toggleDrawer}
        className="fixed z-50 mt-5 flex items-center group gap-1 text-white border-[1px] border-l-0 border-slate-50 p-[5px] bg-slate-800 hover:bg-slate-600 hover:pr-2 duration-75">
        <AddIcon
          fontSize="medium"
          className="group-hover:animate-spin group-hover:hidden duration-75"
        />
        <div className="group-hover:flex hidden">
          <NavigateNextIcon fontSize="medium" />
        </div>
        <p className="group-hover:block hidden">Abrir Menu</p>
      </button>
      <Drawer
        open={isOpen}
        direction="left"
        overlayOpacity={0}
        enableOverlay={false}
        size={350}>
        <button
          onClick={toggleDrawer}
          className="fixed right-0 translate-x-full z-50 mt-5 flex items-center group gap-1 text-white border-[1px] border-l-0 border-slate-50 p-[5px] bg-slate-800 hover:bg-slate-600 hover:pr-2 duration-75">
          <CloseIcon className="text-white group-hover:hidden" />
          <div className="group-hover:flex hidden">
            <NavigateBeforeIcon />
          </div>
          <h1 className="hidden group-hover:flex">Fechar Menu</h1>
        </button>
        <div>
          <div className="bg-slate-800 flex p-5 justify-center text-xl text-white">
            <h1>Filtrar dados</h1>
          </div>

          <div>// Opções de filtro</div>

          <div className="absolute w-full bottom-0 border-t-[1px] p-3 hover:bg-slate-100 text-slate-600 duration-75">
            <a href="./" className="flex items-center justify-center">
              <FirstPageIcon fontSize="large" />
              Página Inicial
            </a>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default Drawerbar;