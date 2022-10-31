import { FunctionComponent } from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import moment, { MomentInput } from "moment";
import { useState } from "react";
import TextField from "@mui/material/TextField";

interface IDateProps {
  moment?: moment.Moment;
  onChange: (moment?: moment.Moment | null) => void;
  label?: string;
}

const Date: FunctionComponent<IDateProps> = ({ moment, onChange, label }) => {
  return (
    <DesktopDatePicker
      label={label}
      inputFormat="YYYY-MM-DD"
      value={moment?.format("YYYY-MM-DD")}
      onChange={onChange}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};

export default Date;
