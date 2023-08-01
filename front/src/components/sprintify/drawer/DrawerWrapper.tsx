// @mui
import { Drawer, DrawerProps, Stack } from "@mui/material";
// utils
// @types
// components
import Scrollbar from "../../../components/scrollbar";
import { DrawerHeader } from "../../../components/sprintify/drawer";
import { useEffect, useState } from "react";


// ----------------------------------------------------------------------

interface Props extends DrawerProps {
  title: string;
  children: React.ReactNode;

  onClose: VoidFunction;
  onView?: VoidFunction | undefined;
  onEdit?: VoidFunction | undefined;
  onDelete?: VoidFunction | undefined;
}

export default function DrawerWrapper({
                                        open,
                                        onClose,

                                        title,
                                        children,

                                        onView,
                                        onEdit,
                                        onDelete,

                                        ...other
                                      }: Props) {
  const [fullscreen, setFullscreen] = useState<boolean>(false);

  useEffect(() => {}, []);

  return (
    <>
      <Drawer
        open={open}
        onClose={onClose}
        anchor="right"
        // BackdropProps={{
        //   invisible: true,
        // }}
        PaperProps={{
          sx: {
            width: {
              xs: "100%",
              sm: fullscreen ? "100%" : "65%",
              md: fullscreen ? "100%" : "50%",
            },
          },
        }}
        {...other}
      >
        <DrawerHeader
          title={title}
          onClose={onClose}
          onDelete={onDelete}
          onView={onView}
          onEdit={onEdit}
          fullscreen={fullscreen}
          onToggleFullscreen={() => setFullscreen(!fullscreen)}
        />

        <Scrollbar sx={{ height: 1 }}>
          <Stack spacing={2.5} justifyContent="center" sx={{ p: 2.5 }}>
            {children}
          </Stack>
        </Scrollbar>

        {/*<Box sx={{ p: 2.5 }}>*/}
        {/*  <Button*/}
        {/*    fullWidth*/}
        {/*    variant="soft"*/}
        {/*    color="error"*/}
        {/*    size="large"*/}
        {/*    startIcon={<Iconify icon="eva:trash-2-outline" />}*/}
        {/*    onClick={onDelete}*/}
        {/*  >*/}
        {/*    Action*/}
        {/*  </Button>*/}
        {/*</Box>*/}
      </Drawer>
    </>
  );
}

// ----------------------------------------------------------------------
