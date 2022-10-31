import { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

interface ILoadingProps {}

const Loading: FunctionComponent<ILoadingProps> = ({}) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
