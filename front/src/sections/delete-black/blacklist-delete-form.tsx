import * as Yup from 'yup';
import {useEffect, useMemo} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
// routes
import {paths} from 'src/routes/paths';
// hooks
import {useResponsive} from 'src/hooks/use-responsive';
// _mock
// components
import {useSnackbar} from 'src/components/snackbar';
import {useRouter} from 'src/routes/hooks';
import FormProvider, {RHFTextField,} from 'src/components/hook-form';
// types
import {IBlackList} from "../../types/voice-fishing";
import {Swagger} from "../../utils/API";

// ----------------------------------------------------------------------

type Props = {
    currentBlackList?: IBlackList;
};

export default function BlacklistDeleteForm({currentBlackList}: Props) {
    const router = useRouter();

    const mdUp = useResponsive('up', 'md');

    const {enqueueSnackbar} = useSnackbar();

    const NewWhiteListSchema = Yup.object().shape({
        id: Yup.string().required('ID is required'),
    });

    const defaultValues = useMemo(
        () => ({
            id: currentBlackList?.id || '',
        }),
        [currentBlackList]
    );

    const methods = useForm({
        resolver: yupResolver(NewWhiteListSchema),
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
                await Swagger.api.scDeleteBlackList(data.id)
            console.log(response.data, 'response');
            reset();
            enqueueSnackbar("블랙리스트를 삭제하였습니다.");
            router.push(paths.dashboard.swf2023.root);
        } catch (error) {
            console.error(error);
            enqueueSnackbar(error.message, {variant: "error"});
        }
    });


    const renderDetails = (
        <>
            {mdUp && (
                <Grid md={4}>
                    <Typography variant="h5" sx={{mb: 3}}>
                        블랙리스트 삭제 (Delete Whitelist)
                    </Typography>
                    {/*<Typography variant="body1" sx={{color: 'text.secondary', mb: 2}}>*/}
                    {/*    Please register your verified <strong>Decentralized ID (DID)</strong> on the whitelist.*/}
                    {/*</Typography>*/}
                    <Typography variant="body1" sx={{color: 'text.secondary'}}>
                        <strong>탈중앙화ID(DID)</strong> 를 블랙리스트에서 삭제합니다.
                    </Typography>
                </Grid>
            )}

            <Grid xs={12} md={8}>
                <Card>
                    {!mdUp && <CardHeader title="Details"/>}

                    <Stack spacing={3} sx={{p: 3}}>


                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            등록했던 <strong>계정</strong> 을 입력해주세요.
                        </Typography>

                        <RHFTextField name="id" label="전화번호 or 통장계좌 or 전자지갑주소"/>

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
                    {!currentBlackList ? '블랙리스트 삭제하기' : 'Save Changes'}
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
