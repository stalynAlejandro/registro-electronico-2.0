import { Container, Theme, styled } from '@mui/system';
import { Button, Card, CardActions, CardContent } from '@mui/material';

export const CardContainer = styled(Card)(({ theme, type }: { theme?: Theme; type: string }) => ({
    width: '100%',
    maxWidth: 450,
    minHeight: 500,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 15,
    backgroundColor:
        type === 'clave'
            ? 'rgba(255, 204, 0, 0.469)'
            : type === 'valid'
            ? 'rgba(249, 123, 101, 0.1)'
            : type === 'giltza'
            ? 'rgba(0, 83, 127, 0.1)'
            : '#ededed',
    [theme!.breakpoints.down('sm')]: {
        minHeight: 0,
        width: '98%',
        height: 'fit-content',
    },
}));

export const TitleContainer = styled(Container)(({ theme }: { theme?: Theme }) => ({
    display: 'flex',
    textAlign: 'left',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    '& > svg': {
        width: 120,
        height: 120,
        padding: 0,
        margin: 0,
    },
    [theme!.breakpoints.down('sm')]: {
        '& > svg': {
            width: 70,
            height: 70,
        },
    },
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

export const AuthButton = styled(Button)(
    ({ theme, customcolor }: { theme?: Theme; customcolor: string }) => ({
        backgroundColor: customcolor,
        color: 'black',
        width: 'fit-content',
        height: 'fit-content',
        borderRadius: 15,
        fontSize: 18,
    })
);
