import { RootState } from '../../redux';
import { useSelector } from 'react-redux';
import { Container, styled } from '@mui/material';

const Div = styled('div')(({ theme }) => ({
    height: '100vh',
    width: 'auto',
    backgroundColor: theme.palette.secondary.main,
}));

export function Home() {
    const config = useSelector((state: RootState) => state.config);
    return (
        <Container fixed maxWidth={'lg'}>
            <Div />
        </Container>
    );
}
