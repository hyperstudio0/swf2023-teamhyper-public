// @mui
//
import { LocalizedDTO } from "../../../generated/swagger/swagger.api";
import { Box, SxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

type Props = {
  array: [{ id: number; name: string | LocalizedDTO;  }];
  sx?: SxProps<Theme>;
};

export default function CategoryNameText({ array, sx }: Props) {
  return (
    <Box sx={sx}>
      {array && array.map((category) => {
        return typeof category.name === "string" ? category.name : category.name.ko;
      }).join(", ")}
    </Box>
  );
}
