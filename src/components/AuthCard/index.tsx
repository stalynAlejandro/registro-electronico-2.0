import {
    CardLogo,
    CardTitle,
    AuthButton,
    InfoContainer,
    CardContainer,
    TitleContainer,
    ActionsContainer,
} from './styled';
import { ArrowForward } from '@mui/icons-material';

interface IAuthCard {
    title: string;
    info: string;
    infoUser: string;
}

export const AuthCard = ({ title, info, infoUser }: IAuthCard) => {
    return (
        <CardContainer>
            <TitleContainer>
                <CardTitle children={`${title}`} />
                <CardLogo src={'assets/vite.svg'} alt="vite-logo" />
            </TitleContainer>

            <InfoContainer>
                <p>{info}</p>
                <p>{infoUser}</p>
            </InfoContainer>

            <ActionsContainer>
                <AuthButton variant="contained" children={`${title}`} endIcon={<ArrowForward />} />
            </ActionsContainer>
        </CardContainer>
    );
};
