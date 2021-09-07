import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Fade } from 'react-awesome-reveal'
import { Container, Title } from '@UI'
import { Twitter, LinkedIn, Github } from '@images/icons'
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
			links: [
				{
					url: 'https://twitter.com/KOHSHIBA',
					icon: <Twitter />,
				},
				{
					url: 'https://linkedin.com/in/kohshiba',
					icon: <LinkedIn />,
				},
				{
					url: 'https://github.com/kohshiba',
					icon: <Github />,
				},
			],
		},
		{
			name: 'Daisuke Iwase',
			role: 'Chairman / Insurance Expert',
			imageName: 'daisuke-iwase',
			links: [
				{
					url: 'https://twitter.com/totodaisuke',
					icon: <Twitter />,
				},
				{
					url: 'https://linkedin.com/in/daisuke-iwase-bb413215',
					icon: <LinkedIn />,
				},
			],
		},
		{
			name: 'Shun Oikawa',
			role: 'Co-founder / Lead Developer',
			imageName: 'shun-oikawa',
			links: [
				{
					url: 'https://twitter.com/oishun1112',
					icon: <Twitter />,
				},
				{
					url: 'https://github.com/oishun1112',
					icon: <Github />,
				},
			],
		},
		{
			name: 'Rubio Kishigami',
			role: 'Co-founder / Business Development',
			imageName: 'rubio-kishigami',
			links: [
				{
					url: 'https://twitter.com/rubiokishi1',
					icon: <Twitter />,
				},
				{
					url: 'https://linkedin.com/in/rubio-kishigami-31b029160',
					icon: <LinkedIn />,
				},
			],
		},
		{
			name: 'Motoki Takahashi',
			role: 'Co-founder / Marketing',
			imageName: 'motoki-takahashi',
			links: [
				{
					url: 'https://twitter.com/motoki304',
					icon: <Twitter />,
				},
				{
					url: 'https://linkedin.com/in/motoki-takahashi-778225203',
					icon: <LinkedIn />,
				},
			],
		},
	]
	return (
		<Container wrapper section isSection>
			<Title center lg margin>
				Meet the team
			</Title>

			<div className={styles.teamContainer}>
				{team.map(({ name, role, imageName, links }) => {
					const imageMatch = images.find(
						({ node: image }) => image.name === imageName
					)
					const image = getImage(imageMatch.node)
					return (
						<div className={styles.profileContainer} key={name}>
							<Fade triggerOnce fraction={0.2}>
								<div>
									<GatsbyImage image={image} alt={name} />
									<p className={styles.name}>{name}</p>
									<p className={styles.role}>{role}</p>
									<div className={styles.socialContainer}>
										{links.map(({ url, icon }) => (
											<a href={url} ke={url} target='_blank' rel='noreferrer'>
												{icon}
											</a>
										))}
									</div>
								</div>
							</Fade>
						</div>
					)
				})}
			</div>
		</Container>
	)
}

export default Team
