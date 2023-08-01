// @mui
import { TableRowProps } from "@mui/material";
import { TableSkeleton } from "./index";

// ----------------------------------------------------------------------
interface Props extends TableRowProps {
  size: number;
  denseHeight: number;
}

export default function TableSkeletonAll({
  size,
  denseHeight,
  ...other
}: Props) {
  return (
    <>
      {Array.from({ length: size }, (_, i) => i + 1).map((index) => {
        return <TableSkeleton key={index} sx={{ height: denseHeight }} />;
      })}
    </>
  );
}
