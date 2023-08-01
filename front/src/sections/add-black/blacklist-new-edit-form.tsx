import * as Yup from 'yup';
import {useEffect, useMemo} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
// routes
import {paths} from 'src/routes/paths';
// hooks
import {useResponsive} from 'src/hooks/use-responsive';
// _mock
// components
import {useSnackbar} from 'src/components/snackbar';
import {useRouter} from 'src/routes/hooks';
import FormProvider, {RHFEditor, RHFMultiCheckbox, RHFRadioGroup, RHFTextField,} from 'src/components/hook-form';
// types
import {IBlackList, ID_TYPES, REASON_TYPES} from "../../types/voice-fishing";
import {JOB_EXPERIENCE_OPTIONS, PRODUCT_GENDER_OPTIONS} from "../../_mock";
import Divider from "@mui/material/Divider";
import {Swagger} from "../../utils/API";

// ----------------------------------------------------------------------

type Props = {
    currentBlackList?: IBlackList;
};

export default function BlacklistNewEditForm({currentBlackList}: Props) {
    const router = useRouter();

    const mdUp = useResponsive('up', 'md');

    const {enqueueSnackbar} = useSnackbar();

    const NewBlackListSchema = Yup.object().shape({
        id: Yup.string().required('Name is required'),
        reason: Yup.number().required('Reason is required'),
        identityType: Yup.number().required('Identity Type is required'),
    });

    const defaultValues = useMemo(
        () => ({
            id: currentBlackList?.id || '',
            reason: currentBlackList?.reason || 0,
            identityType: currentBlackList?.identityType || 0,
        }),
        [currentBlackList]
    );

    const methods = useForm({
        resolver: yupResolver(NewBlackListSchema),
        defaultValues,
    });

    const {
        reset,
        watch,
        setValue,
        handleSubmit,
        formState: {isSubmitting},
    } = methods;

    const values = watch();

    useEffect(() => {
        if (currentBlackList) {
            reset(defaultValues);
        }
    }, [currentBlackList, defaultValues, reset]);

    useEffect(() => {
        // if (includeTaxes) {
        //     setValue('taxes', 0);
        // } else {
        //     setValue('taxes', currentBlackList?.taxes || 0);
        // }
    }, [setValue]);

    const onSubmit = handleSubmit(async (data) => {
        try {
            console.info('DATA', data);

            const response =
                await Swagger.api.scPostBlackList({
                    id: data.id,
                    reason: data.reason || 0,
                    identityType: data.identityType || 0
                })
            console.log(response.data, 'response');
            reset();
            enqueueSnackbar("블랙리스트 등록이 완료되었습니다.");
            router.push(paths.dashboard.swf2023.root);
        } catch (error) {
            console.error(error);
            enqueueSnackbar(error.message, { variant: "error" });
        }
    });


    const renderDetails = (
        <>
            {mdUp && (
                <Grid md={4}>
                    <Typography variant="h5" sx={{mb: 3}}>
                        블랙리스트 등록 (Blacklist Registration)
                    </Typography>
                    {/*<Typography variant="body1" sx={{color: 'text.secondary', mb: 2}}>*/}
                    {/*    Please enter details for the blacklist: <strong>phone numbers</strong> linked to voice*/}
                    {/*    phishing️, <strong>bank*/}
                    {/*    account numbers</strong> related to money mules, and <strong>unauthorized wallets</strong>*/}
                    {/*</Typography>*/}
                    <Typography variant="body1" sx={{color: 'text.secondary'}}>
                        보이스 피싱에 연관된 <strong>전화번호️</strong>, 대포통장의 <strong>계좌번호</strong>, 그리고 <strong>불법 전자
                        지갑</strong> 등에 대한 세부 정보를 블랙리스트에 등록해 주세요.
                    </Typography>
                </Grid>
            )}

            <Grid xs={12} md={8}>
                <Card>
                    {!mdUp && <CardHeader title="Details"/>}

                    <Stack spacing={3} sx={{p: 3}}>
                        <Stack spacing={1}>
                            <Typography variant="subtitle1">유형</Typography>
                            <RHFRadioGroup row spacing={4} name="experience" options={ID_TYPES}/>
                        </Stack>

                        <RHFTextField name="id" label="전화번호 or 계좌번호 or 지갑주소"/>

                        <Divider sx={{borderStyle: "dashed"}}/>
                        <Stack spacing={1}>
                            <Typography variant="subtitle1">사유</Typography>
                            <RHFRadioGroup row spacing={4} name="experience" options={REASON_TYPES}/>
                        </Stack>

                    </Stack>
                </Card>
            </Grid>
        </>
    );

    const renderActions = (
        <>
            {mdUp && <Grid md={4}/>}
            <Grid xs={12} md={8} sx={{display: 'flex', alignItems: 'center'}}>
                <LoadingButton type="submit" variant="contained" size="large" loading={isSubmitting}>
                    {!currentBlackList ? '블랙리스트 등록하기' : 'Save Changes'}
                </LoadingButton>
            </Grid>
        </>
    );

    return (
        <FormProvider methods={methods} onSubmit={onSubmit}>
            <Grid container spacing={3}>
                {renderDetails}


                {renderActions}
            </Grid>
        </FormProvider>
    );
}
