import { styled } from '@mui/system';
import { Button, Card, CardActions, CardContent } from '@mui/material';

interface IAuthCard {
    title: string;
}

const CardContainer = styled(Card)(({ theme }) => ({
    width: '100%',
    height: '100%',
    maxWidth: 500,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}));

const ActionsContainer = styled(CardActions)(({ theme }) => ({}));

export const AuthCard = ({ title }: IAuthCard) => {
    return (
        <CardContainer>
            <CardContent>
                <h1>{title}</h1>
            </CardContent>
            <ActionsContainer>
                <Button size="small">Learn More</Button>
            </ActionsContainer>
        </CardContainer>
    );
};
