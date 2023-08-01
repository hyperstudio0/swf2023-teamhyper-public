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
import {IWhiteList} from "../../types/voice-fishing";
import {Swagger} from "../../utils/API";

// ----------------------------------------------------------------------

type Props = {
    currentWhiteList?: IWhiteList;
};

export default function WhitelistDeleteForm({currentWhiteList}: Props) {
    const router = useRouter();

    const mdUp = useResponsive('up', 'md');

    const {enqueueSnackbar} = useSnackbar();

    const NewWhiteListSchema = Yup.object().shape({
        did: Yup.string().required('DID is required'),
    });

    const defaultValues = useMemo(
        () => ({
            did: currentWhiteList?.did || '',
        }),
        [currentWhiteList]
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
        if (currentWhiteList) {
            reset(defaultValues);
        }
    }, [currentWhiteList, defaultValues, reset]);

    useEffect(() => {
        // if (includeTaxes) {
        //     setValue('taxes', 0);
        // } else {
        //     setValue('taxes', currentWhiteList?.taxes || 0);
        // }
    }, [setValue]);

    const onSubmit = handleSubmit(async (data) => {
        try {
            console.info('DATA', data);

            const response =
                await Swagger.api.scDeleteWhiteList(data.did)
            console.log(response.data, 'response');
            reset();
            enqueueSnackbar("화이트리스트를 삭제하였습니다.");
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
                        화이트리스트 삭제 (Delete Whitelist)
                    </Typography>
                    {/*<Typography variant="body1" sx={{color: 'text.secondary', mb: 2}}>*/}
                    {/*    Please register your verified <strong>Decentralized ID (DID)</strong> on the whitelist.*/}
                    {/*</Typography>*/}
                    <Typography variant="body1" sx={{color: 'text.secondary'}}>
                        <strong>탈중앙화ID(DID)</strong> 를 화이트리스트에서 삭제합니다.
                    </Typography>
                </Grid>
            )}

            <Grid xs={12} md={8}>
                <Card>
                    {!mdUp && <CardHeader title="Details"/>}

                    <Stack spacing={3} sx={{p: 3}}>


                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            등록했던 <strong>탈중앙화ID(DID)</strong> 를 입력해주세요.
                        </Typography>

                        <RHFTextField name="did" label="탈중앙화 ID (DID)"/>

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
                    {!currentWhiteList ? '화이트리스트 삭제하기' : 'Save Changes'}
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
