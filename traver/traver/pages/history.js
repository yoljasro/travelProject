import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const HistoryPayed = () => {
    const [payeds, setPayeds] = useState();

    useEffect(() => {
        api('http://un-info.herokuapp.com/api/payed-user/', '', {}, {
            headers: {
                "Authorization": 'Token ' + localStorage.getItem('token')
            }
        }).then(
            (res) => //setPayeds(res.user),
            (err) => setError(state => ({ ...state, userError: err }))
        );
    }, [])

    return (
        <>
            <Header />
            <Box>
                {
                    payeds && payeds.map((payed) => (
                      <Card key={payed.id}>
                        <CardContent>
                            
                        </CardContent>
                      </Card>  
                    ))
                }
            </Box>
            <Footer />
        </>
    )
}

export default HistoryPayed;