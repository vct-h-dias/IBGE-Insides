import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { getCountyMesh } from "./getCountyMesh";
import { useEffect, useState } from "react";
import { getRankingNames } from "./getRankingNames";

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
}) {
  const [mesh, setMesh] = useState(null);
  const [ranking, setRanking] = useState(null);

  useEffect(() => {
    if (codeArea) {
      getCountyMesh(codeArea).then((data) => {
        setMesh(data);
      });

      getRankingNames(codeArea).then((data) => {
        setRanking(data[0].res);
      });
    }
  });

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
            <div style={{ mt: "2rem" }}>
              <div>
                {ranking[0].frequencia} - {ranking[0].nome}
              </div>
              <div>
                {ranking[1].frequencia} - {ranking[1].nome}
              </div>
              <div>
                {ranking[2].frequencia} - {ranking[2].nome}
              </div>
              <div>
                {ranking[3].frequencia} - {ranking[3].nome}
              </div>
              <div>
                {ranking[4].frequencia} - {ranking[4].nome}
              </div>
              <div>
                {ranking[5].frequencia} - {ranking[5].nome}
              </div>
              <div>
                {ranking[6].frequencia} - {ranking[6].nome}
              </div>
              <div>
                {ranking[7].frequencia} - {ranking[7].nome}
              </div>
              <div>
                {ranking[8].frequencia} - {ranking[8].nome}
              </div>
              <div>
                {ranking[9].frequencia} - {ranking[9].nome}
              </div>
              <div>
                {ranking[10].frequencia} - {ranking[10].nome}
              </div>
              <div>
                {ranking[11].frequencia} - {ranking[11].nome}
              </div>
              <div>
                {ranking[12].frequencia} - {ranking[12].nome}
              </div>
              <div>
                {ranking[13].frequencia} - {ranking[13].nome}
              </div>
              <div>
                {ranking[14].frequencia} - {ranking[14].nome}
              </div>
              <div>
                {ranking[15].frequencia} - {ranking[15].nome}
              </div>
              <div>
                {ranking[16].frequencia} - {ranking[16].nome}
              </div>
              <div>
                {ranking[17].frequencia} - {ranking[17].nome}
              </div>
              <div>
                {ranking[18].frequencia} - {ranking[18].nome}
              </div>
              <div>
                {ranking[19].frequencia} - {ranking[19].nome}
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}
