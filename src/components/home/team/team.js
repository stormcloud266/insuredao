import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Container, Title, Button, Flex } from '@UI'
import { Twitter, LinkedIn } from '@images/icons'
import * as styles from './team.module.scss'

const Team = () => {
	const data = useStaticQuery(graphql`
		query TeamQuery {
			allFile(filter: { sourceInstanceName: { eq: "avatars" } }) {
				edges {
					node {
						name
						childImageSharp {
							gatsbyImageData(width: 200, placeholder: BLURRED)
						}
					}
				}
			}
		}
	`)

	const images = data.allFile.edges

	const team = [
		{
			name: 'Kohshi Shiba',
			role: 'Founder / Developer',
			imageName: 'kohshi-shiba',
			twitter: '',
			linkedin: '',
		},
		{
			name: 'Daisuke Iwase',
			role: 'Chairman / Insurance Expert',
			imageName: 'daisuke-iwase',
			twitter: '',
			linkedin: '',
		},
		{
			name: 'Shun Oikawa',
			role: 'Co-founder / Lead Developer',
			imageName: 'shun-oikawa',
			twitter: '',
			linkedin: '',
		},
		{
			name: 'Rubio Kishigami',
			role: 'Co-founder / Business Development',
			imageName: 'rubio-kishigami',
			twitter: '',
			linkedin: '',
		},
		{
			name: 'Motoki Takahashi',
			role: 'Co-founder / Marketing',
			imageName: 'motoki-takahashi',
			twitter: '',
			linkedin: '',
		},
	]
	return (
		<Container wrapper section isSection>
			<Title center lg margin>
				Meet the team
			</Title>

			<div className={styles.teamContainer}>
				{team.map(({ name, role, imageName, twitter, linkedin }) => {
					const imageMatch = images.find(
						({ node: image }) => image.name === imageName
					)
					const image = getImage(imageMatch.node)
					return (
						<div className={styles.profileContainer} key={name}>
							<GatsbyImage image={image} alt={name} />
							<p className={styles.name}>{name}</p>
							<p className={styles.role}>{role}</p>
							<div className={styles.socialContainer}>
								<a href='https://example.com'>
									<Twitter />
								</a>
								<a href='https://example.com'>
									<LinkedIn />
								</a>
							</div>
						</div>
					)
				})}
			</div>
		</Container>
	)
}

export default Team
