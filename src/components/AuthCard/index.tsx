import MyIcon from './vite.svg';
import {
    CardTitle,
    AuthButton,
    InfoContainer,
    CardContainer,
    TitleContainer,
    ActionsContainer,
} from './styled';

interface IAuthCard {
    title: string;
    info: string;
}

export const AuthCard = ({ title, info }: IAuthCard) => {
    return (
        <CardContainer>
            <TitleContainer>
                <CardTitle children={`${title}`} />
                <img src={MyIcon} alt="vite-logo" />
            </TitleContainer>

            <InfoContainer>
                <p>{info}</p>
            </InfoContainer>

            <ActionsContainer>
                <AuthButton variant="contained" color="primary" children={`${title} ->`} />
            </ActionsContainer>
        </CardContainer>
    );
};
