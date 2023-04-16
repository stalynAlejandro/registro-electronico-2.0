import { LinearProgress, styled } from '@mui/material';

const SplashContainer = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.3,
    width: '100%',
    height: '100%',
}));

const LinerProgressStyled = styled('img')(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 150,
    height: 150,
}));

export function Loading() {
    return (
        <SplashContainer>
            <LinerProgressStyled src="assets/neutral-mark.svg" />
        </SplashContainer>
    );
}
