import {
    CardLogo,
    CardTitle,
    AuthButton,
    InfoContainer,
    CardContainer,
    TitleContainer,
    ActionsContainer,
} from './styled';
import MyIcon from './vite.svg';

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
                <CardLogo src={MyIcon} alt="vite-logo" />
            </TitleContainer>

            <InfoContainer>
                <p>{info}</p>
                <p>{infoUser}</p>
            </InfoContainer>

            <ActionsContainer>
                <AuthButton variant="contained" children={`${title} ->`} />
            </ActionsContainer>
        </CardContainer>
    );
};
