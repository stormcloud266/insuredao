import React from 'react'
import { Container, Title, Button, Flex } from '@UI'
import * as styles from './stats.module.scss'

const Stats = () => {
	return (
		<Container wrapper section isSection>
			<Title center sm weightMd margin>
				Insurance For Everyone!
			</Title>

			<Flex autoLayout className={styles.row}>
				<div className={styles.column}>
					<Title center tag='p'>
						50+
					</Title>
					<p className={styles.label}>Insurance Products</p>
				</div>
				<div className={styles.column}>
					<Title center tag='p'>
						50+
					</Title>
					<p className={styles.label}>Insurance Products</p>
				</div>
				<div className={styles.column}>
					<Title center tag='p'>
						50+
					</Title>
					<p className={styles.label}>Insurance Products</p>
				</div>
			</Flex>
		</Container>
	)
}

export default Stats
