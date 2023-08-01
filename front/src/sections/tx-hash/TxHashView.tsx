// @mui
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles/createTheme";
import { Box } from "@mui/material";
import {BoardCategoryDTO, BoardDTO, TxHashDTO} from "../../generated/swagger/swagger.api";

// ----------------------------------------------------------------------

interface Props {
  txHash: TxHashDTO;
  sx?: SxProps<Theme>;
}

export default function TxHashView({ txHash, sx, ...other }: Props) {
  return (
    <Box>
      BoardView
    </Box>
  );
}
