import React from 'react'
import { Container, Title, Button, Flex } from '@UI'
import { Twitter, LinkedIn } from '@images/icons'
import * as styles from './team.module.scss'

const Team = () => {
	const team = [
		{
			name: 'Kohshi Shiba',
			role: 'Founder / Developer',
			imageName: '',
			twitter: '',
			linkedin: '',
		},
		{
			name: 'Daisuke Iwase',
			role: 'Chairman / Insurance Expert',
			imageName: '',
			twitter: '',
			linkedin: '',
		},
		{
			name: 'Shun Oikawa',
			role: 'Co-founder / Lead Developer',
			imageName: '',
			twitter: '',
			linkedin: '',
		},
		{
			name: 'Rubio Kishigami',
			role: 'Co-founder / Business Development',
			imageName: '',
			twitter: '',
			linkedin: '',
		},
		{
			name: 'Motoki Takahashi',
			role: 'Co-founder / Marketing',
			imageName: '',
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
					return (
						<div className={styles.profileContainer}>
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
