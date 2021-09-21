import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Container, Title, Grid } from '@UI'
import * as styles from './partners.module.scss'
import { Quantumstamp, Solidified, Fracton, Integral } from '@images/logos'

const Partners = () => {
	const data = [
		{
			url: 'https://quantstamp.com/',
			logo: <Quantumstamp />,
		},
		{
			url: 'https://solidified.io/',
			logo: <Solidified />,
		},
		{
			url: 'https://fracton.ventures/',
			logo: <Fracton />,
		},
		{
			url: 'https://www.integral.im/',
			logo: <Integral />,
		},
	]
	return (
		<Container wrapper section isSection>
			<Title sm weightMd className={styles.title}>
				Partnered with:
			</Title>
			<Grid>
				{data.map(({ logo, url }, i) => (
					<Fade key={i} triggerOnce fraction={0.4}>
						{url ? (
							<a href={url} className={styles.logoContainer}>
								{logo}
							</a>
						) : (
							<span className={styles.logoContainer}>{logo}</span>
						)}
					</Fade>
				))}
			</Grid>
		</Container>
	)
}

export default Partners
