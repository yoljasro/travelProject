import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { BsInstagram, BsFacebook, BsTelegram } from 'react-icons/bs';
import styled from '@emotion/styled';
import Link from 'next/link';

const BtnStyle = styled.button`
    color: white;
    cursor: pointer;
    font-size: 30px;
    width: 40px;
    height: 40px;
    border: none;
    background: transparent;
`

export const Footer = () => {
    return (
        <Box
            sx={{
                flexGrow: 1,
            }}
        >
            <AppBar
                position="static"
                sx={{
                    height: 100,
                    background: '#5A46D4'
                }}
            >
                <Toolbar
                    sx={{
                        width: '100%',
                        maxWidth: 1200,
                        margin: '0 auto',
                        height: 'inherit',
                        alignItems: 'center'
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: 200,
                            display: 'flex',
                            justifyContent: 'space-around',
                            marginLeft: 'auto'
                        }}
                    >
                        <Link href={'https://www.instagram.com'}>
                            <a target={'_blank'}>
                                <BtnStyle><BsInstagram /></BtnStyle>
                            </a>
                        </Link>
                        <Link href={'https://www.facebook.com'}>
                            <a target={'_blank'}>
                                <BtnStyle><BsFacebook /></BtnStyle>
                            </a>
                        </Link>
                        <Link href={'https://telegram.org'}>
                            <a target={'_blank'}>
                                <BtnStyle><BsTelegram /></BtnStyle>
                            </a>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
};