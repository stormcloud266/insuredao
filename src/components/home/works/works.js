import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
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
				<ul className={styles.list}>
					<li>InsureDAO Build</li>
					<li>InsureDAO Market</li>
					<li>InsureDAO Investments</li>
				</ul>
			</div>
			<Container sectionTop className={styles.imageContainer}>
				<Fade triggerOnce>
					<StaticImage
						src='../../../assets/images/how-it-works.png'
						alt=''
						placeholder='blurred'
						layout='constrained'
						width={840}
					/>
				</Fade>
			</Container>
		</Container>
	)
}

export default Works
