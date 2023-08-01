import * as Yup from "yup";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import { LoadingButton } from "@mui/lab";
import { Stack, Typography } from "@mui/material";
import { useSnackbar } from 'src/components/snackbar';
// routes
// @types
// components
import { BoardCategoryDTO, ReqBoard } from "../../generated/swagger/swagger.api";
import { Swagger } from "../../utils/API";
import { CustomFile } from "../../components/upload";
import { paths } from "../../routes/paths";
import FormProvider, { RHFEditor, RHFMultiCheckbox, RHFTextField } from "../../components/hook-form";

export const FILTER_CATEGORIES = [
  { label: "A", value: 1 },
  { label: "B", value: 2 },
  { label: "C", value: 3 },
];

// ----------------------------------------------------------------------

const GENDER_OPTION = [
  { label: "Men", value: "Men" },
  { label: "Women", value: "Women" },
  { label: "Kids", value: "Kids" },
];

const CATEGORY_OPTION = [
  { group: "Clothing", classify: ["Shirts", "T-shirts", "Jeans", "Leather"] },
  {
    group: "Tailored",
    classify: ["Suits", "Blazers", "Trousers", "Waistcoats"],
  },
  {
    group: "Accessories",
    classify: ["Shoes", "Backpacks and bags", "Bracelets", "Face masks"],
  },
];

const TAGS_OPTION = [
  "Toy Story 3",
  "Logan",
  "Full Metal Jacket",
  "Dangal",
  "The Sting",
  "2001: A Space Odyssey",
  "Singin' in the Rain",
  "Toy Story",
  "Bicycle Thieves",
  "The Kid",
  "Inglourious Basterds",
  "Snatch",
  "3 Idiots",
];

// ----------------------------------------------------------------------

type Props = {
  isEdit?: boolean;
  currentData?: ReqBoard;
};

export default function TxHashNewEditForm({ isEdit, currentData }: Props) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const NewProductSchema = Yup.object({
    title: Yup.object().shape({
      ko: Yup.string().required("제목(한국어)는 필수 입력사항입니다.").max(100),
      en: Yup.string().max(100),
      zhCn: Yup.string().max(100),
      zhTw: Yup.string().max(100),
      ja: Yup.string().max(100),
    }),
    content: Yup.object().shape({
      ko: Yup.string().required("내용(한국어)는 필수 입력사항입니다.").max(100),
      en: Yup.string().max(100),
      zhCn: Yup.string().max(100),
      zhTw: Yup.string().max(100),
      ja: Yup.string().max(100),
    }),
    categoryIds: Yup.array().of(Yup.number()),
  });

  const defaultValues = useMemo(
    () => ({
      title: {
        ko: currentData?.title.ko || "",
        en: currentData?.title.en || "",
        zhCn: currentData?.title.zhCn || "",
        zhTw: currentData?.title.zhTw || "",
        ja: currentData?.title.ja || "",
      },
      content: {
        ko: currentData?.content.ko || "",
        en: currentData?.content.en || "",
        zhCn: currentData?.content.zhCn || "",
        zhTw: currentData?.content.zhTw || "",
        ja: currentData?.content.ja || "",
      },
      categoryIds: currentData?.categoryIds || [],
    }),
    [currentData]
  );

  const methods = useForm({
    resolver: yupResolver(NewProductSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (isEdit && currentData) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentData]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log(data, 'data');
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      enqueueSnackbar(!isEdit ? "Create success!" : "Update success!");
      navigate(paths.dashboard.board.list);
      console.log("DATA", data);
    } catch (error) {
      console.error(error);
    }
  });


  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={3}>
        <RHFTextField name="name" label="Product Name" />

        <Stack spacing={1}>
          <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
            Description
          </Typography>

          <RHFEditor simple name="description" />
        </Stack>

      </Stack>
      <Stack sx={{ mt: 5 }}>
        <LoadingButton
          type="submit"
          variant="contained"
          size="large"
          loading={isSubmitting}
        >
          {!isEdit ? "등록하기" : "수정하기"}
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
