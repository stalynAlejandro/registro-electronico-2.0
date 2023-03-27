import { RootState } from '../../redux';
import { useSelector } from 'react-redux';
import { Button, Box, Container } from '@mui/material';

export function Home() {
    const config = useSelector((state: RootState) => state.config);
    console.log({ config });
    return (
        <Container maxWidth="md">
            <Box sx={{ height: '100px', border: '10px solid lightblue' }}>
                <Button>Save</Button>
            </Box>
        </Container>
    );
}
