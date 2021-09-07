import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Container, Button, Title } from '@UI'
import * as styles from './cta.module.scss'

const Cta = () => {
	return (
		<div className={styles.container}>
			<Container wrapper>
				<Fade triggerOnce fraction={0.4}>
					<Title className={styles.title}>Want product news and updates?</Title>
				</Fade>

				<Fade triggerOnce fraction={0.4}>
					<Title className={styles.subtitle} tag='p'>
						Join in with the conversation on Discord...
					</Title>
				</Fade>

				<Button
					href='https://discord.gg/8BA5f5rurq'
					green
					className={styles.button}
				>
					Join Us...
				</Button>
			</Container>
		</div>
	)
}

export default Cta
