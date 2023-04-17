import { Container, styled } from '@mui/system';
import { Button, Card, CardActions, CardContent } from '@mui/material';

export const CardContainer = styled(Card)(({ theme, type }: { theme?: any; type: string }) => ({
    width: 480,
    height: 580,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 15,
    backgroundColor:
        type === 'clave'
            ? 'rgba(255, 204, 0, 0.784)'
            : type === 'valid'
            ? '#f97b65'
            : type === 'giltza'
            ? '#00537f'
            : '#ededed',
    [theme.breakpoints.down('sm')]: {
        height: 'fit-content',
        width: '100%',
    },
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

export const MethodsContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 10,
    '& > svg': {
        marginRight: 10,
    },
}));

export const ActionsContainer = styled(CardActions)(({ theme }) => ({}));

export const AuthButton = styled(Button)(({ customcolor }: { customcolor: string }) => ({
    backgroundColor: customcolor,
    width: 'fit-content',
    height: 'fit-content',
    borderRadius: 15,
    fontSize: 18,
}));
