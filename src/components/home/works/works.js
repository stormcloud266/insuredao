import React from 'react'
import { Container, Title } from '@UI'
import * as styles from './works.module.scss'

const Works = () => {
	return (
		<Container wrapper section>
			<div className={styles.textContainer}>
				<Title lg>How it all works?</Title>
				<p>InsureDAO provides three functions:</p>
				<p>InsureDAO Build InsureDAO Market InsureDAO Investments</p>
			</div>
		</Container>
	)
}

export default Works
