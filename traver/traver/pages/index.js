import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AboutSelf } from '../components/AboutSelf';

export default function Home() {
	return (
		<>
			<Header />
			<AboutSelf />
			<Box sx={{
				display: 'flex',
				justifyContent: 'space-between',
				maxWidth: '1200px',
				width: '100%',
				margin: '30px auto'
			}}>
				<Card sx={{
					minHeight: 400,
					maxWidth: 345,
					borderRadius: '20px',
					boxShadow: '0px 0px 10px 0 #eee'
				}}>
					<CardMedia
						component="img"
						height="400"
						image="/img/demo.jpg"
						alt="green iguana"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Lizard
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Lizards are a widespread group of squamate reptiles, with over 6,000
							species, ranging across all continents except Antarctica
						</Typography>
					</CardContent>
				</Card>
				<Card sx={{
					minHeight: 200,
					maxWidth: 345,
					borderRadius: '20px',
					boxShadow: '0px 0px 10px 0 #eee'
				}}>
					<CardMedia
						component="img"
						height="400"
						image="/img/demo.jpg"
						alt="green iguana"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Lizard
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Lizards are a widespread group of squamate reptiles, with over 6,000
							species, ranging across all continents except Antarctica
						</Typography>
					</CardContent>
				</Card>
				<Card sx={{
					minHeight: 200,
					maxWidth: 345,
					borderRadius: '20px',
					boxShadow: '0px 0px 10px 0 #eee'
				}}>
					<CardMedia
						component="img"
						height="400"
						image="/img/demo.jpg"
						alt="green iguana"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Lizard
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Lizards are a widespread group of squamate reptiles, with over 6,000
							species, ranging across all continents except Antarctica
						</Typography>
					</CardContent>
				</Card>
			</Box>
			<Footer />
		</>
	)
}
