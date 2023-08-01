// @mui
import Container from '@mui/material/Container';
// routes
import {paths, ROOT_PAGE_NAME} from 'src/routes/paths';
// components
import {useSettingsContext} from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import WhitelistDeleteForm from './whitelist-delete-form';
import {SERVICE_NAME} from "../../config-global";
import {Helmet} from "react-helmet-async";

// ----------------------------------------------------------------------
const PAGE_NAME = "Delete White-List";
export default function WhitelistDeleteView() {
    const settings = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>
                    {PAGE_NAME} | {SERVICE_NAME}
                </title>
            </Helmet>
            <Container maxWidth={settings.themeStretch ? false : 'lg'}>
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
                    sx={{
                        mb: {xs: 3, md: 5},
                    }}
                />

                <WhitelistDeleteForm/>
            </Container>
        </>
    );
}
