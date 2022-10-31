import { Fragment, FunctionComponent } from "react";
import Typography from "@mui/material/Typography";

interface IInfoDisplayProps {
  title: string;
  info: string;
}

const InfoDisplay: FunctionComponent<IInfoDisplayProps> = ({ title, info }) => {
  return (
    <Fragment>
      <Typography sx={{ textTransform: "uppercase", fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography>{info}</Typography>
    </Fragment>
  );
};

export default InfoDisplay;
