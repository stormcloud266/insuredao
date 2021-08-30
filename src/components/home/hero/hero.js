import React from 'react'
import { Container, Title, Button } from '@UI'
import * as styles from './hero.module.scss'

const Hero = () => {
	return (
		<section className={styles.container}>
			<Container wrapper>
				<Title black center>
					The Open Insurance Protocol
				</Title>
				<p className={styles.subtitle}>
					Allowing anyone to create an insurance market for their DeFi protocol
					& ensure it’s security...
				</p>
				<div className={styles.buttonContainer}>
					<Button href='https://example.com'>Launch App</Button>
					<Button href='https://example.com' white>
						Explore Docs
					</Button>
				</div>
			</Container>
		</section>
	)
}

export default Hero
