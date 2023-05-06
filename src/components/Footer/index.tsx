import React from 'react';
import { styled } from '@mui/system';

export const FooterContainer = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: '1rem',
    textAlign: 'center',
    position: 'fixed',
    width: '100%',
    height: '6rem',
    bottom: 0,
    zIndex: 1,
}));

export function Footer() {
    return <FooterContainer></FooterContainer>;
}
