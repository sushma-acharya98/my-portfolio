import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import Image from 'next/image'
import SushmaProfile from '@/Components/Images/Sushma.jpeg'
import './about.css'
const About: React.FC = () => {
	return (
		<React.Fragment>
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
				>
				<div className="about_me">
					<div className="MY-Info">
					<Typography variant="h1">SUSHMA ACHARYA</Typography>
					<Typography variant="h6">PASSIONATE WEB DEVELOPER FROM NEPAL</Typography>
					</div>
					<div className='Profile-pic'>
						<Image src={SushmaProfile} alt='Sushma Acharya' />
					</div>
				</div>
			</Grid>
		</React.Fragment>
	);
};

export default About;
