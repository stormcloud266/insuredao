import React from 'react'
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
				{data.map((item) => (
					<div className={styles.column} key={item.label}>
						<Title center tag='p'>
							{item.number}
						</Title>
						<p className={styles.label}>{item.label}</p>
					</div>
				))}
			</Flex>
		</Container>
	)
}

export default Stats
