import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

export const Header = () => {
    const [isToken, setIsToken] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (localStorage && localStorage.getItem('token')) {
            setIsToken(true);
        }
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ background: '#5A46D4' }}>
                <Toolbar
                    sx={{
                        width: '100%',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '0 !important',
                        justifyContent: 'space-between'
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: 300,
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Button color="inherit" onClick={() => router.push('/')}>Home</Button>
                        {
                            isToken && <>
                                <Button color="inherit" onClick={() => router.push('/profile')}>Profile</Button>
                                <Button color="inherit" onClick={() => {
                                    localStorage.removeItem('token');
                                    setIsToken(false);
                                    router.push('/');
                                }}>Go out</Button>
                            </>
                        }
                    </Box>
                    <Box 
                        sx={{
                            width: '100%',
                            maxWidth: 250,
                            display: 'flex',
                            justifyContent: 'space-around'
                        }}
                    >
                        <Button variant='contained' color={'info'} onClick={() => router.push('/sign-up')}>Sign Up</Button>
                        <Button color="inherit" onClick={() => router.push('/sign-in')}>Sign in</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
};