import { LinearProgress, styled } from '@mui/material';

const SplashContainer = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.7,
    width: '100%',
    height: '100%',
}));

const LinerProgressStyled = styled(LinearProgress)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '20%',
    transform: 'translate(-50%, -50%)',
    height: 10,
    borderRadius: 10,
}));

export function Loading() {
    return (
        <SplashContainer>
            <LinerProgressStyled />
        </SplashContainer>
    );
}
