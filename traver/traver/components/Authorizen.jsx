import { Box, TextField, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { api } from '../api';

export const Authorizen = ({ isSignUp }) => {
    const nameRef = useRef();
    const phoneRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState();
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        const nameVal = isSignUp ? nameRef.current.querySelector('#name').value : null;
        const phoneVal = phoneRef.current.querySelector('#phone').value;
        const passwordVal = passwordRef.current.querySelector('#password').value;
        const passwordConfirmVal = isSignUp ? passwordConfirmRef.current.querySelector('#passwordConfirm').value : null;

        if (phoneVal === '' || passwordVal === '') {
            return setError('All fields are required');
        }

        const data = isSignUp
            ? {
                first_name: nameVal,
                phone: phoneVal,
                password: passwordVal,
                confirm: passwordConfirmVal
            }
            : {
                phone: phoneVal,
                password: passwordVal
            }

        api(`http://un-info.herokuapp.com/user/${isSignUp ? 'register' : 'auth'}/`, 'post', data).then(
            (res) => {
                localStorage.setItem('token', res.token);
                if (isSignUp) return router.push('/sign-in');
                router.push('/profile');
            },
            (err) => setError(err)
        )
    };

    return (
        <Box
            component={'form'}
            noValidate
            onSubmit={handleSubmit}
            sx={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                maxWidth: '300px',
                margin: '0 auto',
                height: '100vh',
                justifyContent: 'center'
            }}
        >
            <Typography variant={'h2'}>
                {
                    isSignUp
                        ? 'Sign up'
                        : 'Sign in'
                }
            </Typography>
            {
                isSignUp &&
                <TextField
                    ref={nameRef}
                    id={'name'}
                    sx={{ margin: '10px 0' }}
                    label={'Name'}
                    type={'text'}
                    name="name"
                    variant={'outlined'}
                />
            }
            <TextField
                ref={phoneRef}
                id={'phone'}
                sx={{ margin: '10px 0' }}
                label={'Phone'}
                type={'tel'}
                name="phone"
                variant={'outlined'}
            />
            <TextField
                ref={passwordRef}
                id={'password'}
                sx={{ margin: '10px 0' }}
                label={'Password'}
                type={'password'}
                name="password"
                variant={'outlined'}
            />
            {
                isSignUp &&
                <TextField
                    ref={passwordConfirmRef}
                    id={'passwordConfirm'}
                    sx={{ margin: '10px 0' }}
                    label={'Password'}
                    type={'password'}
                    name="passwordConfrim"
                    variant={'outlined'}
                />
            }
            <Typography color={'red'} variant={'body1'}>{error}</Typography>
            <Button
                sx={{
                    margin: '20px 0 10px',
                    background: '#5A46D4'
                }}
                variant={'contained'}
                type={'submit'}
            >
                {
                    isSignUp
                        ? 'Sign up'
                        : 'Sign in'
                }
            </Button>
            <Button
                sx={{
                    color: '#5A46D4'
                }}
                variant={'text'}
                onClick={() => {
                    isSignUp
                        ? router.push('/sign-in')
                        : router.push('/sign-up')
                }}
            >
                {
                    isSignUp
                        ? 'Sign in'
                        : 'Sign up'
                }
            </Button>
        </Box>
    )
}