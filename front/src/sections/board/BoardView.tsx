// @mui
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles/createTheme";
import { Box } from "@mui/material";
import { BoardCategoryDTO, BoardDTO } from "../../generated/swagger/swagger.api";

// ----------------------------------------------------------------------

interface Props {
  board: BoardDTO;
  sx?: SxProps<Theme>;
  categories: BoardCategoryDTO[];
}

export default function BoardView({ board, categories, sx, ...other }: Props) {
  return (
    <Box>
      BoardView
    </Box>
  );
}
