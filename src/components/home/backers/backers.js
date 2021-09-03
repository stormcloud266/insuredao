import React from 'react'
import { Container, Title, Grid } from '@UI'
import * as styles from './backers.module.scss'
import {
	ArkStreamCapital,
	Cc,
	C2g,
	ExnetworkCapital,
	FacultyCapital,
	LdCapital,
	GenBlockCapital,
	Osaz,
	HelloCapital,
	Ngc,
	HoneyDao,
} from '@images/logos'

const Backers = () => {
	const data = [
		{
			url: 'https://arkstream.capital/',
			logo: <ArkStreamCapital />,
		},
		{
			url: '',
			logo: <Cc />,
		},
		{
			url: 'https://www.cryp2gem.com/',
			logo: <C2g />,
		},
		{
			url: 'https://exnetworkcapital.com/',
			logo: <ExnetworkCapital />,
		},
		{
			url: 'https://www.facultycapital.com/',
			logo: <FacultyCapital />,
		},
		{
			url: 'https://ldcap.com/',
			logo: <LdCapital />,
		},
		{
			url: 'https://genblock.capital/',
			logo: <GenBlockCapital />,
		},
		{
			url: 'https://www.osaz.xyz/',
			logo: <Osaz />,
		},
		{
			url: 'https://www.hellocapital.fund/',
			logo: <HelloCapital />,
		},
		{
			url: 'https://ngc.fund/',
			logo: <Ngc />,
		},
		{
			url: 'https://www.honeydao.com/',
			logo: <HoneyDao />,
		},
	]
	return (
		<Container wrapper sectionTop>
			<Title sm weightMd className={styles.title}>
				Backed by:
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

export default Backers
