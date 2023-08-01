// @mui
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles/createTheme";
import { Box } from "@mui/material";
import { BoardCategoryDTO, BoardDTO } from "../../generated/swagger/swagger.api";


// ----------------------------------------------------------------------

interface Props {
  board: BoardDTO;
  categories: BoardCategoryDTO[];
  sx?: SxProps<Theme>;
}

export default function BoardEdit({ board, categories, sx, ...other }: Props) {
  return (
    <Box>

    </Box>
  );
}
