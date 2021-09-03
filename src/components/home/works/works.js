import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Container, Title } from '@UI'
import * as styles from './works.module.scss'

const Works = () => {
	return (
		<Container wrapper section>
			<div className={styles.textContainer}>
				<Fade triggerOnce>
					<Title lg>How it all works?</Title>
				</Fade>
				<p>InsureDAO provides three functions:</p>
				<p>InsureDAO Build InsureDAO Market InsureDAO Investments</p>
			</div>
		</Container>
	)
}

export default Works
