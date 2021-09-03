import React from 'react'
import { Container, Title, Button } from '@UI'
import * as styles from './hero.module.scss'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = () => {
	return (
		<div className={styles.container}>
			<div className={styles.background}>
				<StaticImage
					src='../../../assets/images/InsureDAO_hero.png'
					alt=''
					layout='fullWidth'
					quality={100}
					objectFit='cover'
					objectPosition='center bottom'
					style={{ position: 'static' }}
					placeholder='blurred'
				/>
			</div>

			<Container wrapper>
				<Title black center margin tag='h1'>
					The Open Insurance Protocol
				</Title>
				<p className={styles.subtitle}>
					Allowing anyone to create an insurance market for their DeFi protocol
					& ensure it’s security...
				</p>
				<div className={styles.buttonContainer}>
					<Button href='https://example.com'>Launch App</Button>
					<Button href='https://insuredao.gitbook.io/insuredao/' white>
						Explore Docs
					</Button>
				</div>
			</Container>
		</div>
	)
}

export default Hero
