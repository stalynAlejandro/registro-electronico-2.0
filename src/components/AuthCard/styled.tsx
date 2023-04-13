import { Container, styled } from '@mui/system';
import { Button, Card, CardActions, CardContent } from '@mui/material';

export const CardContainer = styled(Card)(({ type }: { type: string }) => ({
    width: 350,
    height: 450,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    padding: 15,
    backgroundColor:
        type === 'clave'
            ? '#ffea00'
            : type === 'digital-certificate'
            ? '#f4f3f3'
            : type === 'valid'
            ? '#FFEBEE'
            : '#efefef',
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
    height: 40,
    width: 40,
    display: 'block',
    borderRadius: 15,
    alignSelf: 'center',
}));

export const InfoContainer = styled(CardContent)(({ theme }) => ({}));

export const ActionsContainer = styled(CardActions)(({ theme }) => ({}));

export const AuthButton = styled(Button)(({ theme }) => ({
    color: 'primary',
    borderRadius: 15,
}));
