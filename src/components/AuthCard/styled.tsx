import { Container, styled } from '@mui/system';
import { Button, Card, CardActions, CardContent } from '@mui/material';

export const CardContainer = styled(Card)(({ theme }) => ({
    width: 280,
    height: 320,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    padding: 15,
}));

export const TitleContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0,
}));

export const CardTitle = styled('h1')(({ theme }) => ({
    margin: 0,
    padding: 0,
    fontSize: 26,
}));

export const CardLogo = styled('img')(({ theme }) => ({
    height: 50,
    width: 50,
    display: 'block',
    borderRadius: 15,
    alignSelf: 'center',
}));

export const InfoContainer = styled(Container)(({ theme }) => ({}));

export const ActionsContainer = styled(CardActions)(({ theme }) => ({}));

export const AuthButton = styled(Button)(({ theme }) => ({
    borderRadius: 15,
}));
