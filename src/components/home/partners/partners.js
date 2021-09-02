import React from 'react'
import classnames from 'classnames'
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
		<Container wrapper section>
			<Title sm weightMd className={styles.title}>
				Partnered with:
			</Title>
			<Grid>
				{data.map(({ logo, url }, i) => {
					return url ? (
						<a href={url} key={i} className={styles.logoContainer}>
							{logo}
						</a>
					) : (
						<span key={i} className={styles.logoContainer}>
							{logo}
						</span>
					)
				})}
			</Grid>
		</Container>
	)
}

export default Partners
