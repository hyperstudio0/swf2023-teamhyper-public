// @mui
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles/createTheme";
import { Box, Container } from "@mui/material";
import BoardNewEditForm from "./BoardNewEditForm";
import { useResponsive } from "../../hooks/use-responsive";
import { BoardCategoryDTO } from "../../generated/swagger/swagger.api";

// ----------------------------------------------------------------------

interface Props {
  sx?: SxProps<Theme>;
  categories: BoardCategoryDTO[];
}

export default function BoardNew({ sx, categories, ...other }: Props) {
  const isDesktop = useResponsive("up", "md");
  return (
    <Container maxWidth={isDesktop ? "lg" : false} sx={{ mt: 3, mb: 5 }}>
      <BoardNewEditForm categories={categories}/>
    </Container>
  );
}
