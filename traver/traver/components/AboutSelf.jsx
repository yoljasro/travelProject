import { Box } from "@mui/system";
import Image from 'next/image';
import Typography from "@mui/material/Typography";

export const AboutSelf = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                minHeight: 'calc(100vh - 64px)',
                background: '#5A55D5'
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    margin: '0 auto',
                    maxWidth: 1200,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Box>
                    <Typography variant="h2" color={'HighlightText'}>Logo - title title</Typography>
                    <Typography variant="body" color={'HighlightText'}>lorefdsafjdsafjlkdskf;adsfdsafdasfdsafdsaf</Typography>
                </Box>
                <Image
                    alt="aboutself"
                    width={600}
                    height={600}
                    src={'/img/aboutself.png'}
                />
            </Box>
        </Box>
    )
}