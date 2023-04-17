import {
    CardTitle,
    AuthButton,
    InfoContainer,
    CardContainer,
    TitleContainer,
    ActionsContainer,
    MethodsContainer,
} from './styled';
import { ArrowForward } from '@mui/icons-material';

interface IAuthCard {
    type?: string;
    category?: string;
    title?: string;
    description?: string;
    help?: string;
    methods?: any[];
    path?: string;
    color?: string;
    Logo?: any;
}

export const AuthCard = ({
    type = '',
    category,
    title,
    description,
    help,
    methods,
    path,
    color = 'primary',
    Logo,
}: IAuthCard) => {
    return (
        <CardContainer type={type}>
            <TitleContainer>
                <CardTitle children={`${title}`} />
                <Logo />
            </TitleContainer>

            <InfoContainer>
                <span>{description}</span>
                <span>{help}</span>
                {methods &&
                    methods.map(({ label, Icon }, index) => (
                        <MethodsContainer key={index}>
                            <Icon width={30} height={30} />
                            {label}
                        </MethodsContainer>
                    ))}
            </InfoContainer>

            <ActionsContainer>
                <AuthButton
                    customcolor={color}
                    variant="contained"
                    children={`${title}`}
                    endIcon={<ArrowForward />}
                />
            </ActionsContainer>
        </CardContainer>
    );
};
