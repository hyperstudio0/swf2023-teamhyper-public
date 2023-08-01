// @mui
import {Button, InputAdornment, Stack, TextField} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers";
// components
import {useCallback, useEffect, useState} from "react";
import Iconify from "../../components/iconify";
import MenuItem from "@mui/material/MenuItem";
import {IBoardFilters, IBoardFilterValue,} from "../../pages/dashboard/board/list";
import CustomPopover, {usePopover} from "src/components/custom-popover";
import {useSnackbar} from "src/components/snackbar";
// ----------------------------------------------------------------------

const INPUT_WIDTH = 160;
const DATE_FORMAT = "yyyy-MM-dd";

type Props = {
  filters: IBoardFilters;
  onFilters: (name: string, value: IBoardFilterValue) => void;
  //
  dateError: boolean;
};

export default function TxHashTableToolbar({
  filters,
  onFilters,
  //
  dateError,
}: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const popover = usePopover();
  const [searchText, setSearchText] = useState("");
  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchText(event.target.value);
  };

  const handleFilterQuery = useCallback(
    (query: string) => {
      onFilters("query", query);
    },
    [onFilters],
  );

  // const handleFilterCategory = useCallback(
  //   (event: SelectChangeEvent<BoardCategoryDTO[]>) => {
  //     onFilters(
  //       "categories",
  //       []
  //       // typeof event.target.value === "string"
  //       //   ? event.target.value.split(",").map((value) => {
  //       //       try {
  //       //         return Number(value);
  //       //       } catch (e) {
  //       //         console.error(e);
  //       //       }
  //       //       return 0;
  //       //     })
  //       //   : event.target.value,
  //     );
  //   },
  //   [onFilters],
  // );

  const handleFilterStartDate = useCallback(
    (newValue: Date | null) => {
      onFilters("startDate", newValue);
    },
    [onFilters],
  );

  const handleFilterEndDate = useCallback(
    (newValue: Date | null) => {
      onFilters("endDate", newValue);
    },
    [onFilters],
  );

  const handleSearch = () => {
    if (!searchText || searchText.length < 2) {
      enqueueSnackbar("2글자 이상 작성해주세요.", {
        variant: "warning",
      });
      return;
    }
    handleFilterQuery(searchText);
  };

  useEffect(() => {
    setSearchText(filters.query);
  }, [filters.query]);

  return (
    <>
      <Stack
        spacing={2}
        alignItems={{ xs: "flex-end", md: "center" }}
        direction={{
          xs: "column",
          md: "row",
        }}
        sx={{
          p: 2.5,
          pr: { xs: 2.5, md: 1 },
        }}
      >

        <DatePicker
          label="시작일"
          value={filters.startDate}
          onChange={handleFilterStartDate}
          slotProps={{ textField: { fullWidth: true } }}
          format={DATE_FORMAT}
          sx={{
            maxWidth: { md: INPUT_WIDTH },
          }}
        />

        <DatePicker
          label="종료일"
          value={filters.endDate}
          onChange={handleFilterEndDate}
          format={DATE_FORMAT}
          slotProps={{
            textField: {
              fullWidth: true,
              error: dateError,
            },
          }}
          sx={{
            maxWidth: { md: INPUT_WIDTH },
          }}
        />

        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          flexGrow={1}
          sx={{ width: 1 }}
        >
          <TextField
            fullWidth
            value={searchText}
            onChange={handleSearchTextChange}
            placeholder="검색어를 입력하세요."
            onKeyDown={(ev) => {
              if (ev.key === "Enter") {
                handleSearch();
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify
                    icon="eva:search-fill"
                    sx={{ color: "text.disabled" }}
                  />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="start">
                  <Button
                    size="small"
                    onClick={handleSearch}
                    color="inherit"
                    variant="contained"
                  >
                    검색
                  </Button>
                </InputAdornment>
              ),
            }}
          />

          {/*<IconButton onClick={popover.onOpen}>*/}
          {/*  <Iconify icon="eva:more-vertical-fill" />*/}
          {/*</IconButton>*/}
        </Stack>
      </Stack>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 140 }}
      >
        {/*<MenuItem*/}
        {/*  onClick={() => {*/}
        {/*    popover.onClose();*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Iconify icon="solar:printer-minimalistic-bold" />*/}
        {/*  Print*/}
        {/*</MenuItem>*/}

        {/*<MenuItem*/}
        {/*  onClick={() => {*/}
        {/*    popover.onClose();*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Iconify icon="solar:import-bold" />*/}
        {/*  Import*/}
        {/*</MenuItem>*/}

        <MenuItem
          onClick={() => {
            popover.onClose();
          }}
        >
          <Iconify icon="solar:export-bold" />
          Export
        </MenuItem>
      </CustomPopover>
    </>
  );
}
