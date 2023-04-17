import { LinerProgressImg, LinerProgressStyled, SplashContainer } from './styled';

export function Loading() {
    return (
        <SplashContainer>
            <LinerProgressImg src="assets/neutral-mark.svg" />
            <LinerProgressStyled />
        </SplashContainer>
    );
}
