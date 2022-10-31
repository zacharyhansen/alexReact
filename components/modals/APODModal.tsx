import { FunctionComponent, Fragment } from "react";
import { Fab, Button, Grid, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BaseModal from "./BaseModal";
import Date from "../Date";
import { useState } from "react";
import moment from "moment";

interface IAPODModalProps {
  date: moment.Moment;
  onDateChange: (moment?: moment.Moment | null | undefined) => void;
  onRandomize: VoidFunction;
}

const APODModal: FunctionComponent<IAPODModalProps> = ({
  onDateChange,
  date,
  onRandomize,
}) => {
  const [modalDate, setModalDate] = useState<moment.Moment>(date);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    onDateChange(modalDate);
    setOpen(false);
  };

  const handleSetDate = (moment?: moment.Moment | null) => {
    moment && setModalDate(moment);
  };

  const handleRandomize = () => {
    setOpen(false);
    onRandomize();
  };

  return (
    <Fragment>
      <Fab onClick={handleClick}>
        <SearchIcon />
      </Fab>
      <BaseModal
        open={open}
        body={
          <Grid container>
            <Grid item xs={5}>
              <Date
                label="Select a date"
                moment={modalDate}
                onChange={handleSetDate}
              />
            </Grid>
            <Grid item xs={2}>
              <Divider orientation="vertical" flexItem>
                or
              </Divider>
            </Grid>
            <Grid
              item
              xs={5}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button onClick={handleRandomize} variant="outlined">
                Randomize
              </Button>
            </Grid>
          </Grid>
        }
        onClose={handleClose}
      />
    </Fragment>
  );
};

export default APODModal;
