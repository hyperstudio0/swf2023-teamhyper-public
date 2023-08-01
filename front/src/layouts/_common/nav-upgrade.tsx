// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
// hooks
import { useMockedUser } from 'src/hooks/use-mocked-user';
// routes
import { paths } from 'src/routes/paths';
// locales
import { useLocales } from 'src/locales';
// components
import Label from 'src/components/label';

// ----------------------------------------------------------------------

export default function NavUpgrade() {
  const { user } = useMockedUser();

  const { t } = useLocales();

  return (
    <Stack
      sx={{
        px: 2,
        py: 5,
        textAlign: 'center',
      }}
    >
      <Stack alignItems="center">

        <Stack spacing={0.5} sx={{ mt: 1.5, mb: 2 }}>
          <Typography variant="subtitle2" noWrap>
              Copyright (c) 2023 HYPERBLOCK
          </Typography>
        </Stack>

        {/*  <Typography variant="body2" noWrap sx={{ color: 'text.disabled' }}>*/}
        {/*    {user?.email}*/}
        {/*  </Typography>*/}
        {/*</Stack>*/}

        {/*<Button variant="contained" href={paths.minimalUI} target="_blank" rel="noopener">*/}
        {/*  {t('upgrade_to_pro')}*/}
        {/*</Button>*/}
      </Stack>
    </Stack>
  );
}
