import {Helmet} from "react-helmet-async";
import {useCallback, useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
// @mui
import {Button, Card, Container, IconButton, Stack, Table, TableBody, TableContainer, Tooltip} from "@mui/material";
// routes
// utils
// _mock_
// @types
// components
import Iconify from "src/components/iconify";
import Scrollbar from "src/components/scrollbar";
import CustomBreadcrumbs from "src/components/custom-breadcrumbs";
import {useSettingsContext} from "src/components/settings";
// sections
import {SERVICE_NAME} from "src/config-global";
import {
    emptyRows,
    getComparator,
    TableEmptyRows,
    TableHeadCustom,
    TableNoData,
    TablePaginationActions,
    TablePaginationCustom,
    TableSelectedAction,
    TableSkeletonAll,
    useTable
} from "src/components/sprintify/table";
import {BoardCategoryDTO, TxHashDTO} from "src/generated/swagger/swagger.api";
import {Swagger} from "src/utils/API";
import TableSelectedDeleteDiagram from "src/components/sprintify/table/TableSelectedDeleteDiagram";
import {useSnackbar} from "src/components/snackbar";
import {transformSortJSON} from "src/components/sprintify/table/useTable";
import {DrawerWrapper} from "src/components/sprintify/drawer";
import TableRowDeleteDiagram from "src/components/sprintify/table/TableRowDeleteDiagram";
import {paths, ROOT_PAGE_NAME} from "../../../routes/paths";
import {fTimestamp} from "../../../utils/format-time";
import BoardTableFiltersResult from "../../../sections/board/board-table-filters-result";
import {TxHashEdit, TxHashNew, TxHashTableRow, TxHashTableToolbar, TxHashView} from "../../../sections/tx-hash";
import {useRouter} from "../../../routes/hooks";

// ----------------------------------------------------------------------
export type IBoardFilters = {
    query: string;
    categories: BoardCategoryDTO[];
    status: string;
    startDate: Date | null;
    endDate: Date | null;
};

export type IBoardFilterValue = string | BoardCategoryDTO[] | Date | null;

const defaultFilters: IBoardFilters = {
    query: "",
    categories: [],
    status: "all",
    startDate: null,
    endDate: null,
};

// id 가 있으면 Sort 동작
const TABLE_HEAD = [
    {id: "id", label: "ID", align: "left"},
    {id: "type", label: "유형", align: "center"},
    {id: "hash", label: "해시", align: "left", width: 320},
    {id: "mode", label: "모드", align: "center"},
    {id: "createdTime", label: "등록시간", align: "center"},
    {id: ""},
];

// ----------------------------------------------------------------------

const PAGE_NAME = "보이스피싱 Black & White Transaction List";
export default function Swf2023ListPage() {
    const router = useRouter();
    const {
        themeStretch,
        systemLanguage,
        systemMultilingual,
        systemDefaultLanguage,
    } = useSettingsContext();
    const {enqueueSnackbar} = useSnackbar();
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const paramPage = searchParams.get("page")
        ? Number(searchParams.get("page"))
        : 0;
    const paramSize = searchParams.get("size")
        ? Number(searchParams.get("size"))
        : 7;
    const paramQuery = searchParams.get("query") || "";
    const paramStartDate = searchParams.get("startTime") || "";
    const paramEndDate = searchParams.get("endTime") || "";

    const [listDataLoading, setListDataLoading] = useState<boolean>(false);
    const [detailDataLoading, setDetailDataLoading] = useState<boolean>(false);
    const [detailData, setDetailData] = useState<TxHashDTO>();

    const [selectedId, setSelectedId] = useState<number | undefined>();
    const [openNew, setOpenNew] = useState<boolean>(false);
    const [openView, setOpenView] = useState<boolean>(false);
    const [openEdit, setOpenEdit] = useState<boolean>(false);

    const [openRowDeleteDiagram, setOpenRowDeleteDiagram] = useState(false);

    const table = useTable({
        defaultOrderBy: "id",
        defaultOrder: "desc",
        defaultRowsPerPage: paramSize,
        defaultCurrentPage: paramPage,
    });

    const [tableData, setTableData] = useState<TxHashDTO[]>([]);
    const [filters, setFilters] = useState(defaultFilters); // 필터 객체
    const [openSelectedDeleteDiagram, setOpenSelectedDeleteDiagram] =
        useState(false);
    const denseHeight = table.dense ? 56 : 76;

    const dateError =
        filters.startDate && filters.endDate
            ? filters.startDate.getTime() > filters.endDate.getTime()
            : false;

    const dataFiltered = applyFilter({
        inputData: tableData,
        comparator: getComparator(table.order, table.orderBy),
        filters,
        dateError,
    });

    const canReset =
        !!filters.query ||
        !!filters.categories.length ||
        filters.status !== "all" ||
        !!filters.startDate ||
        !!filters.endDate;

    const notFound = (!dataFiltered.length && canReset) || !dataFiltered.length;

    const loadData = async () => {
        setListDataLoading(true);
        setTableData([]);
        let query = undefined;
        if (filters.query && filters.query.length > 1) {
            query = filters.query;
        }
        const {data} = await Swagger.api.txHashPage({
            size: table.rowsPerPage,
            page: table.page + 1,
            query: query,
            startTime:
                filters.startDate && !isNaN(filters.startDate.getTime())
                    ? filters.startDate.toISOString()
                    : undefined,
            endTime:
                filters.endDate && !isNaN(filters.endDate.getTime())
                    ? filters.endDate.toISOString()
                    : undefined,
            orderBy:
                table.orderBy &&
                transformSortJSON(
                    JSON.stringify({
                        [table.orderBy]: table.order,
                    }),
                ),
        });
        setTableData(data.items);
        table.setPageMetadata(data.metadata);
        setListDataLoading(false);
    };
    const loadDetailData = async (id: number) => {
        setDetailDataLoading(true);
        const {data} = await Swagger.api.txHashGet(id);
        setDetailData(data);
        console.log(data, "board");
        setDetailDataLoading(false);
    };

    // 페이지 초기화
    const handleFilters = useCallback(
        (name: string, value: IBoardFilterValue) => {
            table.setPage(0); // reset
            setFilters((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        },
        [table],
    );

    const handleResetFilters = useCallback(() => {
        setFilters(defaultFilters);
        if (filters.query) searchParams.set("query", "");
        if (filters.startDate && !isNaN(filters.startDate.getTime())) {
            searchParams.set("startTime", "");
        }
        if (filters.endDate && !isNaN(filters.endDate.getTime())) {
            searchParams.set("endTime", "");
        }
        navigate(`?${searchParams.toString()}`);
    }, []);

    const handleReset = async () => {
        // setPage(0);
        // handleResetFilter();
        loadData();
    };

    // 선택 데이터 삭제

    const handleCloseDrawer = () => {
        setOpenNew(false);
        setOpenView(false);
        setOpenEdit(false);
        setSelectedId(undefined);
    };

    const handleOpenNew = () => {
        setOpenNew(true);
        setOpenView(false);
        setOpenEdit(false);
        setSelectedId(undefined);
    };

    const handleOpenEdit = (id: number | undefined) => {
        setOpenNew(false);
        setOpenView(false);
        setOpenEdit(true);
        setSelectedId(id);
    };

    const handleOpenView = (id: number | undefined) => {
        setOpenNew(false);
        setOpenView(true);
        setOpenEdit(false);
        setSelectedId(id);
    };

    // const handleFilterName = (value: string) => {
    //   setPage(0);
    //   setFilterName(value);
    // };

    const handleDeleteRows = async (selectedRows: number[]) => {
        try {
            const {data} = await Swagger.api.boardDeleteByIds(selectedRows);
            table.setSelected([]);
            enqueueSnackbar(data.message, {variant: "success"});
        } catch (e) {
            console.error(e);
            enqueueSnackbar(e.message, {variant: "error"});
        }
        handleReset();
        setOpenSelectedDeleteDiagram(false);
    };

    const handleDeleteRow = async (id: number | undefined) => {
        if (id) {
            try {
                const {data} = await Swagger.api.boardDelete(id);
                enqueueSnackbar(data.message, {variant: "success"});
                handleCloseDrawer();
                handleReset();
            } catch (e) {
                console.error(e);
                enqueueSnackbar(e.message, {variant: "error"});
            }
        }
    };

    useEffect(() => {
        // 다국어 설정
        console.log(systemLanguage, "systemLanguage");
        console.log(systemMultilingual, "systemMultilingual");
        console.log(systemDefaultLanguage, "systemDefaultLanguage");
        loadData();
        // searchParams.set("page", String(page));
        // searchParams.set("size", String(rowsPerPage));
        // if (filterName) searchParams.set("query", String(filterName));
        // if (filterStartDate) searchParams.set("startTime", String(filterStartDate));
        // if (filterEndDate) searchParams.set("endTime", String(filterEndDate));

        searchParams.set("page", String(table.page));
        searchParams.set("size", String(table.rowsPerPage));
        if (filters.query) searchParams.set("query", String(filters.query));
        if (filters.startDate && !isNaN(filters.startDate.getTime())) {
            searchParams.set("startTime", filters.startDate.toISOString());
        }
        if (filters.endDate && !isNaN(filters.endDate.getTime())) {
            searchParams.set("endTime", filters.endDate.toISOString());
        }
        navigate(`?${searchParams.toString()}`);
    }, [
        table.rowsPerPage,
        table.page,
        table.orderBy,
        table.order,
        filters.query,
        filters.startDate,
        filters.endDate,
    ]);

    useEffect(() => {
        console.log(paramQuery, "paramQuery");
        console.log(paramStartDate, "paramStartDate");
        console.log(paramEndDate, "paramEndDate");
        if (paramQuery) {
            handleFilters("query", paramQuery);
        }
        if (paramStartDate) {
            try {
                const startDate: Date = new Date(decodeURIComponent(paramStartDate));
                if (!isNaN(startDate.getTime())) {
                    handleFilters("startDate", startDate);
                }
            } catch (e) {
            }
        }
        if (paramEndDate) {
            try {
                const endDate: Date = new Date(decodeURIComponent(paramEndDate));
                if (!isNaN(endDate.getTime())) {
                    handleFilters("endDate", endDate);
                }
            } catch (e) {
            }
        }
    }, [paramQuery, paramStartDate, paramEndDate]);

    // useEffect(() => {
    //   console.log(dense, "dense");
    //   console.log(page, "page");
    //   console.log(order, "order");
    //   console.log(orderBy, "orderBy");
    //   console.log(rowsPerPage, "rowsPerPage");
    //   console.log(setPage, "setPage");
    //   console.log(metadata, "metadata");
    //   console.log(selected, "selected");
    // }, []);

    useEffect(() => {
        console.log(selectedId, "selectedId");
        if (selectedId) {
            loadDetailData(selectedId);
        } else {
            setDetailData(undefined);
        }
    }, [selectedId]);

    return (
        <>
            <Helmet>
                <title>
                    {PAGE_NAME} | {SERVICE_NAME}
                </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                {/*<Typography>*/}
                {/*  {selectedId}*/}
                {/*</Typography>*/}
                <CustomBreadcrumbs
                    heading={PAGE_NAME}
                    links={[
                        {
                            name: ROOT_PAGE_NAME,
                            href: paths.dashboard.root,
                        },
                        {
                            name: PAGE_NAME,
                        },
                    ]}
                    action={
                        <Stack spacing={1} direction={"row"}>
                            <Button
                                onClick={() => {
                                    router.push(paths.dashboard.swf2023.addWhite);
                                }}
                                variant="contained"
                                startIcon={<Iconify icon="eva:plus-fill"/>}
                            >
                                화이트리스트 등록
                            </Button>
                            <Button
                                onClick={() => {
                                    router.push(paths.dashboard.swf2023.addBlack);
                                }}
                                variant="contained"
                                startIcon={<Iconify icon="eva:plus-fill"/>}
                            >
                                블랙리스트 등록
                            </Button>
                        </Stack>
                    }
                />

                <Card
                    sx={{
                        mt: {xs: 3, md: 5},
                        mb: {xs: 3, md: 5},
                    }}
                >
                    <TxHashTableToolbar
                        filters={filters}
                        onFilters={handleFilters}
                        //
                        dateError={dateError}
                    />

                    {canReset && (
                        <BoardTableFiltersResult
                            filters={filters}
                            onFilters={handleFilters}
                            //
                            onResetFilters={handleResetFilters}
                            //
                            results={table.metadata.total}
                            sx={{p: 2.5, pt: 0}}
                        />
                    )}

                    <TableContainer sx={{position: "relative", overflow: "unset"}}>
                        <TableSelectedAction
                            dense={table.dense}
                            numSelected={table.selected.length}
                            rowCount={tableData.length}
                            onSelectAllRows={(checked) =>
                                table.onSelectAllRows(
                                    checked,
                                    tableData.map((row) => row.id),
                                )
                            }
                            action={
                                <Stack direction="row">
                                    <Tooltip title="복제하기">
                                        <IconButton
                                            color="primary"
                                            onClick={() => enqueueSnackbar("복제")}
                                        >
                                            <Iconify icon="tabler:copy"/>
                                        </IconButton>
                                    </Tooltip>

                                    {/*<Tooltip title="Download">*/}
                                    {/*  <IconButton color="primary">*/}
                                    {/*    <Iconify icon="eva:download-outline" />*/}
                                    {/*  </IconButton>*/}
                                    {/*</Tooltip>*/}

                                    {/*<Tooltip title="Print">*/}
                                    {/*  <IconButton color="primary">*/}
                                    {/*    <Iconify icon="eva:printer-fill" />*/}
                                    {/*  </IconButton>*/}
                                    {/*</Tooltip>*/}

                                    <Tooltip title="삭제하기">
                                        <IconButton
                                            color="primary"
                                            onClick={() => setOpenSelectedDeleteDiagram(true)}
                                        >
                                            <Iconify icon="eva:trash-2-outline"/>
                                        </IconButton>
                                    </Tooltip>
                                </Stack>
                            }
                        />

                        <Scrollbar>
                            <Table
                                size={table.dense ? "small" : "medium"}
                                sx={{minWidth: 800}}
                            >
                                <TableHeadCustom
                                    order={table.order}
                                    orderBy={table.orderBy}
                                    headLabel={TABLE_HEAD}
                                    rowCount={tableData.length}
                                    numSelected={table.selected.length}
                                    onSort={table.onSort}
                                    onSelectAllRows={(checked) =>
                                        table.onSelectAllRows(
                                            checked,
                                            tableData.map((row) => row.id),
                                        )
                                    }
                                />

                                <TableBody>
                                    {!listDataLoading &&
                                        dataFiltered.map((item, index) => (
                                            <TxHashTableRow
                                                key={item.id}
                                                row={item}
                                                selected={table.selected.includes(item.id)}
                                                onSelectRow={() => table.onSelectRow(item.id)}
                                                onViewRow={() => handleOpenView(item.id)}
                                                onEditRow={() => handleOpenEdit(item.id)}
                                                onRefreshData={() => handleReset()}
                                            />
                                        ))}
                                    {!listDataLoading && table.metadata.total > 0 && (
                                        <TableEmptyRows
                                            height={denseHeight}
                                            emptyRows={emptyRows(
                                                table.page,
                                                table.rowsPerPage,
                                                table.metadata.total,
                                            )}
                                        />
                                    )}
                                    {!listDataLoading && <TableNoData notFound={notFound}/>}
                                    {listDataLoading &&
                                        (dataFiltered === undefined ||
                                            dataFiltered.length === 0) && (
                                            <TableSkeletonAll
                                                size={table.metadata.size}
                                                denseHeight={denseHeight}
                                            />
                                        )}
                                </TableBody>
                            </Table>
                        </Scrollbar>
                    </TableContainer>

                    <TablePaginationCustom
                        count={table.metadata.total}
                        colSpan={3}
                        page={table.metadata.currentPage - 1}
                        rowsPerPage={table.metadata.size}
                        onPageChange={table.onChangePage}
                        onRowsPerPageChange={table.onChangeRowsPerPage}
                        SelectProps={{
                            inputProps: {
                                "aria-label": "rows per page",
                            },
                            native: true,
                        }}
                        //
                        dense={table.dense}
                        onChangeDense={table.onChangeDense}
                        ActionsComponent={TablePaginationActions}
                    />
                </Card>
            </Container>

            <TableSelectedDeleteDiagram
                open={openSelectedDeleteDiagram}
                onClose={() => setOpenSelectedDeleteDiagram(false)}
                onDeleteSelected={() => {
                    handleDeleteRows(table.selected);
                }}
                selected={table.selected}
            />

            {/* === Drawer === */}
            <DrawerWrapper
                title={"새글 작성"}
                open={openNew}
                onClose={handleCloseDrawer}
                children={<TxHashNew/>}
            />

            <DrawerWrapper
                title={"상세 보기"}
                open={openView}
                onClose={handleCloseDrawer}
                onEdit={() => handleOpenEdit(selectedId)}
                onDelete={() => {
                    setOpenRowDeleteDiagram(true);
                }}
                children={detailData && <TxHashView txHash={detailData}/>}
            />

            <DrawerWrapper
                title={"수정 하기"}
                open={openEdit}
                onClose={handleCloseDrawer}
                onView={() => handleOpenView(selectedId)}
                onDelete={() => {
                    setOpenRowDeleteDiagram(true);
                }}
                children={detailData && <TxHashEdit txHash={detailData}/>}
            />

            {/* === Delete === */}
            {selectedId && (
                <TableRowDeleteDiagram
                    open={openRowDeleteDiagram}
                    dataId={selectedId}
                    onClose={() => setOpenRowDeleteDiagram(false)}
                    onDeleteRow={() => handleDeleteRow(selectedId)}
                />
            )}
        </>
    );
}

// ----------------------------------------------------------------------

// function applyFilter({
//                        inputData,
//                        comparator,
//                      }: {
//   inputData: BoardDTO[];
//   comparator: (a: any, b: any) => number;
// }) {
//   const stabilizedThis = inputData.map((el, index) => [el, index] as const);
//
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//
//   inputData = stabilizedThis.map((el) => el[0]);
//   return inputData;
// }

function applyFilter({
                         inputData,
                         comparator,
                         filters,
                         dateError,
                     }: {
    inputData: TxHashDTO[];
    comparator: (a: any, b: any) => number;
    filters: IBoardFilters;
    dateError: boolean;
}) {
    const {query, status, categories, startDate, endDate} = filters;

    const stabilizedThis = inputData.map((el, index) => [el, index] as const);

    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });

    inputData = stabilizedThis.map((el) => el[0]);

    if (query) {
    }

    if (status !== "all") {
    }

    if (categories.length) {
    }

    if (!dateError) {
        if (startDate && endDate) {
            inputData = inputData.filter(
                (data) =>
                    fTimestamp(data.createdTime) >= fTimestamp(startDate) &&
                    fTimestamp(data.createdTime) <= fTimestamp(endDate),
            );
        }
    }

    return inputData;
}
