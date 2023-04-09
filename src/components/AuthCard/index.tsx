import { Box, styled } from '@mui/system';

interface IAuthCard {
    title: string;
}

const CardContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export const AuthCard = ({ title }: IAuthCard) => {
    return (
        <CardContainer>
            <h1>{title}</h1>
        </CardContainer>
    );
};
