import { LinearProgress, styled } from '@mui/material';

const SplashContainer = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.3,
    width: '100%',
    height: '100%',
}));

const LinerProgressImg = styled('img')(({ theme }) => ({
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 150,
    height: 150,
}));

const LinerProgressStyled = styled(LinearProgress)(({ theme }) => ({
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 10,
    width: '12%',
    borderRadius: 10,
    backgroundColor: '#FFF',
    '& .MuiLinearProgress-barColorPrimary': {
        backgroundColor: '#626363',
    },
}));

export function Loading() {
    return (
        <SplashContainer>
            <LinerProgressImg src="assets/neutral-mark.svg" />
            <LinerProgressStyled />
        </SplashContainer>
    );
}
