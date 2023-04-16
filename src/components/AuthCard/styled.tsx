import { Container, styled } from '@mui/system';
import { Button, Card, CardActions, CardContent } from '@mui/material';

export const CardContainer = styled(Card)(({ color }: { color: string }) => ({
    width: 480,
    height: 530,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 15,
    backgroundColor: color,
}));

export const TitleContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    justifyContent: 'space-between',
}));

export const CardTitle = styled('h1')(({ theme }) => ({
    margin: 0,
    padding: 0,
    width: '100%',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'left',
}));

export const InfoContainer = styled(CardContent)(({ theme }) => ({
    width: '100%',
    height: '100%',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
}));

export const ActionsContainer = styled(CardActions)(({ theme }) => ({}));

export const AuthButton = styled(Button)(({ theme }) => ({
    color: 'primary',
    width: 'fit-content',
    height: 'fit-content',
    borderRadius: 15,
    fontSize: 18,
}));
