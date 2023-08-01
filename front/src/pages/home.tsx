import {Helmet} from 'react-helmet-async';
// sections
import {HomeView} from 'src/sections/home/view';
import {useEffect} from "react";
import {paths} from "../routes/paths";
import {useRouter} from "../routes/hooks";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// ----------------------------------------------------------------------

export default function HomePage() {
    const router = useRouter();
    useEffect(() => {
        router.push(paths.dashboard.swf2023.root)
    }, [])
    return (
        <>
            <Helmet>
                <title> HYPER BLOCK</title>
            </Helmet>

            <Container sx={{textAlign: 'center'}}>
                <Typography variant={"h2"}>SWF2023 프로토타입 프로젝트</Typography>
                <Typography variant={"h4"}>블록체인과 DID를 활용하여 디지털 약자 대상 피싱 범죄를 방지하는 DApp</Typography>
            </Container>
            {/*<HomeView />*/}
        </>
    );
}
