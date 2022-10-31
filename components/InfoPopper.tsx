import { Fab, Fade } from "@mui/material";
import { FunctionComponent, Fragment, useState } from "react";
import Popper, { PopperPlacementType } from "@mui/material/Popper";
import Paper from "@mui/material/Paper";
import InfoIcon from "@mui/icons-material/Info";

interface IInfoPopperProps {
  children: any;
}

const InfoPopper: FunctionComponent<IInfoPopperProps> = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [placement, setPlacement] = useState<PopperPlacementType>();

  const handleClick =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };

  return (
    <Fragment>
      <Fab onClick={handleClick("bottom-end")} aria-label="info">
        <InfoIcon />
      </Fab>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Paper sx={{ p: 2 }}>{children}</Paper>
            </Paper>
          </Fade>
        )}
      </Popper>
    </Fragment>
  );
};

export default InfoPopper;
