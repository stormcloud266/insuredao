import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'
import { Container, Title, Button } from '@UI'
import * as styles from './hero.module.scss'

const Hero = () => {
	const { placeholderImage } = useStaticQuery(
		graphql`
			query {
				placeholderImage: file(relativePath: { eq: "InsureDAO_hero.png" }) {
					childImageSharp {
						gatsbyImageData(
							layout: FULL_WIDTH
							placeholder: BLURRED
							quality: 100
						)
					}
				}
			}
		`
	)
	const image = getImage(placeholderImage)
	const bgImage = convertToBgImage(image)
	return (
		<BackgroundImage
			Tag='section'
			className={styles.background}
			// Spread bgImage into BackgroundImage:
			{...bgImage}
			preserveStackingContext
		>
			<div className={styles.container}>
				<Container wrapper>
					<Title black center margin tag='h1'>
						The Open Insurance Protocol
					</Title>
					<p className={styles.subtitle}>
						Allowing anyone to create an insurance market for their DeFi
						protocol & ensure it’s security...
					</p>
					<div className={styles.buttonContainer}>
						<Button href='https://example.com'>Launch App</Button>
						<Button href='https://insuredao.gitbook.io/insuredao/' white>
							Explore Docs
						</Button>
					</div>
				</Container>
			</div>
		</BackgroundImage>
	)
}

export default Hero
