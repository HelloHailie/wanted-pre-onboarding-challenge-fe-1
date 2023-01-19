import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { ILoadingBar } from "../types/model";

const LoadingBar = ({ isLoading }: ILoadingBar) => {
  return (
    <div>
      {isLoading && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}
    </div>
  );
};

export default LoadingBar;
