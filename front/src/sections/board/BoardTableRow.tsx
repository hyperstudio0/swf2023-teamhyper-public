import { useState } from "react";
// @mui
import { Checkbox, Divider, IconButton, MenuItem, TableCell, TableRow, Typography } from "@mui/material";
// utils

// @types
// components
import Label from "src/components/label";
import Iconify from "src/components/iconify";
import { BoardDTO } from "src/generated/swagger/swagger.api";
import TableRowDeleteDiagram from "src/components/sprintify/table/TableRowDeleteDiagram";
import { Swagger } from "src/utils/API";
import { useSnackbar } from "src/components/snackbar";
import LocalizedText from "src/components/sprintify/localized";
import CategoryNameText from "src/components/sprintify/localized/CategoryNameText";
import { useSettingsContext } from "src/components/settings";
import { fDateTime } from "../../utils/format-time";
import CustomPopover from "../../components/custom-popover";

// ----------------------------------------------------------------------

type Props = {
  row: BoardDTO;
  selected: boolean;
  onSelectRow: VoidFunction;
  onViewRow: VoidFunction;
  onEditRow: VoidFunction;
  onRefreshData: VoidFunction;
};

export default function BoardTableRow({
  row,
  selected,
  onSelectRow,
  onViewRow,
  onEditRow,
  onRefreshData,
}: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const {
    id,
    title,
    categories,
    pageView,
    top,
    createdTime,
  } = row;
  const [openRowDeleteDiagram, setOpenRowDeleteDiagram] = useState(false);

  const [openPopover, setOpenPopover] = useState<HTMLElement | null>(null);

  const handleOpenConfirm = () => {
    setOpenRowDeleteDiagram(true);
  };

  const handleOpenPopover = (event: React.MouseEvent<HTMLElement>) => {
    setOpenPopover(event.currentTarget);
  };

  const handleDelete = async (id: number) => {
    try {
      const { data } = await Swagger.api.boardDelete(id);
      enqueueSnackbar(data.message, { variant: "success" });
    } catch (e) {
      console.error(e);
      enqueueSnackbar(e.message, { variant: "error" });
    }
    setOpenRowDeleteDiagram(false);
    onRefreshData();
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  return (
    <>
      <TableRow hover selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell>{id}</TableCell>

        <TableCell>
          <Typography
            variant="body2"
            sx={{ cursor: "pointer" }}
            onClick={() => {
              onViewRow();
              handleClosePopover();
            }}
          >
            <LocalizedText value={title}/>
          </Typography>
        </TableCell>

        <TableCell align="center">
          <CategoryNameText array={categories as any} />
        </TableCell>

        <TableCell align="center">
          {top ? (
            <Label variant="soft" color={"info"}>
              {"상단고정"}
            </Label>
          ) : (
            <></>
          )}
        </TableCell>

        <TableCell align="center">{pageView}</TableCell>

        <TableCell align="center">{fDateTime(createdTime)}</TableCell>

        <TableCell align="right">
          <IconButton
            color={openPopover ? "inherit" : "default"}
            onClick={handleOpenPopover}
          >
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <CustomPopover
        open={openPopover}
        onClose={handleClosePopover}
        arrow="right-top"
        sx={{ width: 160 }}
      >
        <MenuItem
          onClick={() => {
            onViewRow();
            handleClosePopover();
          }}
        >
          <Iconify icon="eva:eye-fill" />
          상세
        </MenuItem>

        <MenuItem
          onClick={() => {
            onEditRow();
            handleClosePopover();
          }}
        >
          <Iconify icon="eva:edit-fill" />
          수정
        </MenuItem>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem
          onClick={() => {
            handleOpenConfirm();
            handleClosePopover();
          }}
          sx={{ color: "error.main" }}
        >
          <Iconify icon="eva:trash-2-outline" />
          삭제
        </MenuItem>
      </CustomPopover>

      <TableRowDeleteDiagram
        open={openRowDeleteDiagram}
        dataId={id}
        onClose={() => setOpenRowDeleteDiagram(false)}
        onDeleteRow={() => handleDelete(id)}
      />
    </>
  );
}
