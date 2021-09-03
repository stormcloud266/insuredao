import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Container, Title, Flex } from '@UI'
import * as styles from './stats.module.scss'

const Stats = () => {
	const data = [
		{
			number: '50+',
			label: 'Insurance Products',
		},
		{
			number: '$5.3m',
			label: 'Total Value Locked',
		},
		{
			number: '28.02%',
			label: 'Average Yield',
		},
	]

	return (
		<Container wrapper section isSection>
			<Title center sm weightMd>
				Insurance For Everyone!
			</Title>

			<Flex autoLayout className={styles.row}>
				{data.map((item, i) => (
					<Fade triggerOnce key={item.label}>
						<div className={styles.column}>
							<Title center tag='p'>
								{item.number}
							</Title>
							<p className={styles.label}>{item.label}</p>
						</div>
					</Fade>
				))}
			</Flex>
		</Container>
	)
}

export default Stats
