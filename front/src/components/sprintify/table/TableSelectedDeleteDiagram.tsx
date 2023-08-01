// @mui
import { Button, StackProps } from "@mui/material";
import { ConfirmDialog } from "../../custom-dialog";

// ----------------------------------------------------------------------

interface Props extends StackProps {
  open: boolean;
  onClose: VoidFunction;
  selected: number[];
  onDeleteSelected: VoidFunction;
}

export default function TableSelectedDeleteDiagram({
  open,
  onClose,
  selected,
  onDeleteSelected,
  sx,
  ...other
}: Props) {
  return (
    <ConfirmDialog
      open={open}
      onClose={onClose}
      title="삭제"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `<h3>${selected.length} 개 데이터를 선택하였습니다.<br/>정말 선택하신 데이터를 삭제하시겠습니까?</h3>삭제 후, 복구가 불가합니다.`,
          }}
        ></div>
      }
      action={
        <Button variant="contained" color="error" onClick={onDeleteSelected}>
          네, 삭제합니다.
        </Button>
      }
    />
  );
}
