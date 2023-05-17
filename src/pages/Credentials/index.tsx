import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Fade } from '@mui/material';

export function Credentials() {
    return (
        <Fade in timeout={1000}>
            <div>
                <Header />
                <Footer />
            </div>
        </Fade>
    );
}
