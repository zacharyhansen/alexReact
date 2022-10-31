import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Date from "./Date";
import { Fab } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const APODModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <Fab onClick={handleClick} variant="extended">
        <SearchIcon />
      </Fab>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute" as "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 800,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <Date />
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </React.Fragment>
  );
};

export default APODModal;
