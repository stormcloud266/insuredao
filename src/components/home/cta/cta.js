import React from 'react'
import { Container, Button, Title } from '@UI'
import * as styles from './cta.module.scss'

const Cta = () => {
	return (
		<div className={styles.container}>
			<Container wrapper>
				<Title className={styles.title}>Want product news and updates?</Title>
				<Title className={styles.subtitle} tag='p'>
					Join in with the conversation on Discord...
				</Title>
				<Button
					href='https://example.com'
					green
					square
					className={styles.button}
				>
					Join Us...
				</Button>
			</Container>
		</div>
	)
}

export default Cta
