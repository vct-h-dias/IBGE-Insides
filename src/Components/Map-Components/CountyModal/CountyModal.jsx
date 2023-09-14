import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import { getCountyMesh } from "./getCountyMesh";
// import { useEffect, useState } from "react";
// import { getRankingNames } from "./getRankingNames";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

export default function CountyModal({
  open,
  handleClose,
  countyName,
  codeArea,
  ranking,
}) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {countyName}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {codeArea}
          </Typography>

          {/* HARDCODE KKKKKKKKK */}
          {!!ranking && (
            <div>
            {ranking.map((item, index) => (
              <div key={index}>
                {item.frequencia} - {item.nome}
              </div>
            ))}
          </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}
