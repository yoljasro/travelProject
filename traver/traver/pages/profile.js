import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Box, Button, CardActions, Modal, TextField } from "@mui/material";
import { api } from "../api";
import axios from "axios";

const Profile = () => {
    const router = useRouter();
    const cardNumRef = useRef();
    const payedSumRef = useRef();
    const nameRef = useRef();
    const surnameRef = useRef();
    const pasportSeriesRef = useRef();
    const phoneRef = useRef();
    const [user, setUser] = useState(null);
    const [cards, setCards] = useState(null);
    const [showModalCard, setShowModalCard] = useState(false);
    const [showModalPasport, setShowModalPasport] = useState(false);
    const [error, setError] = useState({ userError: '', cardError: '', });

    useEffect(() => {
        api('http://un-info.herokuapp.com/user/me/', '', {}, {
            headers: {
                "Authorization": 'Token ' + localStorage.getItem('token')
            }
        }).then(
            (res) => setUser(res.user),
            (err) => setError(state => ({ ...state, userError: err }))
        );
    }, [])

    useEffect(() => {
        api('http://un-info.herokuapp.com/api/credit-card/').then(
            (res) => setCards(res),
            (err) => setError(state => ({ ...state, cardError: err }))
        )
    }, [])

    const handlePayed = (e) => {
        e.preventDefault();

        const card_number = cardNumRef.current.querySelector('#cardNum').value;
        const payed_sum = +payedSumRef.current.querySelector('#payedSum').value;

        const data = {
            card_number,
            payed_sum
        }

        api('http://un-info.herokuapp.com/api/payed-user/', 'post', data, {
            headers: {
                "Authorization": 'Token ' + localStorage.getItem('token')
            }
        }).then(
            (res) => {
                setShowModalCard(false);
                alert('Admin considers your data Do not close the page');
                const pasportInterval = setInterval(() => {
                    axios.get("").then(() => {
                        clearInterval(pasportInterval)
                        setShowModalPasport(true)
                    })
                }, 10000)
            },
            (err) => console.log(err)
        )
    }

    const handlePasport = (e) => {
        e.preventDefault();

        const first_name = nameRef.current.querySelector('#name').value;
        const last_name = surnameRef.current.querySelector('#surname').value;
        const phone = phoneRef.current.querySelector('#phone').value;
        const pasport_info = pasportSeriesRef.current.querySelector('#pasportSeries').value;

        const data = {
            first_name,
            phone,
            last_name,
            pasport_info
        }

        api('http://un-info.herokuapp.com/api/user_info/', 'post', data, {
            headers: {
                "Authorization": 'Token ' + localStorage.getItem('token')
            }
        }).then(
            (res) => {
                setShowModalPasport(false)
                alert('Data confiremed')
            },
            (err) => console.log(err)
        )
    }

    return (
        <>
            <Header />
            <Box
                sx={{
                    width: '100%',
                    margin: '30px auto',
                    maxWidth: '1200px',
                    minHeight: 'calc(100vh - 224px)'
                }}
            >
                <Box>
                    <Typography variant="h4">{
                        "User name: " + (user
                            ? user.first_name
                            : error.userError)
                    }</Typography>
                    <Typography variant="h5">{
                        "User phone: " + (user
                            ? user.phone
                            : error.userError)
                    }</Typography>
                </Box>
                <Box
                    sx={{
                        marginTop: '30px'
                    }}
                >
                    {
                        cards && cards.length > 0
                            ? cards.map((card) => (
                                <Card key={card.id} sx={{ maxWidth: 345 }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {card.card_name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {card.card_number}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant="contained" onClick={() => setShowModal(true)}>Paid</Button>
                                    </CardActions>
                                </Card>
                            ))
                            : <Typography variant="body2" sx={{ color: 'red' }}>{error.cardError}</Typography>
                    }
                </Box>
            </Box>
            <Footer />
            <Modal
                open={showModalCard}
            >
                <Box
                    component={'form'}
                    noValidate
                    sx={{
                        height: 400,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}
                    onSubmit={handlePayed}
                >
                    <TextField type={'text'} label={'Cart number'} id={'cardNum'} ref={cardNumRef} />
                    <TextField type={'text'} label={'Sum'} id={'payedSum'} ref={payedSumRef} />
                    <Button type={'submit'} variant={'contained'}>Send</Button>
                </Box>
            </Modal>
            <Modal
                open={showModalPasport}
            >
                <Box
                    component={'form'}
                    noValidate
                    sx={{
                        height: 400,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}
                    onSubmit={handlePasport}
                >
                    <TextField type={'text'} label={'Name'} id={'name'} ref={nameRef} />
                    <TextField type={'text'} label={'Surname'} id={'surname'} ref={surnameRef} />
                    <TextField type={'text'} label={'Phone'} id={'phone'} ref={phoneRef} />
                    <TextField type={'text'} label={'Pasport Series'} id={'pasportSeries'} ref={pasportSeriesRef} />
                    <Button type={'submit'} variant={'contained'}>Send</Button>
                </Box>
            </Modal>
        </>
    )
};

export default Profile;