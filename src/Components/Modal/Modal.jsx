import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import UnderlineTx from '../Basic/UnderlineTx.jsx';
// import { getCountyMesh } from "./getCountyMesh";
// import { useEffect, useState } from "react";
// import { getRankingNames } from "./getRankingNames";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30rem',
  border: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

export default function Modaldiv({
  open,
  handleClose,
  countyName,
  codeArea,
  ranking,
}) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="flex justify-center px-32 py-4 bg-slate-800 text-slate-50 text-2xl w-full rounded-t-sm">
          <h1>{countyName}</h1>
        </div>

        <div className="bg-slate-50 pt-2 p-4 w-full">
          <div className=" mb-2 border-b-[1px] border-slate-300 pb-2">
            <h1 className="text-xl text-center pb-2">
              <UnderlineTx text="Ranking" />
            </h1>
          </div>
          <div className="flex justify-around">
            <div className="w-1/2 font-bold">
              <h1>Nome</h1>
            </div>
            <div className="w-1/2 justify-end flex font-bold">
              <h1>Frequencia</h1>
            </div>
          </div>
          {!!ranking && (
            <div>
              {ranking.map((item, index) => (
                <div key={index} className="flex justify-around">
                  <div className=" w-1/2">
                    <h1>{item.nome}</h1>
                  </div>
                  <div className=" w-1/2 justify-end flex">
                    <h1>{item.frequencia}</h1>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="bg-slate-50 pt-2 mt-3 mx-2 border-t-[1px] rounded-b-sm border-slate-300 text-center w-full">
            <h1>CodeArea: {codeArea}</h1>
          </div>
          <div>
            {/* a href para a página que exibe mais detalhes do estado */}
            <a href={'./'} rel="noreferrer" className="flex justify-center items-center mt-2 bg-slate-800 hover:bg-slate-600 text-slate-50 p-2 rounded-sm duration-75">
              <h1>Ver mais detalhes</h1>
            </a>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
